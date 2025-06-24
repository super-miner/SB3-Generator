import { Broadcast } from "../src/broadcast";
import { generateUid } from "../src/sb3Generator";

let broadcast: Broadcast;

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);

    broadcast = new Broadcast('Test Broadcast');
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    expect(broadcast.uid).toBe(generateUid());
    expect(broadcast.name).toBe('Test Broadcast');
});
