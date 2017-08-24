/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */
const vowelCount = (string) => {
  const vowel = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1
  }
  let i = 0;
  let count = 0;
  for (i; i < string.length; i++){
    if (vowel.hasOwnProperty(string[i])) {
      count++
    }
  }
  return count;
}