import { Variable } from "../src/variable";
import { generateUid } from "../src/sb3Generator";

let variable: Variable;

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);

    variable = new Variable('Test Variable');
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    expect(variable.uid).toBe(generateUid());
    expect(variable.name).toBe('Test Variable');
    expect(variable.value).toBe(0);
});

test('Adding single number value correctly', () => {
    variable.withValue(10);
    expect(variable.value).toBe(10);
});

test('Adding single string value correctly', () => {
    variable.withValue('test');
    expect(variable.value).toBe('test');
});
