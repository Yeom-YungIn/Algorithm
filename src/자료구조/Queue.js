export class Queue {
    constructor() {
        this.storage = new Object();
        this.front = 0;
        this.rear = 0;
    }

    enqueue(e) {
        this.storage[this.rear] = e;
        this.rear ++;
    }

    dequeue() {
        const removed = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;

        if (this.front === this.rear) {
            this.front = this.rear = 0;
        }

        return removed;
    }

    size() {
        return this.rear - this.size();
    }
}