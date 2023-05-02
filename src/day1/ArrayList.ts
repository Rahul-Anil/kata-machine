export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    public arr: T[];


    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.arr = [];
    }

    private grow() {
        this.capacity = this.capacity*2;
    }

    prepend(item: T): void {
        // Add to the beginning of an array
        this.length++;
        if (this.length > this.capacity) {
            this.grow();
        }
        this.arr.unshift(item);
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.capacity) {
            return;
        }
        this.length++;
        this.arr.splice(idx, 0, item);
    }

    append(item: T): void {
        this.length++;
        if (this.length > this.capacity) {
            this.grow();
        }
        this.arr.push(item);
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; ++i) {
            if (this.arr[i] == item) {
                return this.removeAt(i);
            }
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }
        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }
        this.length--;
        const val = this.arr.splice(idx, 1);
        return val[0];
    }
}