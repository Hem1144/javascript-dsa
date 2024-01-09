const firstUniqChar = function (s) {
  const charCount = {};

  //* Count occurrences of each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //* Find the index of the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  return -1; //* If no non-repeating character found
};

console.log(firstUniqChar("loveleetcode"));
