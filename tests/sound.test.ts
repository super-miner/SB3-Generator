import fs from 'fs';
import { md5 } from 'js-md5';
import { Sound } from '../src/sound';

let sound: Sound;

beforeEach(() => {
    sound = new Sound('tests/res/TestSound.wav');
});

test('Constructor assigning values correctly', () => {
    expect(sound._path).toBe('tests/res/TestSound.wav');
    expect(sound._data).toStrictEqual(fs.readFileSync('tests/res/TestSound.wav'));
    expect(sound.name).toBe('TestSound');
    expect(sound.dataFormat).toBe('wav');
    expect(sound.assetId).toBe(md5(sound._data));
    expect(sound.md5ext).toBe(md5(sound._data) + '.wav');
    expect(sound.rate).toBe(0);
    expect(sound.sampleCount).toBe(0);
});
