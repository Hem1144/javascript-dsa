// function merge(nums1, m, nums2, n) {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }

//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
// }
// ``;

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// merge(nums1, m, nums2, n);
// console.log(nums1);

// function merge(arr1, arr2) {}

// let m = 3;
// let nums1 = [1, 2, 3, 0, 0, 0];
// let a = nums1.splice(0, nums1.length - m);
// console.log(a);

function mergeArray(arr1, m, arr2, n) {
  let ptr1 = m - 1;
  let ptr2 = n - 1;
  let ptr3 = m + n - 1;

  while (ptr2 > 0) {
    if (temp[ptr1] >= arr2[ptr2]) {
      arr1[ptr3] = temp[ptr1];
      ptr3--;
      ptr1--;
    } else if (temp[ptr1] < arr2[ptr2]) {
      arr1[ptr3] = arr2[ptr2];
      ptr3--;
      ptr2--;
    }
  }
  return arr1;
}

let nums1 = [1, 2, 3, 4, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

mergeArray(nums1, m, nums2, n);
console.log(nums1);
