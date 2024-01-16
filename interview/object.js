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

//! What's  JSON.stringify() and JSON.parse()
// const user = {
//   name: "Hemlal Dulal",
//   age: 25,
// };
// const strObj = JSON.stringify(user); //* convert javascript object into string
// localStorage.setItem("test", strObj);

// console.log(JSON.parse(localStorage.getItem("test")));
// const objStr = JSON.parse(strObj); //* convert javascript string into javascript object
// console.log(objStr);

//! Question-5 What's the output
// console.log([[..."Hemlal"]]);
// const user = { name: "Hemlal", age: 25 };
// const admin = { admin: true, ...user };
// console.log(admin);

//! Question-6 What's the output
// const settings = {
//   username: "Hemlal",
//   level: 19,
//   health: 95,
// };
// const data = JSON.stringify(settings, ["level", "health"]); //* only stringify level and health
// console.log(data);

//! Question-7 What's the output
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius, //* arrow function takes as an windows object
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());

//! Question-8 What is destructuring in objects ?
// const user = {
//   name: "Hemlal",
//   age: 25,
//   address: {
//     city: "Melamchi",
//     state: "Bagmati",
//   },
// };
// const {
//   name,
//   address: { city, state },
// } = user;
// console.log(city);

//! Question-9 What's the output
// function getItems(fruitList, favoriteFruit, ...args) {
//   //* rest parameter always must be in at last
//   return [...fruitList, ...args, favoriteFruit];
// }
// console.log(getItems(["banana", "apple"], "pear", "orange"));

//! Question-10 What's the output
// let c = { greeting: "Hey!" };
// let d;
// d = c; //* assign reference of variable c into d
// c.greeting = "Hello";
// console.log(d.greeting);

//! Question-11 What's the output
// console.log({ a: 1 } == { a: 1 }); //* it compares the object referance not an value
// console.log({ a: 1 } === { a: 1 });

//! Question-12 What's the output
// let person = { name: "Hemlal" };
// const members = [person];
// person = null;
// console.log(members);

//! Question-13 What's the output
// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };
// multiply();
// multiply();
// multiply(value);
// multiply(value);

//! shallow copy and deep copy
// let user = {
//   name: "Hemlal Dulal",
//   age: 25,
// };
// const objClone = Object.assign({}, user); //* 1st way
// const objClone = JSON.parse(JSON.stringify(user)); //* 2nd way
// const objClone = { ...user }; //* 3rd way
// objClone.name = "Dulal";
// console.log(user, objClone);

//! IFFE
// const func = (function (a) {
//   delete a; //! delete only delete the object key-value not a local variable
//   return a;
// })(5);
// console.log(func);
