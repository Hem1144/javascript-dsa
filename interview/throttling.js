const myThrottle = (func, delay) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      func();
    }, delay);
  };
};

const newFunc = myThrottle(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked");
}, 5000);
