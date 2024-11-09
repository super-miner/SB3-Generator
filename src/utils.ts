/**
 * @module utils
 */

import {IAudioMetadata, parseFile} from 'music-metadata';
import {runLoopOnce} from 'deasync';

/**
 * Gets a file extension from a path.
 *
 * @export
 * @param {string} path
 * @returns {string}
 */
export function getFileExtensionFromPath(path: string) {
    let fileNameWithPath = path.split(/[\\/]/).pop();

    if (fileNameWithPath === undefined) {
        return '';
    }

    let fileNameStartIndex = fileNameWithPath.lastIndexOf('.');

    if (fileNameWithPath === '' || fileNameStartIndex < 1) {
        return '';
    }

    return fileNameWithPath.slice(fileNameStartIndex + 1);
}

/**
 * Gets a file name from a path.
 *
 * @export
 * @param {string} path
 * @returns {string}
 */
export function getFileNameFromPath(path: string) {
    let fileNameWithPath = path.split(/[\\/]/).pop();

    if (fileNameWithPath === undefined) {
        return '';
    }

    let fileNameStartIndex = fileNameWithPath.lastIndexOf('.');

    if (fileNameWithPath === '' || fileNameStartIndex < 1) {
        return '';
    }

    return fileNameWithPath.slice(0, fileNameStartIndex);
}

/**
 * Gets the audio metadata from a given path.
 *
 * @export
 * @param {string} path
 * @returns {IAudioMetadata|null}
 */
export function getAudioMetadataSync(path: string): IAudioMetadata|null {
    let done = false;
    let metadata = null;

    parseFile(path).then(_metadata => {
        metadata = _metadata;
        done = true;
    })
    .catch(error => {
        console.log('WARN: Failed reading audio metadata from the file ' + path + ', produces the error ' + error);
        done = true;
    });

    while (!done) {
        runLoopOnce();
    }

    return metadata;
}