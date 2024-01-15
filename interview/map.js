//* way to use map function
const arr = [5, 1, 3, 2, 10];

function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}

const output = arr.map((x) => x.toString(2));

console.log(output);
console.log(arr);
