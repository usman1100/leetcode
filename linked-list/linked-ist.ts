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

    shift() {
        if (!this.head) throw Error("Stack underflow error");

        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return;
        }

        let temp = this.head.next;
        this.head = null;
        this.head = temp;
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
ll.shift();
ll.shift();
ll.shift();
ll.shift();
ll.shift();

console.log(ll.tail);

console.log(ll.view());
