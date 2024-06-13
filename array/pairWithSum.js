const findPairsWithSum = (arr, target) => {
  arr.sort((a, b) => a - b);

  let pair = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      pair.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return pair;
};

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 10;
const result = findPairsWithSum(input, targetSum);
console.log(result);
