import {md5} from 'js-md5';
import fs from 'fs';
import {getFileExtensionFromPath, getFileNameFromPath} from './utils';

export class Costume {
    _path: string;
    _data: Buffer;
    name: string;
    dataFormat: string;
    assetId: string;
    md5ext: string;
    rotationCenterX: number = 0.0;
    rotationCenterY: number = 0.0;

    constructor(path: string) {
        this._path = path;

        this._data = fs.readFileSync(path);
        this.assetId = md5(this._data);
        this.dataFormat = getFileExtensionFromPath(path);
        this.name = getFileNameFromPath(path);
        this.md5ext = this.assetId + '.' + this.dataFormat;
    }
}