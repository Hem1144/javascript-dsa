class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isValidBST = function (root) {
  if (!root) {
    return true;
  }

  const stack = [];
  let prev = null;

  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    //* Check the current node's value against the previous node's value
    if (prev !== null && root.val <= prev.val) {
      return false;
    }

    prev = root;
    root = root.right;
  }

  return true;
};

const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree1));

const tree2 = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(3), new TreeNode(6))
);
console.log(isValidBST(tree2));
