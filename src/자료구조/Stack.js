export class Stack {
    constructor() {
        this.storage = new Object();
        this.size = 0;
    }

    push(e) {
        this.size++;
        this.storage[this.size] = e;
    }

    pop() {
        const removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    top() {
        return this.storage[this.size];
    }
}