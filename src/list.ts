import {generateUid} from './sb3Generator';

export class List {
    uid: string;
    name: string;
    values: (number|string|boolean)[] = [];

    constructor(name: string) {
        this.name = name;
        this.uid = generateUid();
    }

    withValue(value: (number|string|boolean)) {
        this.values.push(value);
        return this;
    }

    withValues(values: (number|string|boolean)[]) {
        values.forEach(value => {
            this.withValue(value);
        });
        return this;
    }
}