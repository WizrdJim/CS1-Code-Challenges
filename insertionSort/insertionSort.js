/**
 * Insertion sort is a basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * https://en.wikipedia.org/wiki/Insertion_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms#insertion-sort
 **/

// Example usage:
// insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]

const insertionSort = (array) => {
   var length = array.length;
  for(var i = 1; i < length; ++i) {
    var temp = array[i];
    var j = i - 1;
    for(; j >= 0 && array[j] > temp; --j) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
};