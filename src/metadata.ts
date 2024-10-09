/**
 * @module metadata
 */

/**
 * Represents a .sb3 project's metadata.
 *
 * @export
 * @class Metadata
 * @typedef {Metadata}
 */
export class Metadata {
    /**
     * The scratch version the project is made for.
     *
     * @type {string}
     */
    semver: string;

    /**
     * The vm version the project is made to run on.
     *
     * @type {string}
     */
    vm: string;

    /**
     * The browser the project was created by.
     *
     * @type {string}
     */
    agent: string;

    /**
     * Creates an instance of Metadata.
     *
     * @constructor
     * @param {string} semver
     * @param {string} vm
     * @param {string} agent
     */
    constructor(semver: string, vm: string, agent: string) {
        this.semver = semver;
        this.vm = vm;
        this.agent = agent;
    }
}