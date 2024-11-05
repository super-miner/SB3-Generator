/**
 * @module block
 */

import { createBlock, generateUid } from "./sb3Generator";
import { Variable } from "./variable";
import { Field, FieldData, Input, opcodeTable } from "./opcodeTable";
import { InputType } from "./inputType";
import { Sprite } from "./sprite";
import { BitMaskType } from "./bitMaskType";

/**
 * Represents a scratch block.
 *
 * @export
 * @class Block
 * @typedef {Block}
 */
export class Block {
    /**
     * The block's uid.
     *
     * @type {string}
     */
    _uid: string;

    /**
     * The next block in the sequence.
     *
     * @type {(Block|null)}
     */
    _nextBlock: Block|null = null;

    /**
     * Getter for next block.
     *
     * @readonly
     * @type {Block|null}
     */
    get nextBlock() {
        return this._nextBlock;
    }

    /** Setter for next block. */
    set nextBlock(block: Block|null) {
        this._nextBlock = block;
        this.next = block == null ? null : block._uid;
    }

    /**
     * The previous block in the sequence.
     *
     * @type {(Block|null)}
     */
    _previousBlock: Block|null = null;

    /**
     * Getter for previous block.
     *
     * @readonly
     * @type {Block|null}
     */
    get previousBlock() {
        return this._previousBlock;
    }

    /** Setter for previous block. */
    set previousBlock(block: Block|null) {
        this._previousBlock = block;
    }

    /**
     * This block's parent in block form.
     *
     * @type {(Block|null)}
     */
    _parentBlock: Block|null = null;

    /**
     * Getter for parent block.
     *
     * @readonly
     * @type {Block}
     */
    get parentBlock() {
        return this._parentBlock;
    }

    /** Setter for parent block. */
    set parentBlock(block: (Block|null)) {
        this._parentBlock = block;
        this.parent = block == null ? null : block._uid;
        this.topLevel = false;
    }

    /**
     * This block's referenced blocks.
     *
     * @type {Block[]}
     */
    _references: Block[] = [];

    /**
     * The sprite that this block is attached to.
     *
     * @type {(Sprite|null)}
     */
    _sprite: Sprite|null = null;

    /**
     * Getter for sprite
     *
     * @type {Sprite}
     */
    get sprite() {
        return this._sprite;
    }

    /** Setter for sprite */
    set sprite(sprite: (Sprite|null)) {
        if (this._sprite == sprite) {
            return;
        }

        this._sprite = sprite;

        this._sprite?.withBlock(this);

        if (this._previousBlock != null) {
            this._previousBlock.sprite = sprite;
        }

        this._references.forEach(reference => {
            reference.sprite = sprite;
        });
    }

    /**
     * The field data for this block.
     *
     * @type {FieldData}
     */
    _fieldData: FieldData;

    /**
     * The opcode (identifier) for the block.
     *
     * @type {string}
     */
    opcode: string;

    /**
     * The uid of the next block in the sequence.
     *
     * @type {(string|null)}
     */
    next: (string|null) = null;

    /**
     * The current block's parent.
     *
     * @type {(string|null)}
     */
    parent: (string|null) = null;

    /**
     * The parameters being inputted into the block.
     *
     * @type {Object.<string, Array<number|string|boolean|Array<number|string|boolean>>>}
     */
    inputs: {[id: string]: (number|string|boolean|(number|string|boolean)[])[]} = {};

    /**
     * The parameters being inputted into the block that are not counted as inputs.
     *
     * @type {Object.<string, Array<(string|null)>>}
     */
    fields: {[id: string]: (string|null)[]} = {};

    /**
     * Whether or not the block has a shadow.
     *
     * @type {boolean}
     */
    shadow: boolean = false;

    /**
     * Is false when the block has a parent.
     *
     * @type {boolean}
     */
    topLevel: boolean = true;

    /**
     * The x position of the block (only needed if top level).
     *
     * @type {number}
     */
    x: number = 0;

    /**
     * The y position of the block (only needed if top level).
     *
     * @type {number}
     */
    y: number = 0;

    /**
     * Creates an instance of Block.
     *
     * @constructor
     * @param {string} opcode
     * @param {Array<(string|Variable|Block|null)>} inputs
     * @param {Array<string>}
     */
    constructor(opcode: string, inputs: (string|Variable|Block|null)[], fields: string[]) {
        this.opcode = opcode;
        this._fieldData = opcodeTable[opcode];
        this._uid = generateUid();
        this.setInputs(inputs);
        this.setFields(fields);
    }

    /**
     * Makes the block into a shadow.
     *
     * @returns {this}
     */
    asShadow() {
        this.shadow = true;
        this.topLevel = false;

        return this;
    }

    /**
     * Adds a block as a child of this block (returns the added block).
     *
     * @param {Block} block
     * @returns {Block}
     */
    withNextBlock(block: Block) {
        this.nextBlock = block;
        block.previousBlock = this;
        block.parentBlock = this;

        if (this._sprite != null) {
            block.sprite = this._sprite;
        }

        return block;
    }

    /**
     * Sets the inputs for this block.
     *
     * @param {Array<(string|Variable|Block|null)>} inputs
     * @private
     */
    setInputs(inputs: (string|Variable|Block|null)[]) {
        for (let i = 0; i < this._fieldData.inputs.length; i++) {
            let inputField = this._fieldData.inputs[i];
            let input = inputs[i];

            if (inputField.validValues != null && input != null && typeof input == 'string' && !inputField.validValues.includes(input)) {
                console.log('WARN: Invalid value for input ' + inputField.name + ' in ' + this.opcode + '. ' + inputField.name + ' can only accept ["' + inputField.validValues.join('","') + '"], given "' + input + '". (block uid: ' + this._uid + ')');
            }

            if (inputField.reference != null) {
                let referencedBlock = createBlock(inputField.reference, [], [typeof input == 'string' ? input : '']);
                referencedBlock.asShadow();

                this.setInput(inputField, typeof input == 'string' ? null : input, referencedBlock);

                this._references.push(referencedBlock);
            }
            else {
                this.setInput(inputField, input, null);
            }
        }
    }

    /**
     * Sets the fields for this block.
     *
     * @param {string[]} fields
     * @private
     */
    setFields(fields: string[]) {
        for (let i = 0; i < this._fieldData.fields.length; i++) {
            let fieldField = this._fieldData.fields[i];
            let field = fields[i];

            if (fieldField.validValues != null && field != null && typeof field == 'string' && !fieldField.validValues.includes(field)) {
                console.log('WARN: Invalid value for field ' + fieldField.name + ' in ' + this.opcode + '. ' + fieldField.name + ' can only accept ["' + fieldField.validValues.join('","') + '"], given "' + field + '". (block uid: ' + this._uid + ')');
            }

            this.setField(fieldField, field);
        }
    }

    /**
     * Sets the value of an input.
     *
     * @param {Input} input
     * @param {(string|Variable|Block|null)} to
     * @param {(Block|null)} block
     * @private
     */
    setInput(input: Input, to: (string|Variable|Block|null), block: (Block|null)) {
        if (to == null) {
            this.inputs[input.name] = [];
        }
        else if (typeof to == 'string') {
            this.inputs[input.name] = [
                InputType.INCLUDES_LITERAL,
                [
                    input.bitMaskType == BitMaskType.STRING ? InputType.INCLUDES_VARIABLE | InputType.CUSTOM_VARIABLE : InputType.CUSTOM_LITERAL,
                    to
                ]
            ];
        }
        else if (to instanceof Variable) {
            this.inputs[input.name] = [
                InputType.INCLUDES_VARIABLE | InputType.INCLUDES_LITERAL,
                [
                    InputType.CUSTOM_VARIABLE | InputType.CUSTOM_LITERAL,
                    to.name,
                    to.uid
                ]
            ];

            if (block == null) {
                this.inputs[input.name].push(
                    [
                        InputType.CUSTOM_LITERAL,
                        ''
                    ]
                );
            }
        }
        else {
            this.inputs[input.name] = [
                InputType.INCLUDES_VARIABLE | InputType.INCLUDES_LITERAL,
                to._uid,
                [
                    InputType.CUSTOM_LITERAL,
                    ''
                ]
            ];

            to.parentBlock = this;
            this._references.push(to);
        }

        if (block != null) {
            if (to == null) {
                this.inputs[input.name].push(InputType.INCLUDES_LITERAL);
            }

            this.inputs[input.name].push(block._uid);
        }
    }

    /**
     * Sets the value of a field.
     *
     * @param {Field} field
     * @param {string} to
     * @private
     */
    setField(field: Field, to: string) {
        this.fields[field.name] = [
            to,
            null
        ];
    }
}