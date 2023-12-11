console.log("Start");

function myFunction(x) {
  setTimeout(() => {
    console.log("Async operation 1 completed");
  }, 0);
  setTimeout(() => {
    console.log("Async operation 2 completed");
  }, 0);
  return x;
}
console.log(myFunction(5));

console.log("Middle");

// setTimeout(() => {
//   console.log("Async operation 3 completed");
// }, 0);

console.log("End");
