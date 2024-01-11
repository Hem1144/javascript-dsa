function myAtoi(s) {
  //* Step 1: Read in and ignore any leading whitespace
  let index = 0;
  while (s[index] === " ") {
    index++;
  }

  //* Step 2: Check for '+' or '-' to determine sign
  let sign = 1;
  if (s[index] === "+" || s[index] === "-") {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }

  //* Step 3: Read in characters until the next non-digit character or end of input
  let result = 0;
  while (index < s.length && /\d/.test(s[index])) {
    result = result * 10 + parseInt(s[index], 10);
    index++;
  }

  //* Step 4: Apply sign to the result
  result *= sign;

  //* Step 5: Clamp the result to the 32-bit signed integer range
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  if (result > INT_MAX) {
    return INT_MAX;
  } else if (result < INT_MIN) {
    return INT_MIN;
  } else {
    return result;
  }
}

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
