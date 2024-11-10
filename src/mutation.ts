/**
 * @module Mutation
 * */

import { Block } from "./block";
import { InputFieldType } from "./inputFieldType";
import { generateUid } from "./sb3Generator";

/**
 * A container for mutation data.
 *
 * @export
 * @class Mutation
 * @typedef {Mutation}
 */
export class Mutation {
    /**
     * The name of this mutation tag.
     *
     * @type {string}
     */
    tagName: string = 'mutation';

    /**
     * This mutation tag's children.
     *
     * @type {Mutation[]}
     */
    children: Mutation[] = [];

    /**
     * Creates an instance of Mutation.
     *
     * @constructor
     * @param {Mutation[]} children
     */
    constructor(children: Mutation[]) {
        this.children = children;
    }
}

/**
 * A container for mutation data.
 *
 * @export
 * @class HasChildren
 * @typedef {HasChildren}
 */
export class HasChildren extends Mutation {
    /**
     * Whether the block this mutation is attached to can have blocks attached below it.
     *
     * @type {boolean}
     */
    hasnext: boolean = false;

    /**
     * Creates an instance of HasChildren.
     *
     * @constructor
     * @param {Mutation[]} children
     * @param {boolean} hasnext
     */
    constructor(children: Mutation[], hasnext: boolean) {
        super(children);

        this.hasnext = hasnext;
    }
}

/**
 * A container for mutation data.
 *
 * @export
 * @class Procedure
 * @typedef {Procedure}
 */
export class Procedure extends Mutation {
    /**
     * Stores informtaion about the function's proc code.
     *
     * @type {string[]}
     */
    _proccode: string[] = [];

    /**
     * Stores information about the argument ids.
     *
     * @type {string[]}
     */
    _argumentids: string[] = [];

    /**
     * Stores information about the argument names.
     *
     * @type {string[]}
     */
    _argumentnames: string[] = [];

    /**
     * Stores information about the default arguments.
     *
     * @type {string[]}
     */
    _argumentdefaults: string[] = [];

    /**
     * Stores information about the types of the arguments.
     *
     * @type {InputFieldType[]}
     */
    _argumenttypes: InputFieldType[] = [];

    /**
     * The function's actual proc code.
     *
     * @type {string}
     */
    proccode: string = '';

    /**
     * The actual argument ids.
     *
     * @type {string}
     */
    argumentids: string = '';

    /**
     * The actual argument names.
     *
     * @type {string}
     */
    argumentnames: string = '';

    /**
     * The actual default arguments.
     *
     * @type {string}
     */
    argumentdefaults: string = '';

    /**
     * Whether the function should run without screen refresh.
     *
     * @type {boolean}
     */
    warp: string = 'true';

    /**
     * Creates an instance of Procedure.
     *
     * @constructor
     * @param {Mutation[]} children
     * @param {string} warp
     */
    constructor(children: Mutation[], warp: string) {
        super(children);

        this.warp = warp;
    }

    /**
     * Adds an argument to the mutation.
     *
     * @param {(string|Block)} argument
     * @returns {this}
     */
    withArgument(argument: (string|Block)) {
        if (argument instanceof Block) {
            this._proccode.push(argument.opcode == 'argument_reporter_string_number' ? '%s' : '%b');
            this._argumentids.push(generateUid());
            this._argumentnames.push(argument.fields['VALUE'][0] == null ? argument._uid : argument.fields['VALUE'][0]);
            this._argumentdefaults.push(argument.opcode == 'argument_reporter_string_number' ? '' : 'false');
            this._argumenttypes.push(argument.opcode == 'argument_reporter_string_number' ? InputFieldType.STRING : InputFieldType.BLOCK);
        }
        else {
            this._proccode.push(argument);
        }

        this.build();

        return this;
    }

    /** Builds the mutation. */
    build() {
        this.proccode = this._proccode.join(' ');
        this.argumentids = '["' + this._argumentids.join('","') + '"]';
        this.argumentnames = '["' + this._argumentnames.join('","') + '"]';
        this.argumentdefaults = '["' + this._argumentdefaults.join('","') + '"]';
    }
}
