// const user = {
//   name: "Hemlal Dulal",
//   age: 25,
//   "like my code": true,
// };

// delete user.age;
// user.name = "Hem Dulal";
// console.log(user["like my code"]);

//! add dynamic key-values pair to an object
// const property = "firstName";
// const name = "Hemlal Dulal";

// const user = {
//   [property]: name,
// };

//! loop every key-value in object
// const user = {
//   name: "Hemlal Dulal",
//   age: 25,
//   "like my code": true,
// };

// for (key in user) {
//   console.log(key);  //* logic to get key
//   console.log(user[key]); //* logic to get value of a key
// }
// console.log(user);

//! Qustion-1
// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// console.log(obj); //* first key's value will replace by updated value

//! Question-2  Create a function multiplyByTwo, multiplies all numeric values by 2
// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// function multiplyByTwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }
// multiplyByTwo(nums);
// console.log(nums);

//! Questions-3 What's the output of the following code?
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

//! IFFE
// const func = (function (a) {
//   delete a; //! delete only delete the object key-value not a local variable
//   return a;
// })(5);
// console.log(func);
