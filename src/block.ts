export class Block {
    _uid: string;
    _lastChildBlock: Block;
    opcode: string;
    next: (string|null) = null;
    parent: (string|null) = null;
    inputs: {[id: string]: (number|string|boolean|(number|string|boolean)[])[]} = {};
    fields: {[id: string]: string[]} = {};
    shadow: boolean = true;
    topLevel: boolean = false;

    constructor(opcode: string) {
        this.opcode = opcode;
    }

    withChildBlock(block: Block) {
        block.topLevel = false;
        block.parent = this._uid;

        if (this._lastChildBlock != null) {
            this._lastChildBlock.next = block._uid;
        }

        this._lastChildBlock = block;
    }
}