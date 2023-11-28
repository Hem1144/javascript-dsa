// "hello" =>"loehl"
//! length check for both Strings
//! check every letter {h:1,e:1:l:2,o:1}

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let counter = {};
//   for (let letter of str1) {
//     counter[letter] = (counter[letter] || 0) + 1;
//   }

//   for (items of str2) {
//     if (!counter[items]) {
//       return false;
//     }
//     counter[items] -= 1;
//   }
//   return true;
// }

// console.log(isAnagram("hello", "lehlo"));

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// var deleteNode = function (node) {
//   node.val = node.next.val;
//   node.next = node.next.next;
// };

// // Create nodes
// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);

// // Connect nodes
// node1.next = node2;
// node2.next = node3;

// // Before deletion: 1 -> 2 -> 3
// deleteNode(node2);

// // After deletion: 1 -> 3

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// var deleteNode = function (node) {
//   if (node == null || node.next == null) {
//     return; // Cannot delete the last node or null node
//   }

//   // Copy the value of the next node to the current node
//   node.val = node.next.val;

//   // Remove the next node
//   node.next = node.next.next;
// };

// // Example 1
// const head1 = new ListNode(4);
// head1.next = new ListNode(5);
// head1.next.next = new ListNode(1);
// head1.next.next.next = new ListNode(9);

// console.log("Before deletion:", printList(head1)); // Before deletion: 4 -> 5 -> 1 -> 9
// deleteNode(head1.next); // Deleting node with value 5
// console.log("After deletion:", printList(head1)); // After deletion: 4 -> 1 -> 9

// // Example 2
// const head2 = new ListNode(4);
// head2.next = new ListNode(5);
// head2.next.next = new ListNode(1);
// head2.next.next.next = new ListNode(9);

// console.log("Before deletion:", printList(head2)); // Before deletion: 4 -> 5 -> 1 -> 9
// deleteNode(head2.next.next); // Deleting node with value 1
// console.log("After deletion:", printList(head2)); // After deletion: 4 -> 5 -> 9

// // Function to print the linked list for testing
// function printList(head) {
//   let result = [];
//   let current = head;
//   while (current !== null) {
//     result.push(current.val);
//     current = current.next;
//   }
//   return result.join(" -> ");
// }

//!  Remove Nth Node From End of List
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function (head, n) {
  // Create a dummy node to simplify edge cases
  const dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Move fast pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next; // Return the modified head
};

// Example 1
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

console.log("Example 1:");
console.log("Before:", printList(head1)); // Before: 1 -> 2 -> 3 -> 4 -> 5
const result1 = removeNthFromEnd(head1, 2);
console.log("After:", printList(result1)); // After: 1 -> 2 -> 3 -> 5

// Example 2
const head2 = new ListNode(1);

console.log("\nExample 2:");
console.log("Before:", printList(head2)); // Before: 1
const result2 = removeNthFromEnd(head2, 1);
console.log("After:", printList(result2)); // After: []

// Example 3
const head3 = new ListNode(1);
head3.next = new ListNode(2);

console.log("\nExample 3:");
console.log("Before:", printList(head3)); // Before: 1 -> 2
const result3 = removeNthFromEnd(head3, 1);
console.log("After:", printList(result3)); // After: 1

// Function to print the linked list for testing
function printList(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result.join(" -> ");
}
