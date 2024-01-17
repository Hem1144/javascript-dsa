class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  //! Move the fast pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  //! Move both pointers until the fast pointer reaches the end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  //! Remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next; //! Return the updated head
}

//! Example usage:
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

const result1 = removeNthFromEnd(head1, 2);
console.log(result1); //! Output: [1,2,3,5]

const head2 = new ListNode(1);
head2.next = new ListNode(2);

const result2 = removeNthFromEnd(head2, 1);
console.log(result2); //! Output: [1]
