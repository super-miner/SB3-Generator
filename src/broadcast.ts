/**
 * @module broadcast
 */

import {generateUid} from './sb3Generator';

/**
 * Represents a broadcast.
 *
 * @export
 * @class Broadcast
 * @typedef {Broadcast}
 */
export class Broadcast {
    /**
     * The uid of the broadcast.
     *
     * @type {string}
     */
    uid: string;

    /**
     * The name of the boradcast.
     *
     * @type {string}
     */
    name: string;

    /**
     * Creates an instance of Broadcast.
     *
     * @constructor
     * @param {string} name
     */
    constructor(name: string) {
        this.name = name;
        this.uid = generateUid();
    }
}