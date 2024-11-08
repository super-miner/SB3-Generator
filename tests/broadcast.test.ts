import { Broadcast } from "../src/broadcast";
import { generateUid } from "../src/sb3Generator";

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    const broadcast = new Broadcast('Test Broadcast');
    expect(broadcast.uid).toBe(generateUid());
    expect(broadcast.name).toBe('Test Broadcast');
});
