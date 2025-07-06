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
     * @type {Array<string>}
     */
    values: string[] = [];

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
     * @param {string|number|boolean} value
     * @returns {this}
     */
    withValue(value: string|number|boolean) {
        this.values.push(value.toString());
        return this;
    }

    /**
     * Adds multiple values to a list.
     *
     * @param {Array.<string|number|boolean>} values
     * @returns {this}
     */
    withValues(values: (string|number|boolean)[]) {
        values.forEach(value => {
            this.withValue(value);
        });
        
        return this;
    }
}