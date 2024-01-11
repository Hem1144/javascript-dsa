// const myName = "Hemlal";

// function printName() {
//   console.log(myName);
// }

// printName();

// function init() {
//   let name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

//* MDN code

// function makeFunc() {
//   const name = "Mozilla";
//   console.log("Dulal");
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function callCount() {
//   let count = 0;
//   return function () {
//     return (count += 1);
//   };
// }

// let newFunction1 = callCount();
// let newFunction2 = callCount();

// console.log(newFunction1());
// console.log(newFunction1());

// console.log(newFunction2());
// console.log(newFunction2());

// function x() {
//   const a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

function outerFunction(outerVariable) {
  //* Inner function defined within the outer function
  function innerFunction(innerVariable) {
    //* Accesses both outerVariable and innerVariable
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  }

  // Returning the inner function, creating a closure
  return innerFunction;
}

//* Creating a closure by calling outerFunction with a specific value
let closureExample = outerFunction("I am from the outer function");

//* Using the closure to access the inner function
closureExample("I am from the inner function");
