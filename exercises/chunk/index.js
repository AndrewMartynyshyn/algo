// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let iterator = 1;
  let tempSmallArr = [];

  for (let index = 0; index <= array.length; index++) {
    if (iterator <= size && index < array.length) {
      tempSmallArr.push(array[index]);
      iterator++;
    } else if (index < array.length) {
      chunked.push(tempSmallArr);
      iterator = 2;
      tempSmallArr = [array[index]];
    } else {
      chunked.push(tempSmallArr);
    }
  }

  return chunked;
}

module.exports = chunk;
