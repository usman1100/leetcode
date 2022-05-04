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

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
console.log(ll.view());
