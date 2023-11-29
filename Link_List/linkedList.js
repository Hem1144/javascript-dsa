const reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

let head1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
console.log(reverseList(head1));
