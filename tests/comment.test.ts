import { Comment } from "../src/comment";

let comment: Comment;

beforeEach(() => {
    comment = new Comment('Test List', 200, 200);
});

test('Constructor assigning values correctly', () => {
    expect(comment._block).toBe(null);
    expect(comment.blockId).toBe(null);
    expect(comment.x).toBe(0);
    expect(comment.y).toBe(0);
    expect(comment.width).toBe(0);
    expect(comment.height).toBe(0);
    expect(comment.minimized).toBe(false);
    expect(comment.text).toBe('');
});
