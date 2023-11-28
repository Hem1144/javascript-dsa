//! Checking sum zero problem using pair
// [-5,-4,-3,-2,0,2,4,6,8] =>input
//! [?,?] ->output

// function getSumPairZero(arr) {
//   // for (let number of arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [i, j];
//       }
//     }
//   }
// }

// let sum = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(sum);

//! Time complexity O(n^2)

//! 2nd solution
function getSumPairZero(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [left, right];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let sum = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(sum);

//! Time complexity= O(n)
