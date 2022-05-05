class ListNode {
    public value: number = 0;
    public next: ListNode | null = null;

    constructor(n: number) {
        this.value = n;
    }
}

class LinkedList {
    public head: ListNode | null = null;
    public tail: ListNode | null = null;

    append(value: number) {
        const nn = new ListNode(value);

        if (!this.head || !this.tail) {
            this.head = nn;
            this.tail = nn;
            return this;
        }

        this.tail.next = nn;
        this.tail = nn;
    }

    empty(): boolean {
        return this.head === null;
    }

    prepend(value: number) {
        const nn = new ListNode(value);

        if (!this.head || !this.tail) {
            this.head = nn;
            this.tail = nn;
            return this;
        }
        nn.next = this.head;
        this.head = nn;
    }

    pop() {
        if (!this.head) throw Error("Stack underflow");

        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return;
        }

        let current = this.head;
        let prevNode = null;
        if (!current) return;

        while (current.next) {
            prevNode = current;
            current = current.next;
        }

        if (prevNode) {
            prevNode.next = null;
            this.tail = prevNode;
        }
    }

    shift(): ListNode {
        if (!this.head) throw Error("Stack underflow error");

        if (this.head.next === null) {
            let copy = this.head;

            this.head = null;
            this.tail = null;
            return copy;
        }

        let copy = this.head;
        let temp = this.head.next;
        this.head = null;
        this.head = temp;

        return copy;
    }

    indexOf(value: number): number {
        if (!this.head) return -1;
        let index = 0;
        let temp = this.head;

        while (temp) {
            if (temp.value === value) {
                console.log(temp.value);
                return index;
            }
            index++;
            temp = temp.next as ListNode;
        }

        return -1;
    }

    remove(value: number) {
        if (!this.head) throw Error("Stack underflow");

        if (!this.head.next) {
            this.pop();
            return;
        }

        if (this.head.value === value) {
            this.shift();
            return;
        }

        let prev = this.head;
        let temp = this.head.next;

        while (temp) {
            if (temp.value === value) {
                temp = temp.next as ListNode;
                prev.next = null;
                prev.next = temp;
                return;
            }
            temp = temp.next as ListNode;
            prev = prev.next as ListNode;
        }
        throw Error("Not found");
    }

    twoSum(sum: number): number[] {
        let i = this.head;

        let n_i = 0,
            n_j = 0;

        while (i) {
            let j = i.next;
            n_j = n_i + 1;

            while (j) {
                if (i.value + j.value === sum) return [n_i, n_j];
                n_j++;
                j = j.next;
            }
            n_i++;
            i = i.next;
        }

        return [-1, -1];
    }

    max() {
        if (!this.head) throw Error("List is empty");

        let maxValue = Number.MIN_VALUE;
        let temp = this.head;

        while (temp) {
            if (temp.value > maxValue) maxValue = temp.value;
            temp = temp.next as ListNode;
        }
        return maxValue;
    }

    min() {
        if (!this.head) throw Error("List is empty");

        let minValue = Number.MAX_VALUE;
        let temp = this.head;

        while (temp) {
            if (temp.value < minValue) minValue = temp.value;
            temp = temp.next as ListNode;
        }
        return minValue;
    }

    view() {
        let temp = this.head;
        let data = "";
        while (temp) {
            data += `${temp.value} -> `;
            temp = temp.next;
        }
        return data;
    }
}

const ll = new LinkedList();

const LIMIT = 7;
for (let i = 0; i < LIMIT; i++) {
    ll.append(Math.floor(Math.random() * 10) + 1);
}
console.log(ll.max());
console.log(ll.min());

console.log(ll.twoSum(10));
console.log(ll.view());
