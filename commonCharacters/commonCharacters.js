/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

const commonChars = (str1, str2) => {
  const primaryString = str1.split('');
  const secondaryString = str2.split('');
  const primarySet = new Set(primaryString);

  const result = secondaryString.map((char) => {
    if (primarySet.has(char)) {
      return char;
    }
  })
  return result;
}