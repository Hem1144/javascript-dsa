const palindromeNumber = (num) => {
  return num < 0 ? false : +num.toString().split("").reverse().join("");
};

const result = palindromeNumber(100);
console.log(result);
