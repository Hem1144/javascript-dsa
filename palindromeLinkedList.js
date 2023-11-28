class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const isPalindrome = function (head) {
  //! Helper function to reverse a linked list
  const reverseList = function (node) {
    let prev = null;
    let curr = node;
    while (curr !== null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  };

  //! Helper function to compare two linked lists
  const isEqual = function (list1, list2) {
    while (list1 !== null && list2 !== null) {
      if (list1.val !== list2.val) {
        return false;
      }
      list1 = list1.next;
      list2 = list2.next;
    }
    return true;
  };

  if (!head || !head.next) {
    //! Empty or single-node list is considered a palindrome
    return true;
  }

  //! Find the middle of the linked list using the slow and fast pointers
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //! Reverse the second half of the linked list
  let reversedSecondHalf = reverseList(slow);

  //! Compare the first half with the reversed second half
  return isEqual(head, reversedSecondHalf);
};

//! Example
let list1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(list1));

let list2 = new ListNode(1, new ListNode(2));
console.log(isPalindrome(list2));
