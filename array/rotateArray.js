var rotate = function(nums, k) {
  k = k % nums.length; 

  let slicedVal = nums.slice(nums.length - k); 

  nums.splice(nums.length - k, k);
  nums.splice(0, 0, ...slicedVal);
  return nums; 
};
