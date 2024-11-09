import fs from 'fs';
import { md5 } from 'js-md5';
import { Sound } from '../src/sound';

test('Constructor assigning values correctly', () => {
    const sound = new Sound('TestSound.wav');
    expect(sound._path).toBe('TestSound.wav');
    expect(sound._data).toStrictEqual(fs.readFileSync('TestSound.wav'));
    expect(sound.name).toBe('TestSound');
    expect(sound.dataFormat).toBe('wav');
    expect(sound.assetId).toBe(md5(sound._data));
    expect(sound.md5ext).toBe(md5(sound._data) + '.wav');
    expect(sound.rate).toBe(44100);
    expect(sound.sampleCount).toBe(28672);
});
