// HACK: 1. Best time to Buy and Sell a Stock:

// NOTE: Brute : Checking for all the possible combinations

var maxProfit = function(prices) {
  let n = prices.length;

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let cur = prices[j] - prices[i];
      if (cur > max) max = cur;
    }
  }

  return max;
};

// NOTE: Optimal : Technicall an two pointer 


let n = prices.length;

let max = 0;
let currentLowest = prices[0];

for (let i = 0; i < n; i++) {
  if (prices[i] < currentLowest) currentLowest = prices[i];

  max = Math.max(max, prices[i] - currentLowest);
}

return max;
};


// HACK: 2. Longest Substring without Repeating Characters 

function lengthOfLongestSubstringBruteForce(s) {
  let maxLen = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (isUnique(s, i, j)) {
        maxLen = Math.max(maxLen, j - i);
      }
    }
  }

  return maxLen;
}

function isUnique(s, start, end) {
  const seen = new Set();
  for (let k = start; k < end; k++) {
    if (seen.has(s[k])) return false;
    seen.add(s[k]);
  }
  return true;
}

// NOTE: Optimal using the sliding window approach

var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return max;
};

// HACK: 3.  longest substring characte Replacement 



// NOTE: Brute force approach



var characterReplacement = function(s, k) {
  let n = s.length;

  let max = 0;

  for (let i = 0; i < n; i++) {
    let hash = new Array(26).fill(0);
    let maxf = 0;
    for (let j = i; j < n; j++) {
      let idx = s[j].charCodeAt(0) - "A".charCodeAt(0);
      hash[idx]++;
      maxf = Math.max(maxf, hash[idx]);
      if (j - i + 1 - maxf <= k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};

// NOTE: Optimal using the two pointers + sliding window;



var characterReplacement = function(s, k) {
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



// HACK: 4.  minimum winow substring


// NOTE: Bruteforce approach

var minWindow = function (s, t) {
  function containsAll(str) {
    let first = new Array(128).fill(0);
    let second = new Array(128).fill(0);

    for (let char of str) {
      first[char.charCodeAt(0)]++;
    }
    for (let char of t) {
      second[char.charCodeAt(0)]++;
    }

    for (let i = 0; i < first.length; i++) {
      if (first[i] < second[i]) {
        return false;
      }
    }

    return true;
  }

  let max = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let str = s.slice(i, j + 1);
      if (containsAll(str) && (max === "" || str.length < max.length)) {
        max = str;
      }
    }
  }

  return max;
};

// NOTE: Optimal 

var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    // Count characters in t
    const need = new Array(128).fill(0);
    for (let ch of t) {
        need[ch.charCodeAt(0)]++;
    }

    const have = new Array(128).fill(0);
    let left = 0, right = 0;
    let formed = 0;

    // Count how many unique characters in t we need to match
    let required = 0;
    for (let i = 0; i < 128; i++) {
        if (need[i] > 0) required++;
    }

    let minLen = Infinity, minStart = 0;

    while (right < s.length) {
        const rChar = s[right];
        have[rChar.charCodeAt(0)]++;

        // Check if current character meets required count
        if (have[rChar.charCodeAt(0)] === need[rChar.charCodeAt(0)]) {
            formed++;
        }

        // Shrink window from left while it's valid
        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            const lChar = s[left];
            have[lChar.charCodeAt(0)]--;
            if (have[lChar.charCodeAt(0)] < need[lChar.charCodeAt(0)]) {
                formed--;
            }
            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};


























