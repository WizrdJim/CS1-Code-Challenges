/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  const ret = Array.from(arr);
  let minIndex;
  for (let i = 0; i < ret.length; ++i) {
    minIndex= i;
    for (let j = i; j < ret.length; ++j) {
        if (ret[j] < ret[minIndex]) {
          minIndex= j;
        }
    }
    [ret[i], ret[minIndex]] = [ret[minIndex], ret[i]];
  }
  return ret;
};