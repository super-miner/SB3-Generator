import {generateUid} from './sb3Generator';

export class Variable {
    uid: string;
    name: string;
    value: (number|string|boolean);

    constructor(name: string) {
        this.name = name;
        this.uid = generateUid();
    }

    withValue(value: (number|string)) {
        this.value = value;
        return this;
    }
}