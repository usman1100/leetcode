class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let n = head;
    let copy = head;

    while (n?.next) {
        if (n?.val === n?.next?.val) {
            console.log(n.val);

            if (!n.next.next) {
                n.next = null;
            } else n.next = n.next?.next;
        }

        n = n.next;
    }

    return copy;
}

function view(head: ListNode | null) {
    let n = head;
    while (n) {
        console.log(n.val);
        n = n.next;
    }
}

const x = new ListNode(1);

let i = 0;
const arr = [1, 2, 3, 3, 4, 4, 4, 4, 4, 5];

while (i < arr.length) {
    let n = x;
    while (n.next) n = n.next;
    n.next = new ListNode(arr[i]);
    i++;
}

console.log(deleteDuplicates(x));
view(x);
