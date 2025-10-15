// HACK: 1. Valid Palindrome

// NOTE: Brute - using the inbuilt methods

var isPalindrome = function (s) {
  let res = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

  let reversed = res.split("").reverse().join("");

  return reversed === res;
};

// NOTE: Optimal - using the two pointers

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!/[a-z0-9]/i.test(s[left])) {
      left++;
      continue;
    }
    if (!/[a-z0-9]/i.test(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() != s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
