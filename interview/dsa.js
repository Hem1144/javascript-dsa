//! An integer is a palindrome when it reads the same forward and backend
// const isPalindrome = function (x) {
//   return x < 0 ? false : x === +x.toString().split("").reverse().join(""); //* convert it into string
// };
// const result = isPalindrome(1210);
// console.log(result);

//! Fibonacci Number
//* first method
// const fibo = function (n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   console.log(arr);
// };
// fibo(8);

//* second method using recursion
// const fibo = function (n) {
//   if (n <= 1) return n;

//   return fibo(n - 1) + fibo(n - 2);
// };
// const result = fibo(3);
// console.log(result);

//! third method
const fibo = (n) => (n <= 1 ? n : fibo(n - 1) + fibo(n - 2));

console.log(fibo(4));
