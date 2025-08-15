/**
 * @module comment
 */

import { Block } from "./block";
import { generateUid } from "./sb3Generator";

/**
 * Represents a comment.
 *
 * @export
 * @class Comment
 * @typedef {Comment}
 */
export class Comment {
    /**
     * The comment's uid.
     *
     * @type {string}
     */
    _uid: string;

    /**
     * The block that this comment is attached to, null for no attachment.
     *
     * @type {Block|null}
     */
    _block: Block|null = null;

    /**
     * The block id for the block that this comment is attached to, null for no attachment.
     *
     * @type {string|null}
     */
    blockId: string|null = null;
    
    /**
     * The x position of this comment.
     *
     * @type {number}
     */
    x: number = 0;
    
    /**
     * The y position of this comment.
     *
     * @type {number}
     */
    y: number = 0;
    
    /**
     * The width of this comment.
     *
     * @type {number}
     */
    width: number = 200;
    
    /**
     * The height of this comment.
     *
     * @type {number}
     */
    height: number = 200;
    
    /**
     * Whether this comment is minimized.
     *
     * @type {boolean}
     */
    minimized: boolean = false;
    
    /**
     * The text to be displayed within this comment.
     *
     * @type {string}
     */
    text: string = '';

    /**
     * Creates an instance of Comment.
     *
     * @constructor
     * @param {string} text
     * @param {number} width
     * @param {number} height
     */
    constructor(text: string, width: number, height: number) {
        this._uid = generateUid();
        this.text = text;
        this.width = width;
        this.height = height;
    }

    /**
     * Attaches a block to the comment.
     * 
     * @param {Block|null} block 
     * @returns {this}
     */
    withBlock(block: Block|null) {
        this._block = block;
        this.blockId = block == null ? null : block._uid;

        return this;
    }

    /**
     * Sets the x position of this comment.
     * 
     * @param {number} x
     * @returns {this}
     */
    withXPosition(x: number) {
        this.x = x;

        return this;
    }

    /**
     * Sets the y position of this comment.
     * 
     * @param {number} y
     * @returns {this}
     */
    withYPosition(y: number) {
        this.y = y;

        return this;
    }

    /**
     * Sets the position of this comment.
     * 
     * @param {number} x
     * @param {number} y
     * @returns {this}
     */
    withPosition(x: number, y: number) {
        this.withXPosition(x);
        this.withYPosition(y);

        return this;
    }

    /**
     * Sets the width of this comment.
     * 
     * @param {number} width
     * @returns {this}
     */
    withWidth(width: number) {
        this.width = width;

        return this;
    }

    /**
     * Sets the height of this comment.
     * 
     * @param {number} height
     * @returns {this}
     */
    withHeight(height: number) {
        this.height = height;

        return this;
    }

    /**
     * Sets the size of this comment.
     * 
     * @param {number} width
     * @param {number} height
     * @returns {this}
     */
    withSize(width: number, height: number) {
        this.withWidth(width);
        this.withHeight(height);

        return this;
    }

    /**
     * Sets this comment to be minimized.
     * 
     * @returns {this}
     */
    asMinimized() {
        this.setMinimized(true);

        return this;
    }

    /**
     * Sets whether this comment is minimized.
     * 
     * @param {boolean} minimized 
     * @returns {this}
     */
    setMinimized(minimized: boolean) {
        this.minimized = minimized;

        return this;
    }

    /**
     * Sets the text for this comment.
     * 
     * @param {string} text 
     * @returns {this}
     */
    withText(text: string) {
        this.text = text;

        return this;
    }
}