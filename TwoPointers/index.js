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

// HACK: 2. 3 sum

// NOTE: Brute: using the Thrree inner loops thing

var threeSum = function (nums) {
  const n = nums.length;
  const res = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          res.add(triplet.toString()); // store as string to avoid duplicates
        }
      }
    }
  }

  // Convert back to array of numbers
  return Array.from(res).map((s) => s.split(",").map(Number));
};

// NOTE: Optimal : using the two pointer technique

var threeSum = function (nums) {
  let n = nums.length;

  nums.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    if (i > 0 && nums[i] == nums[i - 1]) continue;

    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        left++;
        right++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};

// HACK: 3. Container with most Water:

// NOTE: Brute : generating all the possible containers

var maxArea = function (height) {
  let n = height.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let curr = Math.max(height[i], height[j]) * (j - i);
      max = Math.max(curr, max);
    }
  }
};

// NOTE: Optimal : Two Pointers

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let max = 0;

  while (left < right) {
    let curr = Mat.min(height[left], height[right]) * (right - left);
    if (curr > max) max = current;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
