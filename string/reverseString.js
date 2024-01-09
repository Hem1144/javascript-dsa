//* alternative solution
// const reverseString = (str) => {
//   return str.reverse();
// };

const reverseString = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
