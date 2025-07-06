import { List } from "../src/list";
import { generateUid } from "../src/sb3Generator";

let list: List;

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);

    list = new List('Test List');
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    expect(list.uid).toBe(generateUid());
    expect(list.name).toBe('Test List');
    expect(list.values).toStrictEqual([]);
});

test('Adding single string value correctly', () => {
    list.withValue('Hello');
    expect(list.values).toStrictEqual(['Hello']);
});

test('Adding single number value correctly', () => {
    list.withValue(10);
    expect(list.values).toStrictEqual(['10']);
});

test('Adding multiple single number values correctly', () => {
    list.withValue(9);
    list.withValue(8);
    expect(list.values).toStrictEqual(['9', '8']);
});

test('Adding multiple number values correctly', () => {
    list.withValues([100, 110]);
    expect(list.values).toStrictEqual(['100', '110']);
});

test('Adding single true boolean value correctly', () => {
    list.withValue(true);
    expect(list.values).toStrictEqual(['true']);
});

test('Adding single false boolean value correctly', () => {
    list.withValue(false);
    expect(list.values).toStrictEqual(['false']);
});

test('Adding multiple any type values correctly', () => {
    list.withValues([true, 'testing']);
    list.withValue(69);
    expect(list.values).toStrictEqual(['true', 'testing', '69']);
});
