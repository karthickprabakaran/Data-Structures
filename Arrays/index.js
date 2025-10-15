// HACK: 5. Top K Frequent Elements

// NOTE: Brute:
var topKFrequent = function (nums, k) {
  let map = new Map();

  // Count frequencies
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Convert map to array of [num, freq] and sort by freq descending
  let freq = Array.from(map.entries());
  freq.sort((a, b) => b[1] - a[1]);

  // Take top k elements (the numbers themselves)
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(freq[i][0]);
  }

  return res;
};

// NOTE: Optimal:

var topKFrequent = function (nums, k) {
  let map = new Map();

  // Count frequencies
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Initialize buckets: index = frequency
  let count = new Array(nums.length + 1).fill(0).map(() => []);

  for (let [num, freq] of map.entries()) {
    count[freq].push(num);
  }

  // Collect top k frequent elements
  let res = [];
  for (let i = nums.length; i >= 0 && res.length < k; i--) {
    if (count[i].length > 0) {
      res.push(...count[i]);
    }
  }

  return res.slice(0, k); // Just in case we added extra elements
};

// HACK: 6. Encode and Decode Strings

// NOTE: using only the # as the delimete

class Solution {
  // Function to encode a list of strings to a single string.
  encode(s) {
    // your code here

    let encoded = "";

    for (let str of s) {
      encoded += "#";
      encoded += str;
    }

    return encoded;
  }

  // Function to decode a single string to a list of strings.
  decode(s) {
    // your code here

    let arr = s.split("#");
    return arr;
  }
}

// NOTE: sol which handles the edge cases

class Solution {
  // Function to encode a list of strings to a single string.
  encode(s) {
    // your code here

    let encoded = "";

    for (let str of s) {
      encoded += str.length;
      encoded += "#";
      encoded += str;
    }

    return encoded;
  }

  // Function to decode a single string to a list of strings.
  decode(s) {
    // your code here

    let arr = [];
    let i = 0;

    while (i < s.length) {
      let j = i;

      while (s[j] != "#") {
        j++;
      }

      let length = parseInt(s.slice(i, j));

      let word = s.slice(j + 1, j + 1 + length);

      arr.push(word);

      i = j + 1 + length;
    }
    return arr;
  }
}
