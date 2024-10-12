import { List } from "../src/list";
import { generateUid } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    const list = new List('Test List');
    expect(list.uid).toBe(generateUid());
    expect(list.name).toBe('Test List');
    expect(list.values).toStrictEqual([]);
});

test('Adding single number value correctly', () => {
    const list = new List('Test List');
    list.withValue(10);
    expect(list.values).toStrictEqual([10]);
});

test('Adding multiple single number values correctly', () => {
    const list = new List('Test List');
    list.withValue(9);
    list.withValue(8);
    expect(list.values).toStrictEqual([9, 8]);
});

test('Adding multiple number values correctly', () => {
    const list = new List('Test List');
    list.withValues([100, 110]);
    expect(list.values).toStrictEqual([100, 110]);
});

test('Adding single string value correctly', () => {
    const list = new List('Test List');
    list.withValue('hello');
    expect(list.values).toStrictEqual(['hello']);
});

test('Adding single boolean value correctly', () => {
    const list = new List('Test List');
    list.withValue(false);
    expect(list.values).toStrictEqual([false]);
});

test('Adding multiple any type values correctly', () => {
    const list = new List('Test List');
    list.withValues([true, 'testing']);
    list.withValue(69);
    expect(list.values).toStrictEqual([true, 'testing', 69]);
});
