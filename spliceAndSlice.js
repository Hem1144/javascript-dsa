const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//! Slice method did not mutate the array
// let slice = a.slice(3, 7); //! last index is not including
// let slice1 = a.slice(2); //! it removes first two element and return all as it is
// console.log(slice1);
// console.log(a);

//! Splice

// const myFish = ["angel", "clown", "trumpet", "sturgeon"];
// const removed = myFish.splice(3, 1);
// console.log(removed);
// console.log(myFish);

//! Split
const str = "The quick brown fox jumps over the lazy dog.";
let split = str.split("", 4);
console.log(split);
