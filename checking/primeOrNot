function checkPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const num = 99;
if (checkPrime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is a composite number.`);
}
