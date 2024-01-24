function isSymmetric(root) {
  //! alternative solution
  //   if (!root) {
  //     return true; //* An empty tree is symmetric
  //   }
  //   return isMirror(root.left, root.right);
  // }
  // function isMirror(left, right) {
  //   if (!left && !right) {
  //     return true; //* Both subtrees are empty, so they are symmetric
  //   }
  //   if (!left || !right || left.val !== right.val) {
  //     return false; //* One subtree is empty or values don't match, not symmetric
  //   }
  //   //* Check if the left subtree's left is a mirror of the right subtree's right
  //   //* and if the left subtree's right is a mirror of the right subtree's left
  //   return isMirror(left.left, right.right) && isMirror(left.right, right.left);

  if (!root) return true;
  return traverse(root.left, root.right);
}

function traverse(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  if (node1.val !== node2.val) return false;

  return traverse(node1.left, node2.right) && traverse(node1.right, node2.left);
}

//* Example usage:
const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
};

console.log(isSymmetric(tree1)); //* Output: true

const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: null },
  },
};

console.log(isSymmetric(tree2)); //* Output: false
