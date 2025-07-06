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
    expect(variable.value).toBe('');
});

test('Adding single string value correctly', () => {
    variable.withValue('test');
    expect(variable.value).toBe('test');
});

test('Adding single number value correctly', () => {
    variable.withValue(10);
    expect(variable.value).toBe('10');
});

test('Adding single true boolean value correctly', () => {
    variable.withValue(true);
    expect(variable.value).toBe('true');
});

test('Adding single false boolean value correctly', () => {
    variable.withValue(false);
    expect(variable.value).toBe('false');
});
