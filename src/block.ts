/**
 * @module block
 */

import { generateUid } from "./sb3Generator";
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
     * The block that comes before the current block.
     *
     * @type {Array<(Block)>}
     */
    _childBlocks: Block[] = [];

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

        this._childBlocks.forEach(block => {
            block.sprite = sprite;
        });

        this._sprite = sprite;

        this._sprite?.withBlock(this);
    }

    /**
     * The opcode (identifier) for the block.
     *
     * @type {string}
     */
    opcode: string;

    /**
     * The block that comes after the current block.
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
     * @type {Object.<string, Array<string>>}
     */
    fields: {[id: string]: string[]} = {};

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
     * @param {Array<(string|Variable)>} inputs
     */
    constructor(opcode: string, inputs: (string|Variable)[]) {
        this.opcode = opcode;
        this.setInputs(inputs);
        this._uid = generateUid();
    }

    /**
     * Adds a block as a child of this block.
     *
     * @param {Block} block
     * @returns {this}
     */
    withChildBlock(block: Block) {
        block.topLevel = false;
        block.parent = this._uid;

        if (this._childBlocks.length > 0) {
            this._childBlocks[this._childBlocks.length - 1].next = block._uid;
        }
        else {
            this.next = block._uid;
        }

        if (this._sprite != null) {
            block.sprite = this._sprite;
        }

        this._childBlocks.push(block);
        return this;
    }

    /**
     * Sets the inputs for this block.
     *
     * @param {Array<(string|Variable)>} inputs
     * @private
     */
    setInputs(inputs: (string|Variable)[]) {
        let inputFields = opcodeTable[this.opcode];

        for (let i = 0; i < inputFields.length; i++) {
            this.setInput(inputFields[i], inputs[i]);
        }
    }

    /**
     * Sets the value of an input.
     *
     * @param {string} input
     * @param {(string|Variable)} to
     * @private
     */
    setInput(input: string, to: (string|Variable)) {
        switch(typeof to) {
            case 'string':
                this.inputs[input] = [
                    InputType.INCLUDES_LITERAL,
                    [
                        InputType.CUSTOM_LITERAL,
                        to
                    ]
                ];
                break;
            default:
                this.inputs[input] = [
                    InputType.INCLUDES_VARIABLE | InputType.INCLUDES_LITERAL,
                    [
                        InputType.CUSTOM_VARIABLE | InputType.CUSTOM_LITERAL,
                        to.name,
                        to.uid
                    ],
                    [
                        InputType.CUSTOM_LITERAL,
                        ''
                    ]
                ];
                break;
        }
    }
}