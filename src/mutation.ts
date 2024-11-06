/**
 * @module Mutation
 * */

/**
 * A container for mutation data.
 *
 * @export
 * @class Mutation
 * @typedef {Mutation}
 */
export class Mutation {
    /**
     * The name of this mutation tag.
     *
     * @type {string}
     */
    tagName: string;

    /**
     * This mutation tag's children.
     *
     * @type {Mutation[]}
     */
    children: Mutation[] = [];

    /**
     * Whether the block this mutation is attached to can have blocks attached below it.
     *
     * @type {boolean}
     */
    hasnext: boolean = false;

    /**
     * Creates an instance of Mutation.
     *
     * @constructor
     * @param {Mutation[]} children
     * @param {boolean} hasnext
     */
    constructor(children: Mutation[], hasnext: boolean) {
        this.tagName = 'mutation';
        this.children = children;
        this.hasnext = hasnext;
    }
}
