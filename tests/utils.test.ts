import { getFileExtensionFromPath, getFileNameFromPath } from "../src/utils";

test('Getting extension from path', () => {
    expect(getFileExtensionFromPath('testfile.png')).toBe('png');
});

test('Getting extension from path with directory', () => {
    expect(getFileExtensionFromPath('testdir/testfile.svg')).toBe('svg');
});

test('Getting extension from empty path', () => {
    expect(getFileExtensionFromPath('')).toBe('');
});

test('Not getting extension from middle of path', () => {
    expect(getFileExtensionFromPath('testpath.notthis.wav')).toBe('wav');
});

test('Getting extension from path without extension', () => {
    expect(getFileExtensionFromPath('testpath')).toBe('');
});

test('Getting name from path', () => {
    expect(getFileNameFromPath('testfile.png')).toBe('testfile');
});

test('Getting name from path with directory', () => {
    expect(getFileNameFromPath('testdir/testfile2.svg')).toBe('testfile2');
});

test('Getting name from empty path', () => {
    expect(getFileNameFromPath('')).toBe('');
});

test('Getting name with multiple extensions', () => {
    expect(getFileNameFromPath('acoolname.extra.wav')).toBe('acoolname.extra');
});

test('Getting name from path without name', () => {
    expect(getFileNameFromPath('.png')).toBe('');
});
