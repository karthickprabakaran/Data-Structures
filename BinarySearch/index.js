// HACK: Binary Search Problems

// HACK: minimum in Rotated Sorted Array

// NOTE: Optimal Code:

var findMin = function (nums) {
  // Initialize two pointers
  // left → start of array, right → end of array
  let left = 0;
  let right = nums.length - 1;

  // Continue searching while the range has more than one element
  while (left < right) {
    // Find the middle index (binary search midpoint)
    let mid = Math.floor((left + right) / 2);

    // Compare the middle element with the rightmost element
    // This tells us which side is unsorted (the rotation point)
    if (nums[mid] > nums[right]) {
      // Case 1: mid element is greater than right element
      // → the minimum must be in the *right* half
      left = mid + 1;
    } else {
      // Case 2: mid element is smaller (or equal) to right element
      // → the minimum is in the *left* half (including mid)
      right = mid;
    }
  }

  // When left == right, both point to the smallest element
  return nums[left];
};

// HACK: Search in  Rotated Sorted Array

// NOTE: Optimal: Using the binary Search technique

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
