const strStr = (hayStack, needle) => {
  if (hayStack.includes(needle)) {
    return hayStack.indexOf(needle);
  }
  return -1;
};

console.log(strStr("butsad", "sad"));
console.log(strStr("leetcode", "leeto"));
