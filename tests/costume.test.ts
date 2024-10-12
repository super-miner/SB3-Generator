import fs from 'fs';
import { Costume } from "../src/costume";
import { md5 } from 'js-md5';

test('Constructor assigning values correctly', () => {
    const costume = new Costume('TestCostume.png');
    expect(costume._path).toBe('TestCostume.png');
    expect(costume._data).toStrictEqual(fs.readFileSync('TestCostume.png'));
    expect(costume.name).toBe('TestCostume');
    expect(costume.dataFormat).toBe('png');
    expect(costume.assetId).toBe(md5(costume._data));
    expect(costume.md5ext).toBe(md5(costume._data) + '.png');
    expect(costume.rotationCenterX).toBe(0.0);
    expect(costume.rotationCenterY).toBe(0.0);
});
