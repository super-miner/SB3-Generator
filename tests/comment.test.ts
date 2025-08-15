import { Block } from "../src/block";
import { Comment } from "../src/comment";
import { generateUid } from "../src/sb3Generator";

let comment: Comment;

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);

    comment = new Comment('Test Comment', 200, 500);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Constructor assigning values correctly', () => {
    expect(comment._uid).toBe(generateUid());
    expect(comment._block).toBe(null);
    expect(comment.blockId).toBe(null);
    expect(comment.x).toBe(0);
    expect(comment.y).toBe(0);
    expect(comment.width).toBe(200);
    expect(comment.height).toBe(500);
    expect(comment.minimized).toBe(false);
    expect(comment.text).toBe('Test Comment');
});

test('Adding block correctly', () => {
    const block = new Block('motion_movesteps', ['321'], []);

    comment.withBlock(block);

    expect(comment._block).toStrictEqual(block);
    expect(comment.blockId).toBe(block._uid);
});

test('Resetting block to null correctly', () => {
    const block = new Block('motion_movesteps', ['111'], []);

    comment.withBlock(block);
    comment.withBlock(null);

    expect(comment._block).toBe(null);
    expect(comment.blockId).toBe(null);
});

test('Overwriting block correctly', () => {
    const block1 = new Block('motion_movesteps', ['6969'], []);
    const block2 = new Block('looks_say', ['Ligma'], []);

    comment.withBlock(block1);
    comment.withBlock(block2);

    expect(comment._block).toStrictEqual(block2);
    expect(comment.blockId).toBe(block2._uid);
});

test('Setting x position correctly', () => {
    comment.withXPosition(10101);

    expect(comment.x).toBe(10101);
    expect(comment.y).toBe(0);
});

test('Setting x position correctly multiple times', () => {
    comment.withXPosition(69);
    comment.withXPosition(10203);

    expect(comment.x).toBe(10203);
    expect(comment.y).toBe(0);
});

test('Setting y position correctly', () => {
    comment.withYPosition(10);

    expect(comment.y).toBe(10);
    expect(comment.x).toBe(0);
});

test('Setting y position correctly multiple times', () => {
    comment.withYPosition(690);
    comment.withYPosition(100);

    expect(comment.y).toBe(100);
    expect(comment.x).toBe(0);
});

test('Setting position correctly', () => {
    comment.withPosition(10, 11);

    expect(comment.x).toBe(10);
    expect(comment.y).toBe(11);
});

test('Changing position correctly', () => {
    comment.withPosition(10, 11);
    comment.withPosition(50, 75);

    expect(comment.x).toBe(50);
    expect(comment.y).toBe(75);
});

test('Changing one position value correctly', () => {
    comment.withPosition(10, 12);
    comment.withPosition(10, 50);

    expect(comment.x).toBe(10);
    expect(comment.y).toBe(50);
});

test('Setting width correctly', () => {
    comment.withWidth(100);

    expect(comment.width).toBe(100);
    expect(comment.height).toBe(500);
});

test('Setting width correctly multiple times', () => {
    comment.withWidth(13);
    comment.withWidth(14);

    expect(comment.width).toBe(14);
    expect(comment.height).toBe(500);
});

test('Setting height correctly', () => {
    comment.withHeight(22);

    expect(comment.height).toBe(22);
    expect(comment.width).toBe(200);
});

test('Setting height correctly multiple times', () => {
    comment.withHeight(120);
    comment.withHeight(80);

    expect(comment.height).toBe(80);
    expect(comment.width).toBe(200);
});

test('Setting size correctly', () => {
    comment.withSize(500, 200);

    expect(comment.width).toBe(500);
    expect(comment.height).toBe(200);
});

test('Changing size correctly', () => {
    comment.withSize(138, 111);
    comment.withSize(1, 11);

    expect(comment.width).toBe(1);
    expect(comment.height).toBe(11);
});

test('Changing one size value correctly', () => {
    comment.withSize(101, 191);
    comment.withSize(10, 80);

    expect(comment.width).toBe(10);
    expect(comment.height).toBe(80);
});

test('Setting minimized correctly', () => {
    comment.asMinimized();

    expect(comment.minimized).toBe(true);
});

test('Setting minimized multiple times correctly', () => {
    comment.asMinimized();
    comment.asMinimized();

    expect(comment.minimized).toBe(true);
});

test('Setting text correctly', () => {
    comment.withText('New Text');

    expect(comment.text).toBe('New Text');
});

test('Setting empty text correctly', () => {
    comment.withText('');

    expect(comment.text).toBe('');
});
