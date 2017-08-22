/**
* Longest Run
* Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
* If there are two runs of equal length, return the first one. Return [0,0] for no runs.
* Examples: 
* Input: "abbbcc"	Output: [ 1, 3 ]
* Input: "mississippi" Output: [ 2, 3 ]
* Input: "abcdefgh" Output: [ 0, 0 ]
* Input: "aabbbcccc" Output: [ 5, 4 ]
*/

const longestRun = (string) => {
  const input = string;
  let curr = [0,0];
  let max = [0,0];
  let compare = input.charAt(0);
  lrObj = {};
  //loop through the string
  for (let i = 1; i < input.length; i++) {
    if (input[i -1] === input[i]) {
      curr[1] = i;
      if (curr[1] - curr[0] > max[1] - max[0]){
        max = curr;
      }
    } else curr = [i, i];
  }
  return max;
}