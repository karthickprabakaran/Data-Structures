// HACK:  Linked List problems

// HACK: 1. Reverse an Linked List

// NOTE: there are Two Approaches, recursvie and iterative;

// NOTE: recursive

// NOTE: Iterative

var reverseList = function (head) {
  if (head == null || head.next == null) return head;

  let prev = null;
  let current = head;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
