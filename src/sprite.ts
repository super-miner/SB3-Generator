import JSZip from 'jszip';
import {Variable} from './variable';
import {List} from './list';
import {Broadcast} from './broadcast';
import {Block} from './block';
import {BlockComment} from './blockComment';
import {Costume} from './costume';
import {Sound} from './sound';
import {TextToSpeechLanguage} from './texttospeachlanguage';

export class Sprite {
    isStage: boolean = false;
    name: string;
    _variables: Variable[] = [];
    variables: {[id: string]: (number|string|boolean)[]} = {};
    _lists: List[] = [];
    lists: {[id: string]: (string|string[])[]} = {};
    _broadcasts: Broadcast[] = [];
    broadcasts: {[id: string]: string} = {};
    _blocks: Block[] = [];
    blocks: {[id: string]: Block} = {};
    comments: {[id: string]: BlockComment} = {}; // TODO: Implement comments
    currentCostume: number = 0;
    costumes: Costume[] = [];
    sounds: Sound[] = [];
    volume: number = 100;
    layerOrder: number = 0;
    tempo: number = 60;
    videoTransparency: number = 50;
    videoState: string = 'on';
    textToSpeechLanguage: TextToSpeechLanguage | null = null;

    constructor(name: string) {
        this.name = name;
    }

    build(zip: JSZip) {
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
        });

        this.costumes.forEach(costume => {
            zip.file(costume.assetId + '.' + costume.dataFormat, costume._data);
        });
    }

    asStage() {
        this.isStage = true;
        return this;
    }

    withVariable(variable: Variable) {
        this._variables.push(variable);
        return this;
    }

    withList(list: List) {
        this._lists.push(list);
        return this;
    }

    withBroadcast(broadcast: Broadcast) {
        this._broadcasts.push(broadcast);
        return this;
    }

    withBlock(block: Block) {
        this._blocks.push(block);
        return this;
    }

    /*withComment(comment: BlockComment) {
        this.comments[comment.uid] = comment;
        return this;
    }*/

    withDefaultCostume(defaultCostumeNumber: number) {
        this.currentCostume = defaultCostumeNumber;
        return this;
    }

    withCostume(costume: Costume) {
        this.costumes.push(costume);
        return this;
    }

    withSound(sound: Sound) {
        this.sounds.push(sound);
        return this;
    }

    withVolume(volume: number) {
        this.volume = volume;
        return this;
    }
    
    withLayerOrder(layerOrder: number) {
        this.layerOrder = layerOrder;
        return this;
    }

    withTempo(tempo: number) {
        this.tempo = tempo;
        return this;
    }

    withVideoTransparency(videoTransparency: number) {
        this.videoTransparency = videoTransparency;
        return this;
    }

    withVideoState(videoState: string) {
        this.videoState = videoState;
        return this;
    }

    withTextToSpeechLanguage(textToSpeechLanguage: TextToSpeechLanguage) {
        this.textToSpeechLanguage = textToSpeechLanguage;
        return this;
    }
}