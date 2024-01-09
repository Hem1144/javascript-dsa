// var rotate = function (nums, k) {
//   k = k % nums.length;

//   let slicedVal = nums.slice(nums.length - k);

//   nums.splice(nums.length - k, k);
//   nums.splice(0, 0, ...slicedVal);
//   return nums;
// };

function rotate(nums, k) {
  //* Calculate the effective number of rotations (to handle k > nums.length)
  k %= nums.length;
  console.log(k);

  //* Extract the last k elements of the array
  const rotatedPart = nums.splice(nums.length - k);
  console.log(rotatedPart);

  //* Place the rotated elements at the beginning of the original array
  nums.unshift(...rotatedPart);

  return nums;
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
console.log(rotate(nums1, k1));
