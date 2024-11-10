/**
 * @module project
 */

import fs from 'fs';
import JSZip from 'jszip';
import {Sprite} from './sprite';
import {Metadata} from './metadata';
import {ToBeImplemented} from './toBeImplemented';
import {createAllBlocksProject} from './generateAllBlocks';

/**
 * Represents a .sb3 project.
 *
 * @export
 * @class Project
 * @typedef {Project}
 */
export class Project {
    /**
     * The directory to place the project file in.
     *
     * @type {string}
     */
    _outputDirectory: string = 'output';

    /**
     * The project's name.
     *
     * @type {string}
     */
    name: string;

    /**
     * The sprites contained within the project.
     *
     * @type {Sprite[]}
     */
    targets: Sprite[] = [];

    /**
     * Purpose unknown.
     *
     * @type {ToBeImplemented[]}
     */
    monitors: ToBeImplemented[] = [];

    /**
     * The projects extensions.
     *
     * @type {ToBeImplemented[]}
     */
    extensions: ToBeImplemented[] = [];

    /**
     * The project's metadata.
     *
     * @type {Metadata}
     */
    meta: Metadata = new Metadata('3.0.0', '4.5.471', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0'); // TODO: Make this read config.json

    /**
     * Creates an instance of Project.
     *
     * @constructor
     * @param {string} name
     * @param {string} [outputDirectory='output']
     */
    constructor(name: string, outputDirectory: string = 'output') {
        this.name = name;
        this._outputDirectory = outputDirectory;
    }

    /**
     * Adds a sprite to the project.
     *
     * @param {Sprite} sprite
     * @returns {this}
     */
    withSprite(sprite: Sprite) {
        this.targets.push(sprite);
        return this;
    }

    /**
     * Builds the project into a zip file.
     *
     * @param {boolean} [debug=false]
     */
    build(debug: boolean = false) {
        if (!fs.existsSync(this.getOutputDirectoryPath())) {
            fs.mkdirSync(this.getOutputDirectoryPath());
        }

        let zip: JSZip = new JSZip();

        this.targets.forEach(sprite => {
            sprite.build(zip);
        });

        let jsonString: string = JSON.stringify(this, (key, value) => {
            if (key == 'mutation' && value == null) { // Scratch will ALWAYS check if a block has a mutation and throw an error if mutation = null.
                return undefined;
            }

            return key[0] == '_' ? undefined : value;
        });

        zip.file('project.json', jsonString);

        zip.generateNodeStream({type:'nodebuffer', streamFiles:true})
            .pipe(fs.createWriteStream(this.getOutputFilePath()))
            .on('finish', () => {
                console.log('Generated project at "' + this.getOutputFilePath() + '".');
            });

        if (debug) {
            if (!fs.existsSync(this.getDebugDirectoryPath())) {
                fs.mkdirSync(this.getDebugDirectoryPath());
            }

            // Dump the project json file.
            fs.writeFileSync(this.getDebugJsonFilePath(), jsonString);

            // Creates a project containing all of the blocks.
            if (this.name != 'All Blocks Project') createAllBlocksProject(this.getDebugAllBlocksDirectory()).build(true);
        }
    }

    /**
     * Produces the path to the output directory.
     *
     * @returns {string}
     */
    getOutputDirectoryPath(): string {
        return this._outputDirectory + '/';
    }

    /**
     * Produces the path to the output/debug directory.
     *
     * @returns {string}
     */
    getDebugDirectoryPath(): string {
        return this._outputDirectory + '/debug/';
    }

    /**
     * Produces the path the the output file.
     *
     * @returns {string}
     */
    getOutputFilePath(): string {
        return this.getOutputDirectoryPath() + this.name + '.sb3';
    }

    /**
     * Produces the path to the debug project.json file.
     *
     * @returns {string}
     */
    getDebugJsonFilePath(): string {
        return this.getDebugDirectoryPath() + this.name + '.json';
    }

    /**
     * Produces the path the the all blocks project file.
     *
     * @returns {string}
     */
    getDebugAllBlocksDirectory(): string {
        return this._outputDirectory + '/debug';
    }
}