function isPrime(number) {
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

function filterPrimes(numbers) {
  return numbers.filter(isPrime);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimes(inputArray);

console.log(primeNumbers);
