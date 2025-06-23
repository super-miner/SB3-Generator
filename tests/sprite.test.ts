import { createBroadcast, createCostume, createList, createSprite, createVariable } from "../src/sb3Generator";
import { Sprite } from "../src/sprite";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigns values correctly', () => {
    const sprite = createSprite('Test sprite');
    expect(sprite.name).toBe('Test sprite');
    expect(sprite.isStage).toBe(false);
    expect(sprite._variables).toStrictEqual([]);
    expect(sprite._lists).toStrictEqual([]);
    expect(sprite._broadcasts).toStrictEqual([]);
    expect(sprite._blocks).toStrictEqual([]);
    //TODO: Test comments
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
    const sprite = createSprite('Test sprite');
    const returned = sprite.asStage();
    expect(sprite.isStage).toBe(true);
    expect(sprite.layerOrder).toBe(0);
    expect(returned).toStrictEqual(sprite);
});

test('Adding one variable correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withVariable(createVariable('Test variable 1'));
    expect(sprite._variables).toStrictEqual([createVariable('Test variable 1')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple variables correctly', () => {
    const sprite = createSprite('Test sprite');
    sprite.withVariable(createVariable('Test variable 1'));
    sprite.withVariable(createVariable('Test variable 2'));
    expect(sprite._variables).toStrictEqual([createVariable('Test variable 1'), createVariable('Test variable 2')]);
});

test('Adding one list correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withList(createList('Test list 1'));
    expect(sprite._lists).toStrictEqual([createList('Test list 1')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple lists correctly', () => {
    const sprite = createSprite('Test sprite');
    sprite.withList(createList('Test list 1'));
    sprite.withList(createList('Test list 2'));
    expect(sprite._lists).toStrictEqual([createList('Test list 1'), createList('Test list 2')]);
});

test('Adding one broadcast correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withBroadcast(createBroadcast('Test broadcast 1'));
    expect(sprite._broadcasts).toStrictEqual([createBroadcast('Test broadcast 1')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple broadcasts correctly', () => {
    const sprite = createSprite('Test sprite');
    sprite.withBroadcast(createBroadcast('Test broadcast 1'));
    sprite.withBroadcast(createBroadcast('Test broadcast 2'));
    expect(sprite._broadcasts).toStrictEqual([createBroadcast('Test broadcast 1'), createBroadcast('Test broadcast 2')]);
});

//TODO: Test blocks once they are implemented

//TODO: Test comments once they are implemented

test('Setting default costume correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withDefaultCostume(10);
    expect(sprite.currentCostume).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Adding one costume correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withCostume(createCostume('TestCostume.png'));
    expect(sprite.costumes).toStrictEqual([createCostume('TestCostume.png')]);
    expect(returned).toStrictEqual(sprite);
});

test('Adding multiple costumes correctly', () => {
    const sprite = createSprite('Test sprite');
    sprite.withCostume(createCostume('TestCostume.png'));
    sprite.withCostume(createCostume('TestCostume.png'));
    expect(sprite.costumes).toStrictEqual([createCostume('TestCostume.png'), createCostume('TestCostume.png')]);
});

//TODO: Test sounds once they are implemented

test('Setting volume correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withVolume(10);
    expect(sprite.volume).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting layer order correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withLayerOrder(10);
    expect(sprite.layerOrder).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting tempo correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withTempo(10);
    expect(sprite.tempo).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting video transparency correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withVideoTransparency(10);
    expect(sprite.videoTransparency).toBe(10);
    expect(returned).toStrictEqual(sprite);
});

test('Setting video state correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withVideoState('off');
    expect(sprite.videoState).toBe('off');
    expect(returned).toStrictEqual(sprite);
});

//TODO: Test TTS when implemented

test('Setting position correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withPosition(25, 87);
    expect(sprite.x).toBe(25);
    expect(sprite.y).toBe(87);
    expect(returned).toStrictEqual(sprite);
});

test('Setting size correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withSize(150);
    expect(sprite.size).toBe(150);
    expect(returned).toStrictEqual(sprite);
});

test('Setting direction correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withAngle(220);
    expect(sprite.direction).toBe(220);
    expect(returned).toStrictEqual(sprite);
});

test('Setting draggable correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.asDraggable();
    expect(sprite.draggable).toBe(true);
    expect(returned).toStrictEqual(sprite);
});

test('Setting rotation style correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.withRotationStyle('left-right');
    expect(sprite.rotationStyle).toBe('left-right');
    expect(returned).toStrictEqual(sprite);
});

test('Setting visible correctly', () => {
    const sprite = createSprite('Test sprite');
    const returned = sprite.asInvisibleSprite();
    expect(sprite.visible).toBe(false);
    expect(returned).toStrictEqual(sprite);
});
