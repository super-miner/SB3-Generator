import {md5} from 'js-md5';
import fs from 'fs';
import {getFileExtensionFromPath, getFileNameFromPath} from './utils';

export class Sound {
    _path: string;
    name: string;
    dataFormat: string;
    assetId: string;
    md5ext: string;
    rate: number = 48000;
    sampleCount: number; // TODO: See how these last two are determined

    constructor(path: string) {
        this._path = path;

        const data = fs.readFileSync(path);
        this.assetId = md5(data);
        this.dataFormat = getFileExtensionFromPath(path);
        this.name = getFileNameFromPath(path);
        this.md5ext = this.assetId + '.' + this.dataFormat;
    }
}