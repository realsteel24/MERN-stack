/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.replace(/[\W_]/g,'').toLowerCase();
  strReverse = str.split("").reverse().join('').toLowerCase();
  if (str === strReverse) {
    return true; 
  }
  else {
    return false;
  }
}

console.log(isPalindrome("open ai"));
 module.exports = isPalindrome;
// Alternative
// function isPalindrome(str) {
//   str = str.replace(/[^\w\/]|_/g, "").toLowerCase();
//   let flag = true;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[str.length - 1 - i]) {
//       flag = true;
//     }
//     else {
//       return false;
//     }
//   }
//   if (flag === true) {
//     return true;
//   }
// }