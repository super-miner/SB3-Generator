import { Block } from "../src/block";
import { InputType } from "../src/inputtype";
import { createBlock, createSprite, createVariable, generateUid } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    const block1 = new Block('motion_movesteps', ['31']);
    expect(block1._uid).toBe(generateUid());
    expect(block1._nextBlock).toBe(null);
    expect(block1._previousBlock).toBe(null);
    expect(block1.opcode).toBe('motion_movesteps');
    expect(block1.next).toBe(null);
    expect(block1.parent).toBe(null);
    expect(block1.inputs).toStrictEqual({
        'STEPS': [
            InputType.INCLUDES_LITERAL,
            [
                InputType.CUSTOM_LITERAL,
                '31'
            ]
        ]
    });
    expect(block1.fields).toStrictEqual({});
    expect(block1.shadow).toBe(false);
    expect(block1.topLevel).toBe(true);

    const variable = createVariable('test variable').withValue(124);
    const block2 = new Block('motion_movesteps', [variable]);
    expect(block2.inputs).toStrictEqual({
        'STEPS': [
            InputType.INCLUDES_VARIABLE | InputType.INCLUDES_LITERAL,
            [
                InputType.CUSTOM_VARIABLE | InputType.CUSTOM_LITERAL,
                variable.name,
                variable.uid
            ],
            [
                InputType.CUSTOM_LITERAL,
                ''
            ]
        ]
    });
});

test('Succesfully adding child', () => {
    const sprite = createSprite('Test Sprite');
    const block1 = createBlock('event_whenflagclicked', []);
    const block2 = createBlock('motion_movesteps', ['15']);
    const block3 = createBlock('motion_movesteps', [createVariable('Amount').withValue(20)]);
    sprite.withBlock(block1);
    block1.withNextBlock(block2);
    block2.withNextBlock(block3);
    expect(block1._nextBlock).toStrictEqual(block2);
    expect(block1._previousBlock).toBe(null);
    expect(block2.parent).toBe(block1._uid);
    expect(block2.topLevel).toBe(false);
    expect(block2._sprite).toStrictEqual(sprite);
    expect(block2._nextBlock).toStrictEqual(block3);
    expect(block2._previousBlock).toStrictEqual(block1);
    expect(block3.parent).toBe(block1._uid);
    expect(block3.topLevel).toBe(false);
    expect(block3._sprite).toStrictEqual(sprite);
    expect(block3._nextBlock).toBe(null);
    expect(block3._previousBlock).toStrictEqual(block2);
});

test('Getting sprite correctly', () => {
    const sprite = createSprite('Test Sprite');
    const block = createBlock('event_whenflagclicked', []);
    sprite.withBlock(block);
    expect(block.sprite).toBe(sprite);
});

test('Setting sprite correctly', () => {
    const sprite = createSprite('Test Sprite');
    const block = createBlock('event_whenflagclicked', []);
    block.sprite = sprite;
    expect(block.sprite).toBe(sprite);
    expect(sprite._blocks).toStrictEqual([block]);
});
