class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

class BST<T> {
    private root: TreeNode<T> | null = null;

    insert(value: T) {
        if (!this.root) {
            const nn = new TreeNode(value);
            this.root = nn;
            return;
        }
    }
}

const tree = new BST<number>();
tree.insert(1);
console.log(tree);
