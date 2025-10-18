var characterReplacement = function (s, k) {
  let n = s.length;
  let left = 0;
  let maxf = 0; // max frequency of any char in current window
  let maxLen = 0;
  let hash = new Array(26).fill(0);

  for (let right = 0; right < n; right++) {
    // Increment the frequency of the current character
    let idx = s[right].charCodeAt(0) - 65;
    hash[idx]++;
    maxf = Math.max(maxf, hash[idx]);

    // Shrink window if more than k replacements needed
    while (right - left + 1 - maxf > k) {
      let leftIdx = s[left].charCodeAt(0) - 65;
      hash[leftIdx]--;
      left++;
    }

    // Update max length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
