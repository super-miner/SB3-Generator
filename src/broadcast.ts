import {generateUid} from './sb3Generator';

export class Broadcast {
    uid: string;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.uid = generateUid();
    }
}