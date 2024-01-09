const validatePalindrome = (args) => {
  let reverseArgs = args.toString().split("").reverse().join("");
  let orgArgs = args.toString();

  if (reverseArgs !== orgArgs) {
    return false;
  } else {
    return true;
  }
};

console.log(validatePalindrome("madam"));
