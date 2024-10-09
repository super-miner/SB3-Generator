/**
 * @module project
 */

import fs from 'fs';
import JSZip from 'jszip';
import {Sprite} from './sprite';
import {Metadata} from './metadata';
import {ToBeImplemented} from './tobeimplemented';

/**
 * Represents a .sb3 project.
 *
 * @export
 * @class Project
 * @typedef {Project}
 */
export class Project {
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
     */
    constructor(name: string) {
        this.name = name;
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

    /** Builds the project into a zip file. */
    build() {
        if (!fs.existsSync(this.getOutputDirectoryPath())) {
            fs.mkdirSync(this.getOutputDirectoryPath());
        }

        let zip: JSZip = new JSZip();

        this.targets.forEach(sprite => {
            sprite.build(zip);
        });

        let jsonString: string = JSON.stringify(this, (key, value) => {
            return key[0] == '_' ? undefined : value;
        });

        zip.file('project.json', jsonString);

        zip.generateNodeStream({type:'nodebuffer', streamFiles:true})
            .pipe(fs.createWriteStream(this.getFilePath()))
            .on('finish', () => {
                console.log('Generated project at "' + this.getFilePath() + '".');
            });
    }

    /**
     * Produces the path to the output directory.
     *
     * @returns {string}
     */
    getOutputDirectoryPath(): string {
        return 'output/';
    }

    /**
     * Produces the path the the output file.
     *
     * @returns {string}
     */
    getFilePath(): string {
        return this.getOutputDirectoryPath() + this.name + '.sb3';
    }
}