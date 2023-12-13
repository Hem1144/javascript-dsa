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

function callCount() {
  let count = 0;
  return function () {
    return (count += 1);
  };
}

let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1());
console.log(newFunction1());

console.log(newFunction2());
console.log(newFunction2());
