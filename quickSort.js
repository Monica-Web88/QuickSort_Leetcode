/**
 * @param {number[]} nums
 * @return {number[]}
 */

 function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}

var sortArray = function(arr) {

    // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = sortArray(arr.slice(0, mid))
  let right = sortArray(arr.slice(mid))
  return merge(left, right)
    
};
