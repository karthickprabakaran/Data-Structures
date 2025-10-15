/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!/[a - zA - Z0 - 9]/i.test(s[left])) left++;
    if (!/[a - zA - Z0 - 9]/i.test(s[right])) right--;

    if (s[left].toLowerCase() != s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};
