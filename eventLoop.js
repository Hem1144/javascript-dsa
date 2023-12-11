console.log("Start");

setTimeout(() => {
  console.log("Async operation 1 completed");
}, 2000);

console.log("Middle");

setTimeout(() => {
  console.log("Async operation 2 completed");
}, 0);

console.log("End");
