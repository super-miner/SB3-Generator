import { Mutation } from "../src/mutation";

test('Creating mutation correctly', () => {
    const mutation = new Mutation([], false);

    expect(mutation.tagName).toBe('mutation');
    expect(mutation.children).toStrictEqual([]);
    expect(mutation.hasnext).toBe(false);
});
