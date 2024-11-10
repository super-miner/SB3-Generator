import { HasChildren, Mutation, Procedure } from "../src/mutation";
import { createBlock } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Creating Mutation correctly', () => {
    const mutation = new Mutation([]);

    expect(mutation.tagName).toBe('mutation');
    expect(mutation.children).toStrictEqual([]);
});

test('Creating HasChildren mutation correctly', () => {
    const mutation = new HasChildren([], true);

    expect(mutation.tagName).toBe('mutation');
    expect(mutation.children).toStrictEqual([]);
    expect(mutation.hasnext).toBe(true);
});

test('Creating Procedure mutation correctly', () => {
    const mutation = new Procedure([], 'false');

    expect(mutation.tagName).toBe('mutation');
    expect(mutation.children).toStrictEqual([]);
    expect(mutation.warp).toBe('false');
});

test('Adding a string argument to Procedure mutation correctly', () => {
    const mutation = new Procedure([], 'false');
    mutation.withArgument('Label');

    expect(mutation.proccode).toBe('Label');
    expect(mutation.argumentids).toBe('[""]');
    expect(mutation.argumentnames).toBe('[""]');
    expect(mutation.argumentdefaults).toBe('[""]');
});

test('Adding a block argument to Procedure mutation correctly', () => {
    const block = createBlock('argument_reporter_boolean', [], ['Test Block']);

    const mutation = new Procedure([], 'false');
    mutation.withArgument(block);

    expect(mutation.proccode).toBe('%b');
    expect(mutation.argumentids).toBe('["!!!!!!!!!!!!!!!!!!!!"]');
    expect(mutation.argumentnames).toBe('["Test Block"]');
    expect(mutation.argumentdefaults).toBe('["false"]');
});
