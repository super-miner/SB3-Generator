/**
 * @module block
 */

import { createBlock, generateUid } from "./sb3Generator";
import { Variable } from "./variable";
import { Field, FieldData, Input, opcodeTable } from "./opcodeTable";
import { InputType } from "./inputType";
import { Sprite } from "./sprite";
import { Broadcast } from "./broadcast";
import { InputFieldType } from "./inputFieldType";
import { HasChildren, Mutation, Procedure } from "./mutation";
import { MutationType } from "./mutationType";
import { List } from "./list";
import assert from "assert";

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

    get fieldData() {
        return this._fieldData;
    }

    set fieldData(fieldData: FieldData) {
        this._fieldData = fieldData;

        switch (this._fieldData.mutationType) {
            case MutationType.NONE:
                this.mutation = null;
                break;
            case MutationType.HAS_CHILDREN:
                this.mutation = new HasChildren([], false);
                break;
            case MutationType.PROCEDURE_PROTOTYPE:
            case MutationType.PROCEDURE_CALL:
                this.mutation = new Procedure([], true);
        }
    }

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
     * This block's mutation.
     *
     * @type {(Mutation|null)}
     */
    mutation: (Mutation|null) = null;

    /**
     * Creates an instance of Block.
     *
     * @constructor
     * @param {string} opcode
     * @param {Array<(string|Variable|Block|null)>} inputs
     * @param {Array<(string|Broadcast|Varaible|List)>} fields
     */
    constructor(opcode: string, inputs: (string|Variable|Block|null)[], fields: (string|Broadcast|Variable|List)[]) {
        this.opcode = opcode;
        this.fieldData = opcodeTable[opcode];
        this._fieldData = this.fieldData; // Needed to make vscode happy.
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

        if (this.mutation != null && this.mutation instanceof HasChildren) {
            this.mutation.hasnext = true;
        }

        return block;
    }

    /**
     * Gets the block at the top of this block's substack.
     *
     * @returns {Block}
     */
    substackTop() : Block {
        if (this.previousBlock != null && this.parentBlock) {
            return this.parentBlock.substackTop();
        }
        else {
            return this;
        }
    }

    /**
     * Sets the inputs for this block.
     *
     * @param {Array<(string|Variable|Block|null)>} inputs
     * @private
     */
    setInputs(inputs: (string|Variable|Block|null)[]) {
        if (this.mutation instanceof Procedure) {
            if (this._fieldData.mutationType == MutationType.PROCEDURE_CALL) {
                if (inputs.length == 0) {
                    console.log('WARN: Could not create call to custom block as the custom block is not specified.');
                    return;
                }

                if (!(inputs[0] instanceof Block)) {
                    console.log('WARN: procedures_call expects a block as its first parameter.');
                    return;
                }

                const prototype = inputs[0] as Block;

                assert(prototype.mutation instanceof Procedure);

                this.mutation = prototype.mutation;

                for (let i = 1; i < inputs.length; i++) {
                    const input: Input = {
                        name: prototype.mutation._argumentIds[i],
                        inputFieldType: prototype.mutation._argumentTypes[i],
                        reference: null,
                        validValues: null
                    };

                    this.setInput(input, inputs[i], null);
                }
            }
            else {
                if (inputs.length == 0) {
                    this.mutation.warp = true;
                    return;
                }

                if (!(inputs[0] == 'true' || inputs[0] == 'false')) { // TODO: Make this function able to take in boolean.
                    console.log('WARN: procedures_prototype expects "true" or "false" as its first parameter.');
                    return;
                }

                this.mutation.warp = inputs[0] == 'true';

                for (let i = 1; i < inputs.length; i++) {
                    const input = inputs[i];

                    if (!(input instanceof Block || typeof input == 'string')) {
                        console.log('WARN: procedures_prototype\'s expects all parameters to be strings or blocks.');
                        return;
                    }

                    this.mutation.withArgument(input);
                }
            }
        }
        else {
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
    }

    /**
     * Sets the fields for this block.
     *
     * @param {Array<(string|Broadcast|Variable|List)>} fields
     * @private
     */
    setFields(fields: (string|Broadcast|Variable|List)[]) {
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
                    input.inputFieldType as number,
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
                        input.inputFieldType as number,
                        ''
                    ]
                );
            }
        }
        else {
            let substackTop = to.substackTop();

            this.inputs[input.name] = [
                InputType.INCLUDES_VARIABLE | InputType.INCLUDES_LITERAL,
                substackTop._uid,
            ];

            if (input.inputFieldType != InputFieldType.BLOCK) {
                this.inputs[input.name].push(
                    [
                        input.inputFieldType as number,
                        ''
                    ]
                );
            }

            substackTop.parentBlock = this;
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
     * @param {(string|Broadcast|Varaible|List)} to
     * @private
     */
    setField(field: Field, to: (string|Broadcast|Variable|List)) {
        if (typeof to == 'string') {
            this.fields[field.name] = [
                to,
                null
            ];
        }
        else if (to instanceof Broadcast) {
            this.fields[field.name] = [
                to.name,
                to.uid
            ];
        }
        else if (to instanceof Variable) {
            this.fields[field.name] = [
                to.name,
                to.uid
            ];
        }
        else {
            this.fields[field.name] = [
                to.name,
                to.uid
            ];
        }
    }
}