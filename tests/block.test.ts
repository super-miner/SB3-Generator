import { Block } from "../src/block";
import { InputType } from "../src/inputType";
import { HasChildren, Procedure } from "../src/mutation";
import { opcodeTable } from "../src/opcodeTable";
import { createBlock, createBroadcast, createList, createSprite, createVariable, generateUid } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Creating block with inputs correctly', () => {
    const block = new Block('motion_movesteps', ['31'], []);
    expect(block._uid).toBe(generateUid());
    expect(block._nextBlock).toBe(null);
    expect(block._previousBlock).toBe(null);
    expect(block._references).toStrictEqual([]);
    expect(block.opcode).toBe('motion_movesteps');
    expect(block.next).toBe(null);
    expect(block.parent).toBe(null);
    expect(block.inputs).toStrictEqual({
        'STEPS': [
            InputType.INCLUDES_LITERAL,
            [
                InputType.CUSTOM_LITERAL,
                '31'
            ]
        ]
    });
    expect(block.fields).toStrictEqual({});
    expect(block.shadow).toBe(false);
    expect(block.topLevel).toBe(true);
});

test('Creating block with variable input correctly', () => {
    const variable = createVariable('test variable').withValue(124);
    const block = new Block('motion_movesteps', [variable], []);
    expect(block.inputs).toStrictEqual({
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
    expect(block.fields).toStrictEqual({});
});

test('Creating block with block input correctly', () => {
    const block2 = new Block('motion_yposition', [], []);
    const block1 = new Block('motion_movesteps', [block2], []);
    expect(block1.inputs).toStrictEqual({
        'STEPS': [
            InputType.INCLUDES_LITERAL,
            block2._uid,
            [
                InputType.CUSTOM_LITERAL,
                ''
            ]
        ]
    });
    expect(block1.fields).toStrictEqual({});
    expect(block2._parentBlock).toStrictEqual(block1);
});

test('Creating block with field correctly', () => {
    const block = new Block('motion_setrotationstyle', [], ['left-right']);

    expect(block.inputs).toStrictEqual({});
    expect(block.fields).toStrictEqual({
        'STYLE': [
            'left-right',
            null
        ]
    });
});

test('Creating block with broadcast in field correctly', () => {
    const broadcast = createBroadcast('Test Broadcast');
    const block = new Block('event_whenbroadcastreceived', [], [broadcast]);

    expect(block.inputs).toStrictEqual({});
    expect(block.fields).toStrictEqual({
        'BROADCAST_OPTION': [
            'Test Broadcast',
            broadcast.uid
        ]
    });
});

test('Creating block with variable in field correctly', () => {
    const variable = createVariable('Test Variable');
    const block = new Block('data_showvariable', [], [variable]);

    expect(block.inputs).toStrictEqual({});
    expect(block.fields).toStrictEqual({
        'VARIABLE': [
            'Test Variable',
            variable.uid
        ]
    });
});

test('Creating block with list in field correctly', () => {
    const list = createList('Test List');
    const block = new Block('data_showlist', [], [list]);

    expect(block.inputs).toStrictEqual({});
    expect(block.fields).toStrictEqual({
        'LIST': [
            'Test List',
            list.uid
        ]
    });
});

test('Setting field data correctly', () => {
    const block1 = new Block('control_stop', [], ['other scripts in sprite']);
    const block2 = new Block('motion_movesteps', ['10'], []);
    block1.withNextBlock(block2);

    expect((block1.mutation as HasChildren)?.hasnext).toBe(true);

    block1.fieldData = opcodeTable['motion_movesteps'];
    expect(block1.mutation).toBe(null);
});

test('Correctly getting top of substack with one block', () => {
    const block = new Block('motion_movesteps', ['10'], []);
    
    expect(block.substackTop()).toStrictEqual(block);
});

test('Correctly getting top of substack with multiple blocks', () => {
    const block1 = new Block('motion_movesteps', ['10'], []);
    const block2 = new Block('motion_setrotationstyle', [], ['left-right']);
    block1.withNextBlock(block2);
    
    expect(block2.substackTop()).toStrictEqual(block1);
});

test('Creating block with dropdown correctly', () => {
    const block = new Block('motion_goto', ['_mouse_'], []);
    
    expect(block._references.length).toEqual(1);
    expect(block._references[0].fields['TO']).toStrictEqual(['_mouse_', null]);
    expect(block._references[0].shadow).toEqual(true);
    expect(block._references[0]._parentBlock).toStrictEqual(block);
});

test('Creating block with string input field correctly', () => {
    const block = new Block('looks_sayforsecs', ['Hello World!', '1'], []);
    
    expect(block.inputs).toStrictEqual({
        'MESSAGE': [
            1,
            [
                10,
                'Hello World!'
            ]
        ],
        'SECS': [
            1,
            [
                4,
                '1'
            ]
        ]
    });
});

test('Creating block with number input field correctly', () => {
    const block = new Block('motion_movesteps', [100], []);
    
    expect(block.inputs).toStrictEqual({
        'STEPS': [
            1,
            [
                4,
                '100'
            ]
        ]
    });
});

test('Creating block with true boolean input field correctly', () => {
    const block = new Block('looks_say', [true], []);
    
    expect(block.inputs).toStrictEqual({
        'MESSAGE': [
            1,
            [
                10,
                'true'
            ]
        ]
    });
});

test('Creating block with false boolean input field correctly', () => {
    const block = new Block('looks_say', [false], []);
    
    expect(block.inputs).toStrictEqual({
        'MESSAGE': [
            1,
            [
                10,
                'false'
            ]
        ]
    });
});

test('Creating block with string input field containing broadcast correctly', () => {
    const broadcast = createBroadcast('test broadcast');
    const block = new Block('event_broadcast', [broadcast], []);
    
    expect(block.inputs).toStrictEqual({
        'BROADCAST_INPUT': [
            1,
            [
                11,
                'test broadcast',
                broadcast.uid
            ]
        ]
    });
});

test('Creating block with string input field containing variable correctly', () => {
    const variable = createVariable('test variable').withValue(124);
    const block = new Block('looks_sayforsecs', [variable, '1'], []);
    
    expect(block.inputs).toStrictEqual({
        'MESSAGE': [
            3,
            [
                12,
                'test variable',
                variable.uid
            ],
            [
                10,
                ''
            ]
        ],
        'SECS': [
            1,
            [
                4,
                '1'
            ]
        ]
    });
});

test('Creating block with string input field containing block correctly', () => {
    const containedBlock = new Block('motion_xposition', [], []);
    const block = new Block('looks_sayforsecs', [containedBlock, '1'], []);
    
    expect(block.inputs).toStrictEqual({
        'MESSAGE': [
            1,
            containedBlock._uid,
            [
                10,
                ''
            ]
        ],
        'SECS': [
            1,
            [
                4,
                '1'
            ]
        ]
    });
});

test('Creating custom block argument correctly', () => {
    const stringArgument = new Block('argument_reporter_string_number', [], ['String or Number']);

    expect(stringArgument.fields).toStrictEqual({
        "VALUE": [
            "String or Number",
            null
        ]
    });
});

test('Creating custom block prototype with string input correctly', () => {
    const stringArgument = new Block('argument_reporter_string_number', [], ['String or Number']);

    const blockPrototype = new Block('procedures_prototype', [
        'false',
        'Test Function',
        stringArgument,
        'Label'
    ], []);

    expect(blockPrototype.inputs).toStrictEqual({
        "!!!!!!!!!!!!!!!!!!!!": [
            1,
            stringArgument._uid
        ]
    });
    expect(blockPrototype.shadow).toBe(true);
    expect((blockPrototype.mutation as Procedure).proccode).toBe('Test Function %s Label');
    expect((blockPrototype.mutation as Procedure).argumentids).toBe('["!!!!!!!!!!!!!!!!!!!!"]');
    expect((blockPrototype.mutation as Procedure).argumentnames).toBe('["String or Number"]');
    expect((blockPrototype.mutation as Procedure).argumentdefaults).toBe('[""]');
    expect((blockPrototype.mutation as Procedure).warp).toBe('false');
    expect(stringArgument.parent).toBe(blockPrototype._uid);
});

test('Creating custom block prototype with boolean input correctly', () => {
    const booleanArgument = new Block('argument_reporter_boolean', [], ['Boolean']);

    const blockPrototype = new Block('procedures_prototype', [
        'false',
        'Test Function',
        booleanArgument,
        'Label'
    ], []);

    expect(blockPrototype.inputs).toStrictEqual({
        "!!!!!!!!!!!!!!!!!!!!": [
            1,
            booleanArgument._uid
        ]
    });
    expect(blockPrototype.shadow).toBe(true);
    expect((blockPrototype.mutation as Procedure).proccode).toBe('Test Function %b Label');
    expect((blockPrototype.mutation as Procedure).argumentids).toBe('["!!!!!!!!!!!!!!!!!!!!"]');
    expect((blockPrototype.mutation as Procedure).argumentnames).toBe('["Boolean"]');
    expect((blockPrototype.mutation as Procedure).argumentdefaults).toBe('["false"]');
});

test('Creating custom block properly', () => {
    const stringArgument = new Block('argument_reporter_string_number', [], ['String or Number']);

    const blockPrototype = new Block('procedures_prototype', [
        'false',
        'Test Function',
        stringArgument,
        'Label'
    ], []);

    const blockDefinition = new Block('procedures_definition', [blockPrototype], []);

    expect(blockDefinition.inputs).toStrictEqual({
        "custom_block": [
            1,
            blockPrototype._uid
        ]
    });
    expect(blockDefinition.next).toBe(null);
    expect(blockDefinition.parent).toBe(null);
    expect(blockDefinition.shadow).toBe(false);
    expect(blockPrototype.parent).toBe(blockDefinition._uid);
});

test('Calling custom block with literal properly', () => {
    const stringArgument = new Block('argument_reporter_string_number', [], ['String or Number']);

    const blockPrototype = new Block('procedures_prototype', [
        'false',
        'Test Function',
        stringArgument,
        'Label'
    ], []);

    const blockCall = new Block('procedures_call', [blockPrototype, 'Hello World!'], []);

    expect(blockCall.inputs).toStrictEqual({
        '!!!!!!!!!!!!!!!!!!!!': [
            1,
            [
                10,
                'Hello World!'
            ]
        ]
    });
});

test('Calling custom block with variable properly', () => {
    const variable = createVariable('Test Variable');

    const stringArgument = new Block('argument_reporter_string_number', [], ['String or Number']);

    const blockPrototype = new Block('procedures_prototype', [
        'false',
        'Test Function',
        stringArgument,
        'Label'
    ], []);

    const blockCall = new Block('procedures_call', [blockPrototype, variable], []);

    expect(blockCall.inputs).toStrictEqual({
        '!!!!!!!!!!!!!!!!!!!!': [
            3,
            [
                12,
                "Test Variable",
                variable.uid
            ],
            [
                10,
                ""
            ]
        ]
    });
});

test('Calling custom block with block properly', () => {
    const block = createBlock('sensing_timer');

    const stringArgument = new Block('argument_reporter_string_number', [], ['String or Number']);

    const blockPrototype = new Block('procedures_prototype', [
        'false',
        'Test Function',
        stringArgument,
        'Label'
    ], []);

    const blockCall = new Block('procedures_call', [blockPrototype, block], []);

    expect(blockCall.inputs).toStrictEqual({
        '!!!!!!!!!!!!!!!!!!!!': [
            1,
            block._uid,
            [
                10,
                ""
            ]
        ]
    });
    expect(block.parent).toBe(blockCall._uid);
});

test('Succesfully adding children', () => {
    const sprite = createSprite('Test Sprite');
    const block1 = createBlock('event_whenflagclicked', []);
    const block2 = createBlock('motion_movesteps', ['15']);
    const block3 = createBlock('motion_movesteps', [createVariable('Amount').withValue(20)]);
    sprite.withBlock(block1);
    block1.withNextBlock(block2);
    block2.withNextBlock(block3);
    expect(block1._nextBlock).toStrictEqual(block2);
    expect(block1._previousBlock).toBe(null);
    expect(block1._references).toStrictEqual([]);
    expect(block2.parent).toBe(block1._uid);
    expect(block2.topLevel).toBe(false);
    expect(block2._sprite).toStrictEqual(sprite);
    expect(block2._nextBlock).toStrictEqual(block3);
    expect(block2._previousBlock).toStrictEqual(block1);
    expect(block2._references).toStrictEqual([]);
    expect(block3.parent).toBe(block1._uid);
    expect(block3.topLevel).toBe(false);
    expect(block3._sprite).toStrictEqual(sprite);
    expect(block3._nextBlock).toBe(null);
    expect(block3._previousBlock).toStrictEqual(block2);
    expect(block3._references).toStrictEqual([]);
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

test('Setting nextBlock correctly', () => {
    const block1 = createBlock('motion_movesteps', ['10']);
    const block2 = createBlock('motion_movesteps', ['20']);
    block1.withNextBlock(block2);
    expect(block1._nextBlock).toStrictEqual(block2);
    expect(block1.next).toBe(block2._uid);
});

test('Setting parentBlock correctly', () => {
    const block1 = createBlock('motion_movesteps', ['10']);
    const block2 = createBlock('motion_movesteps', ['20']);
    block1.withParentBlock(block2);
    expect(block1._parentBlock).toStrictEqual(block2);
    expect(block1.parent).toBe(block2._uid);
    expect(block1.topLevel).toBe(false);
});
