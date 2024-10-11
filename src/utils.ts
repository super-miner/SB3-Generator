/**
 * @module utils
 */

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