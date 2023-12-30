/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  let counter = 0;
  let word1 = str1.toLowerCase();
  let word2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
  return false;
  }
  else {
    
    for (let i = 0; i < word1.length; i++ )
    if (word2.includes(word1[i])){
      counter++;
    }
  }
  if (counter === str1.length) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = isAnagram;

