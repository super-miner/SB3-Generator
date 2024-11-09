/**
 * @module utils
 */

import {IAudioMetadata} from 'music-metadata';
import {resolve} from 'path';
import {createSyncFn} from 'synckit';

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
 * @returns {IAudioMetadata}
 */
export function getAudioMetadataSync(path: string) {
    return _getAudioMetadataSync(path) as unknown as IAudioMetadata;
}

const _getAudioMetadataSync = createSyncFn(resolve('src/audioMetadataWorker.ts'), {
    tsRunner: 'tsx'
});
