console.log("Start");
//* Asynchronous operation with a callback
function asynchronousOperation(callback) {
  setTimeout(() => {
    console.log("Asynchronous operation completed");
    callback();
  }, 2000);
}

asynchronousOperation(() => {
  console.log("Callback executed");
});
console.log("End");

// console.log("Start");
// //* Asynchronous operation with a Promise
// function asynchronousOperation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Asynchronous operation completed");
//       resolve();
//     }, 2000);
//   });
// }

// asynchronousOperation().then(() => {
//   console.log("Promise resolved");
// });
// console.log("End");

// console.log("Start");
// //* Asynchronous operation with async/await
// async function performAsyncTask() {
//   await new Promise((resolve) => setTimeout(resolve, 2000)); //! created a promise using keyword Promise
//   console.log("Asynchronous operation completed");
// }

// performAsyncTask();

// console.log("End");
