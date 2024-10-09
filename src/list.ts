/**
 * @module list
 */

import {generateUid} from './sb3Generator';

/**
 * Represents a scratch list.
 *
 * @export
 * @class List
 * @typedef {List}
 */
export class List {
    /**
     * The list's uid.
     *
     * @type {string}
     */
    uid: string;

    /**
     * The list's name.
     *
     * @type {string}
     */
    name: string;

    /**
     * The values in the list.
     *
     * @type {Array.<number|string|boolean>}
     */
    values: (number|string|boolean)[] = [];

    /**
     * Creates an instance of List.
     *
     * @constructor
     * @param {string} name
     */
    constructor(name: string) {
        this.name = name;
        this.uid = generateUid();
    }

    /**
     * Adds a value to the list.
     *
     * @param {(number|string|boolean)} value
     * @returns {this}
     */
    withValue(value: (number|string|boolean)) {
        this.values.push(value);
        return this;
    }

    /**
     * Adds multiple values to a list.
     *
     * @param {Array.<number|string|boolean>} values
     * @returns {this}
     */
    withValues(values: (number|string|boolean)[]) {
        values.forEach(value => {
            this.withValue(value);
        });
        return this;
    }
}