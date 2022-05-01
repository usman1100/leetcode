class ListNode {
    public value: number = 0;
    public next: ListNode | null = null;

    constructor(n: number) {
        this.value = n;
    }
}

class LinkedList {
    private head: ListNode | null = null;

    push(value: number) {
        const nn = new ListNode(value);

        if (!this.head) {
            this.head = nn;
            return;
        }

        let temp = this.head;

        while (temp.next) temp = temp.next;

        temp.next = nn;
    }

    pop() {
        if (!this.head) throw Error("Stack Underflow");

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let temp = this.head;

        while (temp.next?.next) {
            temp = temp.next;
        }

        temp.next = null;
    }

    insert(value: number, position: number) {
        let nn = new ListNode(value);

        if (position === 1) {
            nn.next = this.head;
        }
        let temp = this.head;

        for (let i = 2; i < position; i++) {
            if (!temp) throw Error("Invalid position");
            else temp = temp.next;
        }

        nn.next = temp?.next as ListNode;
        if (temp === null) throw Error("Cannot insert");
        temp.next = nn;
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

ll.push(1);
ll.push(2);
ll.push(3);
ll.insert(5, 3);

console.log(ll.view());
