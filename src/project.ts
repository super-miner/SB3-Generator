import fs from 'fs';
import JSZip from 'jszip';
import {Sprite} from './sprite';
import {Metadata} from './metadata';
import {ToBeImplemented} from './tobeimplemented';

export class Project {
    name: string;
    targets: Sprite[] = [];
    monitors: ToBeImplemented[] = [];
    extensions: ToBeImplemented[] = [];
    meta: Metadata = new Metadata('3.0.0', '4.5.471', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0'); // TODO: Make this read config.json

    constructor(name: string) {
        this.name = name;
    }

    withSprite(sprite: Sprite) {
        this.targets.push(sprite);
        return this;
    }

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

    getOutputDirectoryPath(): string {
        return 'output/';
    }

    getFilePath(): string {
        return this.getOutputDirectoryPath() + this.name + '.sb3';
    }
}