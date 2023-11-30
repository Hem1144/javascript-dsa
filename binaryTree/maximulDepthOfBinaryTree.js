// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// const maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }

//   const stack = [{ node: root, depth: 1 }];
//   let maxDepth = 0;

//   while (stack.length > 0) {
//     const { node, depth } = stack.pop();

//     if (node) {
//       maxDepth = Math.max(maxDepth, depth);
//       stack.push({ node: node.left, depth: depth + 1 });
//       stack.push({ node: node.right, depth: depth + 1 });
//     }
//   }

//   return maxDepth;
// };

// const tree1 = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15), new TreeNode(7))
// );
// console.log(maxDepth(tree1));
// const tree2 = new TreeNode(1, null, new TreeNode(2));
// console.log(maxDepth(tree2));

//! Type second
var maxDepth = function (root) {
  if (!root) return 0;

  const stack = [];
  const nodeCheck = [];
  let maxLength = 0;
  stack.push(root);
  nodeCheck.push(1);

  while (stack.length > 0) {
    const node = stack.pop();
    const currDepth = nodeCheck.pop();

    if (currDepth > maxLength) {
      maxLength = currDepth;
    }

    if (node.left) {
      stack.push(node.left);
      nodeCheck.push(currDepth + 1);
    }
    if (node.right) {
      stack.push(node.right);
      nodeCheck.push(currDepth + 1);
    }
  }
  return maxLength;
};

//! Using recursion method

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

// Example usage:
const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(tree1));
const tree2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(tree2));

//! Time complexity=O(n)
//! Space Complexity=O(n)
