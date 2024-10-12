import { Block } from "../src/block";
import { generateUid } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    const block = new Block('event_whenflagclicked');
    expect(block._uid).toBe(generateUid());
    expect(block._lastChildBlock).toBe(null);
    expect(block.opcode).toBe('event_whenflagclicked');
    expect(block.next).toBe(null);
    expect(block.parent).toBe(null);
    expect(block.inputs).toStrictEqual({});
    expect(block.fields).toStrictEqual({});
    expect(block.shadow).toBe(true);
    expect(block.topLevel).toBe(true);
});

test('Succesfully adding child', () => {
    const block1 = new Block('event_whenflagclicked');
    const block2 = new Block('event_whenflagclicked');
    block1.withChildBlock(block2);
    expect(block1._lastChildBlock).toStrictEqual(block2);
    expect(block2.parent).toBe(block1._uid);
    expect(block2.topLevel).toBe(false);
});
