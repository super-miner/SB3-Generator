import { createBroadcast, createCostume, createList, createVariable } from "../src/sb3Generator";
import { Sprite } from "../src/sprite";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigns values correctly', () => {
    const sprite = new Sprite('Test sprite');
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
    expect(sprite.layerOrder).toBe(0);
    expect(sprite.tempo).toBe(60);
    expect(sprite.videoTransparency).toBe(50);
    expect(sprite.videoState).toBe('on');
    //TODO: Test TTS language
});

//TODO: Test build

test('Set stage state correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.asStage();
    expect(sprite.isStage).toBe(true);
});

test('Adding one variable correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withVariable(createVariable('Test variable 1'));
    expect(sprite._variables).toStrictEqual([createVariable('Test variable 1')]);
});

test('Adding multiple variables correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withVariable(createVariable('Test variable 1'));
    sprite.withVariable(createVariable('Test variable 2'));
    expect(sprite._variables).toStrictEqual([createVariable('Test variable 1'), createVariable('Test variable 2')]);
});

test('Adding one list correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withList(createList('Test list 1'));
    expect(sprite._lists).toStrictEqual([createList('Test list 1')]);
});

test('Adding multiple lists correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withList(createList('Test list 1'));
    sprite.withList(createList('Test list 2'));
    expect(sprite._lists).toStrictEqual([createList('Test list 1'), createList('Test list 2')]);
});

test('Adding one broadcast correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withBroadcast(createBroadcast('Test broadcast 1'));
    expect(sprite._broadcasts).toStrictEqual([createBroadcast('Test broadcast 1')]);
});

test('Adding multiple broadcasts correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withBroadcast(createBroadcast('Test broadcast 1'));
    sprite.withBroadcast(createBroadcast('Test broadcast 2'));
    expect(sprite._broadcasts).toStrictEqual([createBroadcast('Test broadcast 1'), createBroadcast('Test broadcast 2')]);
});

//TODO: Test blocks once they are implemented

//TODO: Test comments once they are implemented

test('Setting default costume correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withDefaultCostume(10);
    expect(sprite.currentCostume).toBe(10);
});

test('Adding one costume correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withCostume(createCostume('TestCostume.png'));
    expect(sprite.costumes).toStrictEqual([createCostume('TestCostume.png')]);
});

test('Adding multiple costumes correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withCostume(createCostume('TestCostume.png'));
    sprite.withCostume(createCostume('TestCostume.png'));
    expect(sprite.costumes).toStrictEqual([createCostume('TestCostume.png'), createCostume('TestCostume.png')]);
});

//TODO: Test sounds once they are implemented

test('Setting volume correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withVolume(10);
    expect(sprite.volume).toBe(10);
});

test('Setting layer order correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withLayerOrder(10);
    expect(sprite.layerOrder).toBe(10);
});

test('Setting tempo correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withTempo(10);
    expect(sprite.tempo).toBe(10);
});

test('Setting video transparency correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withVideoTransparency(10);
    expect(sprite.videoTransparency).toBe(10);
});

test('Setting video state correctly', () => {
    const sprite = new Sprite('Test sprite');
    sprite.withVideoState('off');
    expect(sprite.videoState).toBe('off');
});

//TODO: Test TTS when implemented
