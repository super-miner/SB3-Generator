/**
 * @module sound
 */

import {md5} from 'js-md5';
import fs from 'fs';
import {getAudioMetadataSync, getFileExtensionFromPath, getFileNameFromPath} from './utils';
import {parseFile} from 'music-metadata';

/**
 * Represents a scratch sound.
 *
 * @export
 * @class Sound
 * @typedef {Sound}
 */
export class Sound {
    /**
     * The file path to the sound file's location outside of the generated project.
     *
     * @type {string}
     */
    _path: string;

    /**
     * The raw data making up the sound.
     *
     * @type {Buffer}
     */
    _data: Buffer;

    /**
     * The name of the sound.
     *
     * @type {string}
     */
    name: string;

    /**
     * The sound's data format (usually it's file extension).
     *
     * @type {string}
     */
    dataFormat: string;

    /**
     * The sounds md5 generated asset id.
     *
     * @type {string}
     */
    assetId: string;

    /**
     * The file path to the sound file's location inside of the generated project.
     *
     * @type {string}
     */
    md5ext: string;

    /**
     * The sampling rate of the sound.
     *
     * @type {number}
     */
    rate: number = 0;

    /**
     * The sample count of the sound.
     *
     * @type {number}
     */
    sampleCount: number = 0;

    /**
     * Creates an instance of Sound.
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

        const metadata = getAudioMetadataSync(path); // TODO: test this
        if (metadata != null) {
            if (metadata.format.sampleRate) {
                this.rate = metadata.format.sampleRate;
                if (metadata.format.duration) this.sampleCount = metadata.format.sampleRate * metadata.format.duration;
            }
        }
    }
}