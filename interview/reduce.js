const arr = [5, 1, 3, 2, 6];

//* find sum or max element
//! normal way ro get sum
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

//! normal function to get maximum number
// function maxNumber(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(maxNumber(arr));

const output = arr.reduce(function (accumulator, currentValue) {
  return (accumulator += currentValue);
}, 0);
console.log(output);

const maxNumber = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
});
console.log(maxNumber);
