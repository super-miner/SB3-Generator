import { Variable } from "../src/variable";
import { generateUid } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    const variable = new Variable('Test Variable');
    expect(variable.uid).toBe(generateUid());
    expect(variable.name).toBe('Test Variable');
    expect(variable.value).toBe(0);
});

test('Adding single number value correctly', () => {
    const variable = new Variable('Test Variable');
    variable.withValue(10);
    expect(variable.value).toBe(10);
});

test('Adding single string value correctly', () => {
    const variable = new Variable('Test Variable');
    variable.withValue('test');
    expect(variable.value).toBe('test');
});
