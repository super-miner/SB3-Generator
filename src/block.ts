/**
 * @module block
 */

import { generateUid } from "./sb3Generator";

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
     * @type {(Block|null)}
     */
    _lastChildBlock: (Block|null) = null;

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
     * @type {Object.<string, Array.<number|string|boolean|Array.<number|string|boolean>>>}
     */
    inputs: {[id: string]: (number|string|boolean|(number|string|boolean)[])[]} = {};

    /**
     * The parameters being inputted into the block that are not counted as inputs.
     *
     * @type {Object.<id: string, Array.<string>>}
     */
    fields: {[id: string]: string[]} = {};

    /**
     * Whether or not the block has a shadow.
     *
     * @type {boolean}
     */
    shadow: boolean = true;

    /**
     * Is false when the block has a parent.
     *
     * @type {boolean}
     */
    topLevel: boolean = true;

    /**
     * Creates an instance of Block.
     *
     * @constructor
     * @param {string} opcode
     */
    constructor(opcode: string) {
        this.opcode = opcode;
        this._uid = generateUid();
    }

    /**
     * Adds a block as a child of this block.
     *
     * @param {Block} block
     */
    withChildBlock(block: Block) {
        block.topLevel = false;
        block.parent = this._uid;

        if (this._lastChildBlock != null) {
            this._lastChildBlock.next = block._uid;
        }

        this._lastChildBlock = block;
    }
}