import { Project } from "../src/project";
import { createSprite } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigns values correctly', () => {
    const project = new Project('Test project');
    expect(project.name).toBe('Test project');
});

test('Correctly adds sprite', () => {
    const project = new Project('Test Project');
    project.withSprite(createSprite('Test sprite 1'));
    expect(project.targets).toStrictEqual([createSprite('Test sprite 1')]);
});

test('Correctly adds multiple sprites', () => {
    const project = new Project('Test Project');
    project.withSprite(createSprite('Test sprite 1'));
    project.withSprite(createSprite('Test sprite 2'));
    expect(project.targets).toStrictEqual([createSprite('Test sprite 1'), createSprite('Test sprite 2')]);
});

//TODO: Need tests for build.

test('Correct output directory path', () => {
    const project = new Project('Test Project');
    expect(project.getOutputDirectoryPath()).toBe('output/');
});

test('Correct output file path', () => {
    const project = new Project('Test Project');
    expect(project.getFilePath()).toBe('output/Test Project.sb3');
});
