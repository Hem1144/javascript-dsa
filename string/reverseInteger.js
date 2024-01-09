const reverseInteger = (num) => {
  let reverseNum = num.toString().split("").reverse().join("");
  if (reverseNum.endsWith("-") || reverseNum.endsWith(0)) {
    reverseNum = "-" + reverseNum;
    return parseInt(reverseNum);
  } else {
    return parseInt(reverseNum);
  }
};

console.log(reverseInteger(-1230));
