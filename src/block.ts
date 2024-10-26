/**
 * @module block
 */

import { createBlock, generateUid } from "./sb3Generator";
import { Variable } from "./variable";
import { opcodeTable } from "./opcodetable";
import { InputType } from "./inputtype";
import { Sprite } from "./sprite";

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
     * The previous block in the sequence.
     *
     * @type {(Block|null)}
     */
    _previousBlock: Block|null = null;

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
     * @param {Array<(string|Variable|null)>} inputs
     * @param {Array<string>}
     */
    constructor(opcode: string, inputs: (string|Variable|null)[], fields: string[]) {
        this.opcode = opcode;
        this.setInputs(inputs);
        this.setFields(fields);
        this._uid = generateUid();
    }

    /** Makes the block into a shadow. */
    asShadow() {
        this.shadow = true;
        this.topLevel = false;
    }

    /**
     * Adds a block as a child of this block (returns the added block).
     *
     * @param {Block} block
     * @returns {Block}
     */
    withNextBlock(block: Block) {
        block.topLevel = false;

        this.next = block._uid;
        this._nextBlock = block;
        block._previousBlock = this;
        block.parent = this._uid;

        if (this._sprite != null) {
            block.sprite = this._sprite;
        }

        return block;
    }

    /**
     * Sets the inputs for this block.
     *
     * @param {Array<(string|Variable|Block)>} inputs
     * @private
     */
    setInputs(inputs: (string|Variable|null)[]) {
        let inputFields = opcodeTable[this.opcode];

        for (let i = 0; i < inputFields.inputs.length; i++) {
            let inputField = inputFields.inputs[i];
            let input = inputs[i];

            if (inputField.reference != null) {
                let referencedBlock = createBlock(inputField.reference, [], [typeof input == 'string' ? input : '']);
                referencedBlock.asShadow();

                this.setInput(inputField.name, typeof input == 'string' ? null : input, referencedBlock);

                this._references.push(referencedBlock);
            }
            else {
                this.setInput(inputField.name, input, null);
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
        let fieldFields = opcodeTable[this.opcode];

        for (let i = 0; i < fieldFields.fields.length; i++) {
            let fieldField = fieldFields.fields[i];
            let field = fields[i];

            this.setField(fieldField.name, field);
        }
    }

    /**
     * Sets the value of an input.
     *
     * @param {string} input
     * @param {(string|Variable|null)} to
     * @param {(Block|null)} block
     * @private
     */
    setInput(input: string, to: (string|Variable|null), block: (Block|null)) {
        if (to == null) {
            this.inputs[input] = [];
        }
        else if (typeof to == 'string') {
            this.inputs[input] = [
                InputType.INCLUDES_LITERAL,
                [
                    InputType.CUSTOM_LITERAL,
                    to
                ]
            ];
        }
        else if (to instanceof Variable) {
            this.inputs[input] = [
                InputType.INCLUDES_VARIABLE | InputType.INCLUDES_LITERAL,
                [
                    InputType.CUSTOM_VARIABLE | InputType.CUSTOM_LITERAL,
                    to.name,
                    to.uid
                ],
            ];

            if (block == null) {
                this.inputs[input].push(
                    [
                        InputType.CUSTOM_LITERAL,
                        ''
                    ]
                );
            }
        }

        if (block != null) {
            if (to == null) {
                this.inputs[input].push(InputType.INCLUDES_LITERAL);
            }

            this.inputs[input].push(block._uid);
        }
    }

    /**
     * Sets the value of a field.
     *
     * @param {string} field
     * @param {string} to
     * @private
     */
    setField(field: string, to: string) {
        this.fields[field] = [
            to,
            null
        ];
    }
}