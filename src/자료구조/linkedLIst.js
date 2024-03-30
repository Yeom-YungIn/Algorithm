
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
export class LinkedLIst {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
    }

    find(item) {
        let curNode = this.head;
        while (curNode.data !== item) {
            curNode = curNode.next;
        }
        return curNode;
    }

    insert(data, item) {
        let newNode = new Node(data);
        let cur = this.find(item);
        newNode.next = cur.next;
        cur.next = newNode;
    }

    printList() {
        let cur = this.head;
        while (cur !== null) {
            console.log(cur.data);
            cur = cur.next;
        }
    }
}