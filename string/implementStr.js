function strStr(haystack, needle) {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (needleLength === 0) {
    return 0; //* Empty needle, first occurrence is at index 0
  }

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (haystack.slice(i, i + needleLength) === needle) {
      return i; //* Found the first occurrence of needle, return the index
    }
  }

  return -1; //* Needle not found in haystack
}

// Test cases
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
