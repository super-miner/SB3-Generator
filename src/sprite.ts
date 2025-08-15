/**
 * @module sprite
 */

import JSZip from 'jszip';
import {Variable} from './variable';
import {List} from './list';
import {Broadcast} from './broadcast';
import {Block} from './block';
import {Comment} from './comment';
import {Costume} from './costume';
import {Sound} from './sound';
import { Project } from './project';

/**
 * Represents a sprite.
 *
 * @export
 * @class Sprite
 * @typedef {Sprite}
 */
export class Sprite {
    /**
     * True if this sprite is the stage.
     *
     * @type {boolean}
     */
    isStage: boolean = false;

    /**
     * The sprite's name.
     *
     * @type {string}
     */
    name: string;

    /**
     * The sprite's variables as stored outside of the generated project.
     *
     * @type {Array<Variable>}
     */
    _variables: Variable[] = [];

    /**
     * The sprite's variables as stored inside of the generated project.
     *
     * @type {Object.<string, Array<number|string|boolean>>}
     */
    variables: {[id: string]: (number|string|boolean)[]} = {};

    /**
     * The sprite's lists as stored outside of the generated project.
     *
     * @type {Array<List>}
     */
    _lists: List[] = [];

    /**
     * The sprite's lists as stored inside of the generated project.
     *
     * @type {Object.<string, Array<string|Array<string>>>}
     */
    lists: {[id: string]: (string|string[])[]} = {};

    /**
     * The sprite's broadcasts as stored outside of the generated project.
     *
     * @type {Array<Broadcast>}
     */
    _broadcasts: Broadcast[] = [];

    /**
     * The sprite's broadcasts as stored inside of the generated project.
     *
     * @type {Object.<string, string>}
     */
    broadcasts: {[id: string]: string} = {};

    /**
     * The sprite's blocks as stored outside of the generated project.
     *
     * @type {Array<Block>}
     */
    _blocks: Block[] = [];

    /**
     * The sprite's blocks as stored inside of the generated project.
     *
     * @type {Object.<string, Block>}
     */
    blocks: {[id: string]: Block} = {};

    /**
     * The sprite's comments.
     *
     * @type {Object.<string, Comment>}
     */
    comments: {[id: string]: Comment} = {}; // TODO: Implement comments
    
    /**
     * The selected costume.
     *
     * @type {number}
     */
    currentCostume: number = 0;
    
    /**
     * The sprite's costumes.
     *
     * @type {Array<Costume>}
     */
    costumes: Costume[] = [];
    
    /**
     * The sprite's sounds.
     *
     * @type {Array<Sound>}
     */
    sounds: Sound[] = [];
    
    /**
     * The volume of the sprite's sounds.
     *
     * @type {number}
     */
    volume: number = 100;
    
    /**
     * The sprite's sorting order.
     *
     * @type {number}
     */
    layerOrder: number = 1;
    
    /**
     * The tempo of the sprite's sounds.
     *
     * @type {number}
     */
    tempo: number = 60;
    
    /**
     * The video transparency.
     *
     * @type {number}
     */
    videoTransparency: number = 50;
    
    /**
     * The video state, if 'on' then the video is on.
     *
     * @type {string}
     */
    videoState: string = 'on';
    
    /**
     * The sprite's TTS language.
     *
     * @type {(string|null)}
     */
    textToSpeechLanguage: string|null = 'en';

    /**
     * The x position of the sprite (only needed if not stage).
     *
     * @type {number}
     */
    x: number = 0;

    /**
     * The y position of the sprite (only needed if not stage).
     *
     * @type {number}
     */
    y: number = 0;

    /**
     * The size of the sprite in percent (only needed if not stage).
     *
     * @type {number}
     */
    size: number = 100;

    /**
     * The direction of the sprite in degrees (only needed if not stage).
     *
     * @type {number}
     */
    direction: number = 90;

    /**
     * Whether or not the sprite can be dragged (only needed if not stage).
     *
     * @type {boolean}
     */
    draggable: boolean = false;

    /**
     * The sprite's rotation style (only needed if not stage).
     *
     * @type {string}
     */
    rotationStyle: string = 'all around';

    /**
     * Whether the sprite is visible.
     *
     * @type {boolean}
     */
    visible: boolean = true;

    /**
     * Creates an instance of Sprite.
     *
     * @constructor
     * @param {string} name
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * Builds the sprite.
     *
     * @param {JSZip} zip
     * @param {Project} project
     */
    build(zip: JSZip, project: Project) {
        this._variables.forEach(variable => {
            this.variables[variable.uid] = [variable.name, variable.value];
        });

        this._lists.forEach(list => {
            this.lists[list.uid] = [list.name, list.values.map(value => value.toString())];
        });

        this._broadcasts.forEach(broadcast => {
            this.broadcasts[broadcast.uid] = broadcast.name;
        });

        this._blocks.forEach(block => {
            this.blocks[block._uid] = block;

            if (block._fieldData.extension != null) {
                project.withExtension(block._fieldData.extension);
            }
        });

        this.costumes.forEach(costume => {
            zip.file(costume.md5ext, costume._data);
        });

        this.sounds.forEach(sound => {
            zip.file(sound.md5ext, sound._data);
        });
    }

    /**
     * Transforms the sprite into a stage.
     *
     * @returns {this}
     */
    asStage() {
        this.setStage(true);

        return this;
    }

    /**
     * Sets whether this sprite is a stage.
     * 
     * @param {boolean} stage 
     * @returns {this}
     */
    setStage(stage: boolean) {
        this.isStage = stage;

        if (stage) {
            this.layerOrder = 0;
        }

        return this;
    }

    /**
     * Adds a scratch variable to the sprite.
     *
     * @param {Variable} variable
     * @returns {this}
     */
    withVariable(variable: Variable) {
        this._variables.push(variable);
        return this;
    }

    /**
     * Adds a scratch list to the sprite.
     *
     * @param {List} list
     * @returns {this}
     */
    withList(list: List) {
        this._lists.push(list);
        return this;
    }

    /**
     * Adds a broadcast to the sprite.
     *
     * @param {Broadcast} broadcast
     * @returns {this}
     */
    withBroadcast(broadcast: Broadcast) {
        this._broadcasts.push(broadcast);
        return this;
    }

    /**
     * Adds a top level block to the sprite.
     *
     * @param {Block} block
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @returns {this}
     */
    withBlock(block: Block, x: number = 0, y: number = 0) {
        this._blocks.push(block);
        block.sprite = this;
        block.x = x;
        block.y = y;
        return this;
    }

    /**
     * Adds a comment to the sprite.
     * 
     * @param {Comment} comment
     * @returns {this}
     */
    withComment(comment: Comment) {
        this.comments[comment._uid] = comment;
        return this;
    }

    /**
     * Sets the current costume.
     *
     * @param {number} defaultCostumeNumber
     * @returns {this}
     */
    withDefaultCostume(defaultCostumeNumber: number) {
        this.currentCostume = defaultCostumeNumber;
        return this;
    }

    /**
     * Adds a costume to the sprite.
     *
     * @param {Costume} costume
     * @returns {this}
     */
    withCostume(costume: Costume) {
        this.costumes.push(costume);
        return this;
    }

    /**
     * Adds a sound to the sprite.
     *
     * @param {Sound} sound
     * @returns {this}
     */
    withSound(sound: Sound) {
        this.sounds.push(sound);
        return this;
    }

    /**
     * Sets the sprite's volume.
     *
     * @param {number} volume
     * @returns {this}
     */
    withVolume(volume: number) {
        this.volume = volume;
        return this;
    }
    
    /**
     * Sets the sprite's sorting order.
     *
     * @param {number} layerOrder
     * @returns {this}
     */
    withLayerOrder(layerOrder: number) {
        if (this.isStage) {
            return;
        }

        this.layerOrder = Math.max(layerOrder, 1);
        return this;
    }

    /**
     * Sets the sprite's tempo.
     *
     * @param {number} tempo
     * @returns {this}
     */
    withTempo(tempo: number) {
        this.tempo = tempo;
        return this;
    }

    /**
     * Sets the sprite's video transparency.
     *
     * @param {number} videoTransparency
     * @returns {this}
     */
    withVideoTransparency(videoTransparency: number) {
        this.videoTransparency = videoTransparency;
        return this;
    }

    /**
     * Sets the sprite's video state.
     *
     * @param {string} videoState
     * @returns {this}
     */
    withVideoState(videoState: string) {
        this.videoState = videoState;
        return this;
    }

    /**
     * Sets the sprite's TTS language.
     *
     * @param {string} textToSpeechLanguage
     * @returns {this}
     */
    withTextToSpeechLanguage(textToSpeechLanguage: string) {
        this.textToSpeechLanguage = textToSpeechLanguage;
        return this;
    }

    /**
     * Sets the x position of this sprite.
     * 
     * @param {number} x
     * @returns {this}
     */
    withX(x: number) {
        this.x = x;

        return this;
    }

    /**
     * Sets the y position of this sprite.
     * 
     * @param {number} y
     * @returns {this}
     */
    withY(y: number) {
        this.y = y;

        return this;
    }

    /**
     * Sets the position of this sprite.
     *
     * @param {number} x
     * @param {number} y
     * @returns {this}
     */
    withPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
        
        return this;
    }

    /**
     * Sets the sprite's size in percent.
     *
     * @param {number} size
     * @returns {this}
     */
    withSize(size: number) {
        this.size = size;
        return this;
    }

    /**
     * Sets the sprite's angle in degrees.
     *
     * @param {number} angle
     * @returns {this}
     */
    withAngle(angle: number) {
        this.direction = angle;
        return this;
    }

    /** 
     * Sets the sprite to be draggable. 
     * 
     * @returns {this}
    */
    asDraggable() {
        this.setDraggable(true);

        return this;
    }

    /**
     * Sets whether the sprite is draggable. 
     * 
     * @param {boolean} draggable 
     * @returns {this}
     */
    setDraggable(draggable: boolean) {
        this.draggable = draggable;

        return this;
    }

    /**
     * Sets the sprite's rotation style.
     *
     * @param {string} rotationStyle
     * @returns {this}
     */
    withRotationStyle(rotationStyle: string) {
        this.rotationStyle = rotationStyle;
        return this;
    }

    /** 
     * Sets the sprite to be invisible. 
     * 
     * @returns {this}
    */
    asInvisibleSprite() {
        this.setVisible(false);

        return this;
    }

    /**
     * Sets whether the sprite is visible.
     * 
     * @param {boolean} invisible 
     * @returns {this}
     */
    setVisible(visible: boolean) {
        this.visible = visible;

        return this;
    }
}