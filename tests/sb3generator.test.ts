import { Block } from "../src/block";
import { Costume } from "../src/costume";
import { Mutation } from "../src/mutation";
import { Project } from "../src/project";
import { createBlock, createCostume, createProject, createSound, createSprite, createVariable, generateUid } from "../src/sb3Generator";
import { Sound } from "../src/sound";
import { Sprite } from "../src/sprite";
import { Variable } from "../src/variable";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Creates project correctly', () => {
    expect(createProject('Project Name')).toEqual(new Project('Project Name'));
});

test('Creates sprite correctly', () => {
    expect(createSprite('Sprite Name')).toEqual(new Sprite('Sprite Name'));
});

test('Creates variable correctly', () => {
    expect(createVariable('Variable Name')).toEqual(new Variable('Variable Name'));
});

test('Creates costume correctly', () => {
    expect(createCostume('tests/res/TestCostume.png')).toEqual(new Costume('tests/res/TestCostume.png'));
});

test('Creates sound correctly', () => {
    expect(createSound('tests/res/TestSound.wav')).toEqual(new Sound('tests/res/TestSound.wav'));
});

test('Creates block correctly', () => {
    expect(createBlock('motion_movesteps', ['15'], [])).toStrictEqual(new Block('motion_movesteps', ['15'], []));
});

test('Generates Uid correctly', () => {
    expect(generateUid(40)).toEqual('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
});

test('Generates Uid correctly with implicit length', () => {
    expect(generateUid()).toEqual('!!!!!!!!!!!!!!!!!!!!');
});

test('Generates Uid correctly with different random values', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1.0);

    expect(generateUid(3)).toEqual('999');
});
