/**
 * @module variable
 */

import {generateUid} from './sb3Generator';

/**
 * Represents a scratch variable.
 *
 * @export
 * @class Variable
 * @typedef {Variable}
 */
export class Variable {
    /**
     * The variable's uid.
     *
     * @type {string}
     */
    uid: string;
    
    /**
     * The variable's name.
     *
     * @type {string}
     */
    name: string;
    
    /**
     * The variable's value.
     *
     * @type {(number|string|boolean)}
     */
    value: (number|string|boolean);

    /**
     * Creates an instance of Variable.
     *
     * @constructor
     * @param {string} name
     */
    constructor(name: string) {
        this.name = name;
        this.uid = generateUid();
    }

    /**
     * Sets the variable's value.
     *
     * @param {(number|string)} value
     * @returns {this}
     */
    withValue(value: (number|string)) {
        this.value = value;
        return this;
    }
}