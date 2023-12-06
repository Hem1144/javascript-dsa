class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

var sortedArrayToBST = function (nums) {
  if (!nums || nums.length === 0) return null;

  const root = new TreeNode(null);
  const stack = [{ node: root, leftIndex: 0, rightIndex: nums.length - 1 }];

  while (stack.length > 0) {
    const { node, leftIndex, rightIndex } = stack.pop();
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    node.val = nums[mid];

    if (leftIndex <= mid - 1) {
      node.left = new TreeNode(null);
      stack.push({
        node: node.left,
        leftIndex: leftIndex,
        rightIndex: mid - 1,
      });
    }

    if (rightIndex >= mid + 1) {
      node.right = new TreeNode(null);
      stack.push({
        node: node.right,
        leftIndex: mid + 1,
        rightIndex: rightIndex,
      });
    }
  }

  return root;
};

const nums1 = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums1));

const nums2 = [1, 3];
console.log(sortedArrayToBST(nums2));
