/**
 * @module sb3Generator
 */

import {Project} from './project';
import {Sprite} from './sprite';
import {Variable} from './variable';
import {Costume} from './costume';
import {Sound} from './sound';
import { List } from './list';
import { Broadcast } from './broadcast';
import { Block } from './block';
import { Mutation } from './mutation';

/**
 * The characters used to generate uids.
 *
 * @type {("!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\"")}
 */
const uidCharacters = '!#$%()*+,-./:;=?@[]^`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Creates a project.
 *
 * @export
 * @param {string} name
 * @returns {Project}
 */
export function createProject(name: string, outputDirectory: string = 'output') {
    return new Project(name, outputDirectory);
}

/**
 * Creates a sprite.
 *
 * @export
 * @param {string} name
 * @returns {Sprite}
 */
export function createSprite(name: string) {
    return new Sprite(name);
}

/**
 * Creates a variable.
 *
 * @export
 * @param {string} name
 * @returns {Variable}
 */
export function createVariable(name: string) {
    return new Variable(name);
}

/**
 * Creates a list.
 *
 * @export
 * @param {string} name
 * @returns {List}
 */
export function createList(name: string) {
    return new List(name);
}

/**
 * Creates a broadcast.
 *
 * @export
 * @param {string} name
 * @returns {Broadcast}
 */
export function createBroadcast(name: string) {
    return new Broadcast(name);
}

/**
 * Creates a costume.
 *
 * @export
 * @param {string} path
 * @returns {Costume}
 */
export function createCostume(path: string) {
    return new Costume(path);
}

/**
 * Creates a sound.
 *
 * @export
 * @param {string} path
 * @returns {Sound}
 */
export function createSound(path: string) {
    return new Sound(path);
}

/**
 * Creates a block.
 *
 * @export
 * @param {string} opcode
 * @param {Array<(string|Broadcast|Variable|Block|null)>} inputs
 * @param {Array<(string|Broadcast|Variable|List)>} fields
 * @returns {Block}
 */
export function createBlock(opcode: string, inputs: (string|Broadcast|Variable|Block|null)[] = [], fields: (string|Broadcast|Variable|List)[] = []) {
    return new Block(opcode, inputs, fields);
}

/**
 * Generates a uid.
 *
 * @export
 * @param {number} [length=20]
 * @returns {string}
 */
export function generateUid(length: number = 20) {
    let output = '';

    const uidCharactersLength = uidCharacters.length;
    for (let i = 0; i < length; i++) {
        output += uidCharacters.charAt(Math.random() * uidCharactersLength * 0.9999999);
    }

    return output;
}