import { Costume } from "../src/costume";
import { Project } from "../src/project";
import { createCostume, createProject, createSound, createSprite, createVariable, generateUid } from "../src/sb3Generator";
import { Sound } from "../src/sound";
import { Sprite } from "../src/sprite";
import { Variable } from "../src/variable";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test("Test createProject", () => {
    expect(createProject("Project Name")).toEqual(new Project("Project Name"));
});

test("Test createSprite", () => {
    expect(createSprite("Sprite Name")).toEqual(new Sprite("Sprite Name"));
});

test("Test createVariable", () => {
    expect(createVariable("Variable Name")).toEqual(new Variable("Variable Name"));
});

test("Test createCostume", () => {
    expect(createCostume("TestCostume.png")).toEqual(new Costume("TestCostume.png"));
});

test("Test createSound", () => {
    expect(createSound("Pop.wav")).toEqual(new Sound("Pop.wav"));
});

test("Test createSound", () => {
    expect(generateUid()).toEqual('!!!!!!!!!!!!!!!!!!!!');
    expect(generateUid(40)).toEqual('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    jest.spyOn(global.Math, 'random').mockReturnValue(1.0);

    expect(generateUid(3)).toEqual('"""');
});
