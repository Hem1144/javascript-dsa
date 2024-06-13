function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }
  a = 50;
  return inner;
}
let a = outer();
a();


//! closure give you access to outer function's scope from inner an inner function