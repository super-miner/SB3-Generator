import {Project} from './project';
import {Sprite} from './sprite';
import {Variable} from './variable';
import {Costume} from './costume';
import {Sound} from './sound';

const uidCharacters = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"';

export function createProject(name: string) {
    return new Project(name);
}

export function createSprite(name: string) {
    return new Sprite(name);
}

export function createVariable(name: string) {
    return new Variable(name);
}

export function createCostume(path: string) {
    return new Costume(path);
}

export function createSound(path: string) {
    return new Sound(path);
}

export function generateUid(length: number = 20) {
    let output = '';

    const uidCharactersLength = uidCharacters.length;
    for (let i = 0; i < length; i++) {
        output += uidCharacters.charAt(Math.random() * uidCharactersLength);
    }

    return output;
}