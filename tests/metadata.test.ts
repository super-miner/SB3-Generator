import { Metadata } from "../src/metadata";

test('Constructor assigning values correctly', () => {
    const metadata = new Metadata('a', 'b', 'cdef');
    expect(metadata.semver).toBe('a');
    expect(metadata.vm).toBe('b');
    expect(metadata.agent).toBe('cdef');
});
