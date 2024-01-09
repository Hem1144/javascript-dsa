const reverseInteger = (x) => {
  if (x === 0) {
    return 0;
  }

  const limit = 2 ** 31;

  let reverseNum = x.toString().split("").reverse().join("");

  if (reverseNum.endsWith("-")) {
    reverseNum = "-" + reverseNum.slice(0, -1);
  } else if (reverseNum.endsWith("0")) {
    reverseNum = reverseNum.slice(0, -1);
  }

  if (reverseNum > limit - 1 || reverseNum < -limit) {
    return 0;
  } else {
    return parseInt(reverseNum);
  }
};

console.log(reverseInteger(-1230));
