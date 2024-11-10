/**
 * @module Mutation
 * */

import { Block } from "./block";
import { InputFieldType } from "./inputFieldType";

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
    _argumentIds: string[] = [];

    /**
     * Stores information about the argument names.
     *
     * @type {string[]}
     */
    _argumentNames: string[] = [];

    /**
     * Stores information about the default arguments.
     *
     * @type {string[]}
     */
    _argumentDefaults: string[] = [];

    /**
     * Stores information about the types of the arguments.
     *
     * @type {InputFieldType[]}
     */
    _argumentTypes: InputFieldType[] = [];

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
    argumentIds: string = '';

    /**
     * The actual argument names.
     *
     * @type {string}
     */
    argumentNames: string = '';

    /**
     * The actual default arguments.
     *
     * @type {string}
     */
    argumentDefaults: string = '';

    /**
     * Whether the function should run without screen refresh.
     *
     * @type {boolean}
     */
    warp: boolean = true;

    /**
     * Creates an instance of Procedure.
     *
     * @constructor
     * @param {Mutation[]} children
     * @param {boolean} warp
     */
    constructor(children: Mutation[], warp: boolean) {
        super(children);

        this.warp = warp;
    }

    /**
     * Adds an argument to the mutation.
     *
     * @param {(string|Block)} argument
     */
    withArgument(argument: (string|Block)) {
        if (argument instanceof Block) {
            this._proccode.push(argument.opcode == 'argument_reporter_string_number' ? '%s' : '%b');
            this._argumentIds.push(argument._uid);
            this._argumentNames.push(argument._uid);
            this._argumentDefaults.push(argument.opcode == 'argument_reporter_string_number' ? '' : 'false');
            this._argumentTypes.push(argument.opcode == 'argument_reporter_string_number' ? InputFieldType.STRING : InputFieldType.BLOCK);
        }
        else {
            this._proccode.push(argument);
        }

        this.build();
    }

    /** Builds the mutation. */
    build() {
        this.proccode = this._proccode.join(' ');
        this.argumentIds = '["' + this._argumentIds.join('","') + '"]';
        this.argumentNames = '["' + this._argumentNames.join('","') + '"]';
        this.argumentDefaults = '["' + this._argumentDefaults.join('","') + '"]';
    }
}
