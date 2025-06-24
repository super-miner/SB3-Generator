import { Project } from "../src/project";
import { createSprite } from "../src/sb3Generator";

let project: Project;

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);

    project = new Project('Test Project');
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigns values correctly', () => {
    expect(project.name).toBe('Test Project');
});

test('Correctly adds sprite', () => {
    project.withSprite(createSprite('Test sprite 1'));
    expect(project.targets).toStrictEqual([createSprite('Test sprite 1')]);
});

test('Correctly adds multiple sprites', () => {
    project.withSprite(createSprite('Test sprite 1'));
    project.withSprite(createSprite('Test sprite 2'));
    expect(project.targets).toStrictEqual([createSprite('Test sprite 1'), createSprite('Test sprite 2')]);
});

//TODO: Need tests for build.

test('Correct output directory path', () => {
    expect(project.getOutputDirectoryPath()).toBe('output/');
});

test('Correct output file path', () => {
    expect(project.getOutputFilePath()).toBe('output/Test Project.sb3');
});
