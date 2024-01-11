var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false; //! If lengths are different, they cannot be anagrams
  }

  const charCountS = {}; //! Hash map to count characters in string s
  const charCountT = {}; //! Hash map to count characters in string t

  //! Count occurrences of characters in string s
  for (let char of s) {
    charCountS[char] = (charCountS[char] || 0) + 1;
  }

  //! Count occurrences of characters in string t
  for (let char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  //! Compare character counts in both strings
  for (let key in charCountT) {
    if (charCountS[key] !== charCountT[key]) {
      return false; //! If counts don't match, they are not anagrams
    }
  }

  return true; //! If all characters and counts match, they are anagrams
};

console.log(isAnagram("ratt", "raat"));

//* to get the keys
// const keys = Object.keys(charCountT);
// console.log(keys);
