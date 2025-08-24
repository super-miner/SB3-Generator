/**
 * @module costume
 */

import {md5} from 'js-md5';
import fs from 'fs';
import {getFileExtensionFromPath, getFileNameFromPath} from './utils';

/**
 * Represents a sprite's costume.
 *
 * @export
 * @class Costume
 * @typedef {Costume}
 */
export class Costume {
    /**
     * The file path to the costume file's location outside of the generated project.
     *
     * @type {string}
     */
    _path: string;

    /**
     * The raw data making up the image.
     *
     * @type {Buffer}
     */
    _data: Buffer;

    /**
     * The costume's name.
     *
     * @type {string}
     */
    name: string;

    /**
     * The data format of the costume (usually it's file extension).
     *
     * @type {string}
     */
    dataFormat: string;

    /**
     * The costumes md5 generated asset id.
     *
     * @type {string}
     */
    assetId: string;

    /**
     * The file path to the costume file's location inside of the generated project.
     *
     * @type {string}
     */
    md5ext: string;

    /**
     * The rotation center of the costume's x-coordinate.
     *
     * @type {number}
     */
    rotationCenterX: number = 0.0;

    /**
     * The rotation center of the costume's y-coordinate.
     *
     * @type {number}
     */
    rotationCenterY: number = 0.0;

    /**
     * Creates an instance of Costume.
     *
     * @constructor
     * @param {string} path
     */
    constructor(path: string) {
        this._path = path;
        this._data = fs.readFileSync(path);
        this.assetId = md5(this._data);
        this.dataFormat = getFileExtensionFromPath(path);
        this.name = getFileNameFromPath(path);
        this.md5ext = this.assetId + '.' + this.dataFormat;
    }

    /**
     * Sets the name for this costume.
     * 
     * @param {string} name 
     * @returns {this}
     */
    withName(name: string) {
        this.name = name;
    }
}