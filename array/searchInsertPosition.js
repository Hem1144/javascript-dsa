function searchInsertPosition(nums, target) {
  let indices = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      indices.push(i);
    } else if (nums[i] > target) {
      indices.push(i);
      break;
    }
  }

  if (indices.length === 0) {
    indices.push(nums.length);
  }

  return indices;
}

//* Example usage:
console.log(searchInsertPosition([1, 3, 5, 6], 5)); // Output: [2]
console.log(searchInsertPosition([1, 3, 5, 6], 2)); // Output: [1]
console.log(searchInsertPosition([1, 3, 5, 6], 7)); // Output: [4]
console.log(searchInsertPosition([1, 3, 5, 6], 0)); // Output: [0]
