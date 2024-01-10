// console.log({} == {}); //! it is false because objects are compared by reference, not by their contents

// console.log({} === {}); //! it will return false because these objects are different instances in memory

// const obj1 = {};
// const obj2 = obj1; // obj2 references the same object as obj1
// console.log(obj1 == obj2); // Output: true

//* Loose Equality Operator (==): The == operator performs type coercion before comparing two values. It allows for values of different types to be considered equal if they can be converted to the same value.

console.log(5 == "5"); // Output: true (coerces string "5" to a number before comparison)
console.log(0 == false); // Output: true (coerces false to numeric 0 before comparison)
console.log(null == undefined); // Output: true (both null and undefined are considered equal)

//* Strict Equality Operator (===): The === operator checks for equality without performing type coercion. It evaluates to true only if the values being compared are of the same type and have the same value.
console.log(5 === "5"); // Output: false (string "5" is not equal to the number 5 without type coercion)
console.log(0 === false); // Output: false (0 is a number, false is a boolean - different types)
console.log(null === undefined); // Output: false (strict comparison fails because they are of different types)
