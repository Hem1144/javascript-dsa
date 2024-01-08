function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let unique = 0;

  let i = 1;
  while (i < nums.length) {
    if (nums[i] !== nums[unique]) {
      unique++;
      nums[unique] = nums[i];
    }
    i++;
  }

  return unique + 1;
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeDuplicates(arr);
console.log(result)
