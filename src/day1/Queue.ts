type Node<T> = {
    value: T,
    next?: Node<T>,
};

export default class Queue<T> {

    // FIFO: first in first out
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        // New queue (first addition to the node)
        if (!this.tail) {
            this.head = this.tail = node;
        }
        // add new element to the tail of the node
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        // deals with the head
        // empty queue
        if (!this.head) {
            return undefined
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        if (this.length == 0) {
            this.tail = undefined;
        }
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
};