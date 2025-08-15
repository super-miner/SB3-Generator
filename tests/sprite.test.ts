import { createBroadcast, createComment, createCostume, createList, createSprite, createVariable } from "../src/sb3Generator";
import { Sprite } from "../src/sprite";

let sprite: Sprite;

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);

    sprite = new Sprite('Test sprite');
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigns values correctly', () => {
    expect(sprite.name).toBe('Test sprite');
    expect(sprite.isStage).toBe(false);
    expect(sprite._variables).toStrictEqual([]);
    expect(sprite._lists).toStrictEqual([]);
    expect(sprite._broadcasts).toStrictEqual([]);
    expect(sprite._blocks).toStrictEqual([]);
    expect(sprite.comments).toStrictEqual({});
    expect(sprite.currentCostume).toBe(0);
    expect(sprite.costumes).toStrictEqual([]);
    expect(sprite.sounds).toStrictEqual([]);
    expect(sprite.volume).toBe(100);
    expect(sprite.layerOrder).toBe(1);
    expect(sprite.tempo).toBe(60);
    expect(sprite.videoTransparency).toBe(50);
    expect(sprite.videoState).toBe('on');
    //TODO: Test TTS language
    expect(sprite.x).toBe(0);
    expect(sprite.y).toBe(0);
    expect(sprite.size).toBe(100);
    expect(sprite.direction).toBe(90);
    expect(sprite.draggable).toBe(false);
    expect(sprite.rotationStyle).toBe('all around');
    expect(sprite.visible).toBe(true);
});

//TODO: Test build

test('Set stage state correctly', () => {
    const returned = sprite.asStage();

    expect(sprite.isStage).toBe(true);
    expect(sprite.layerOrder).toBe(0);
    expect(returned).toStrictEqual(sprite);
});

test('Set stage state multiple times correctly', () => {
    sprite.asStage();
    sprite.asStage();

    expect(sprite.isStage).toBe(true);
    expect(sprite.layerOrder).toBe(0);
});

test('Directly set stage state to false correctly', () => {
    const returned = sprite.setStage(false);

    expect(sprite.isStage).toBe(false);
    expect(sprite.layerOrder).toBe(1);
    expect(returned).toStrictEqual(sprite);
});

test('Directly set stage state to true correctly', () => {
    const returned = sprite.setStage(true);

    expect(sprite.isStage).toBe(true);
    expect(sprite.layerOrder).toBe(0);
    expect(returned).toStrictEqual(sprite);
});

test('Directly set stage state to true then false correctly', () => {
    sprite.setStage(true);
    sprite.setStage(false);

    expect(sprite.isStage).toBe(false);
    expect(sprite.layerOrder).toBe(0);
});

test('Adding one variable correctly', () => {
    const returned = sprite.withVariable(createVariable('Test variable 1'));
    expect(sprite._variables).toStrictEqual([createVariable('Test variable 1')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple variables correctly', () => {
    sprite.withVariable(createVariable('Test variable 1'));
    sprite.withVariable(createVariable('Test variable 2'));
    expect(sprite._variables).toStrictEqual([createVariable('Test variable 1'), createVariable('Test variable 2')]);
});

test('Adding one list correctly', () => {
    const returned = sprite.withList(createList('Test list 1'));
    expect(sprite._lists).toStrictEqual([createList('Test list 1')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple lists correctly', () => {
    sprite.withList(createList('Test list 1'));
    sprite.withList(createList('Test list 2'));
    expect(sprite._lists).toStrictEqual([createList('Test list 1'), createList('Test list 2')]);
});

test('Adding one broadcast correctly', () => {
    const returned = sprite.withBroadcast(createBroadcast('Test broadcast 1'));
    expect(sprite._broadcasts).toStrictEqual([createBroadcast('Test broadcast 1')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple broadcasts correctly', () => {
    sprite.withBroadcast(createBroadcast('Test broadcast 1'));
    sprite.withBroadcast(createBroadcast('Test broadcast 2'));
    expect(sprite._broadcasts).toStrictEqual([createBroadcast('Test broadcast 1'), createBroadcast('Test broadcast 2')]);
});

//TODO: Test blocks once they are implemented

test('Adding one comment correctly', () => {
    const comment = createComment('Test Comment', 125, 125);

    const returned = sprite.withComment(comment);

    expect(sprite.comments[comment._uid]).toStrictEqual(comment);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple comments correctly', () => {
    const comment1 = createComment('Test Comment 1', 100, 100);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    const comment2 = createComment('Test Comment 2', 200, 200);

    sprite.withComment(comment1);
    sprite.withComment(comment2);

    expect(sprite.comments[comment1._uid]).toStrictEqual(comment1);
    expect(sprite.comments[comment2._uid]).toStrictEqual(comment2);
});

test('Setting default costume correctly', () => {
    const returned = sprite.withDefaultCostume(10);
    expect(sprite.currentCostume).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Adding one costume correctly', () => {
    const returned = sprite.withCostume(createCostume('tests/res/TestCostume.png'));
    expect(sprite.costumes).toStrictEqual([createCostume('tests/res/TestCostume.png')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple costumes correctly', () => {
    sprite.withCostume(createCostume('tests/res/TestCostume.png'));
    sprite.withCostume(createCostume('tests/res/TestCostume.png'));
    expect(sprite.costumes).toStrictEqual([createCostume('tests/res/TestCostume.png'), createCostume('tests/res/TestCostume.png')]);
});

//TODO: Test sounds once they are implemented

test('Setting volume correctly', () => {
    const returned = sprite.withVolume(10);
    expect(sprite.volume).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting layer order correctly', () => {
    const returned = sprite.withLayerOrder(10);
    expect(sprite.layerOrder).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting tempo correctly', () => {
    const returned = sprite.withTempo(10);
    expect(sprite.tempo).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting video transparency correctly', () => {
    const returned = sprite.withVideoTransparency(10);
    expect(sprite.videoTransparency).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting video state correctly', () => {
    const returned = sprite.withVideoState('off');
    expect(sprite.videoState).toBe('off');
    expect(returned).toStrictEqual(sprite);
});

//TODO: Test TTS when implemented

test('Setting x position correctly', () => {
    sprite.withX(10101);

    expect(sprite.x).toBe(10101);
    expect(sprite.y).toBe(0);
});

test('Setting x position correctly multiple times', () => {
    sprite.withX(69);
    sprite.withX(10203);

    expect(sprite.x).toBe(10203);
    expect(sprite.y).toBe(0);
});

test('Setting y position correctly', () => {
    sprite.withY(10);

    expect(sprite.y).toBe(10);
    expect(sprite.x).toBe(0);
});

test('Setting y position correctly multiple times', () => {
    sprite.withY(690);
    sprite.withY(100);

    expect(sprite.y).toBe(100);
    expect(sprite.x).toBe(0);
});

test('Setting position correctly', () => {
    sprite.withPosition(10, 11);

    expect(sprite.x).toBe(10);
    expect(sprite.y).toBe(11);
});

test('Changing position correctly', () => {
    sprite.withPosition(10, 11);
    sprite.withPosition(50, 75);

    expect(sprite.x).toBe(50);
    expect(sprite.y).toBe(75);
});

test('Changing one position value correctly', () => {
    sprite.withPosition(10, 12);
    sprite.withPosition(10, 50);

    expect(sprite.x).toBe(10);
    expect(sprite.y).toBe(50);
});

test('Setting position correctly', () => {
    const returned = sprite.withPosition(25, 87);
    expect(sprite.x).toBe(25);
    expect(sprite.y).toBe(87);
    expect(returned).toStrictEqual(sprite);
});

test('Setting size correctly', () => {
    const returned = sprite.withSize(150);
    expect(sprite.size).toBe(150);
    expect(returned).toStrictEqual(sprite);
});

test('Setting direction correctly', () => {
    const returned = sprite.withAngle(220);
    expect(sprite.direction).toBe(220);
    expect(returned).toStrictEqual(sprite);
});

test('Setting draggable correctly', () => {
    const returned = sprite.asDraggable();

    expect(sprite.draggable).toBe(true);
    expect(returned).toStrictEqual(sprite);
});

test('Setting draggable multiple times correctly', () => {
    sprite.asDraggable();
    sprite.asDraggable();
    
    expect(sprite.draggable).toBe(true);
});

test('Directly setting draggable to true correctly', () => {
    const returned = sprite.setDraggable(true);

    expect(sprite.draggable).toBe(true);
    expect(returned).toStrictEqual(sprite);
});

test('Directly setting draggable to false correctly', () => {
    const returned = sprite.setDraggable(false);

    expect(sprite.draggable).toBe(false);
    expect(returned).toStrictEqual(sprite);
});

test('Setting rotation style correctly', () => {
    const returned = sprite.withRotationStyle('left-right');
    expect(sprite.rotationStyle).toBe('left-right');
    expect(returned).toStrictEqual(sprite);
});

test('Setting visible correctly', () => {
    const returned = sprite.asInvisibleSprite();

    expect(sprite.visible).toBe(false);
    expect(returned).toStrictEqual(sprite);
});

test('Setting visible multiple times correctly', () => {
    sprite.asInvisibleSprite();
    sprite.asInvisibleSprite();

    expect(sprite.visible).toBe(false);
});

test('Directly setting visible to true correctly', () => {
    const returned = sprite.setVisible(true);

    expect(sprite.visible).toBe(true);
    expect(returned).toStrictEqual(sprite);
});

test('Directly setting visible to false correctly', () => {
    const returned = sprite.setVisible(false);

    expect(sprite.visible).toBe(false);
    expect(returned).toStrictEqual(sprite);
});
