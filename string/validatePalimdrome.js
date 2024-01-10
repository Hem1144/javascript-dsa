function isPalindrome(s) {
  //! Remove non-alphanumeric characters and convert to lowercase
  const formattedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  //* alternative method
  // const reverseString = formattedString.split("").reverse().join("");

  //! Check if the formattedString is a palindrome
  let left = 0;
  let right = formattedString.length - 1;

  while (left < right) {
    if (formattedString[left] !== formattedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(" "));
