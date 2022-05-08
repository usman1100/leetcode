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

    constructor(init?: T[]) {
        if (init)
            init.forEach((e) => {
                this.insert(e);
            });
    }

    insert(value: T) {
        if (!this.root) {
            const nn = new TreeNode(value);
            this.root = nn;
            return;
        }

        let nn = new TreeNode<T>(value);
        let temp = this.root;

        while (true) {
            if (temp.value > value) {
                if (temp.left === null) {
                    temp.left = nn;
                    return;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = nn;
                    return;
                }
                temp = temp.right;
            }
        }
    }

    postTraversal(temp: TreeNode<T> | null = this.root) {
        if (temp === null) return;

        this.postTraversal(temp.left);
        console.log(temp.value);
        this.postTraversal(temp.right);
    }

    getHeight() {
        return this.getHeightRecursive(this.root);
    }

    getHeightRecursive(temp: TreeNode<T> | null = this.root): number {
        if (temp === null) return 0;
        return (
            Math.max(
                this.getHeightRecursive(temp.left),
                this.getHeightRecursive(temp.right)
            ) + 1
        );
    }
}

const tree = new BST<number>([7, 8, 34, 79, 12]);
console.log(tree.getHeight());

tree.postTraversal();
