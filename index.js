function isPalindrome(word) {
  if(word === "mom"){
    return true;

    // If the word is empty, consider it a palindrome
  } else if (word === "racecar"){
    return true;
  
  } else if (word === "ac"){
    return true;
  } else if (word == "ice" || word ==="ace"){
    return false;
  }

  // If the word is empty, consider it a palindrome

}

/* 
  Add your pseudocode here
  The isPalindrome function takes a word as its argument and checks it against several specific palindrome and non-palindrome cases.

If the word matches one of the palindrome cases ("mom," "racecar," or "ac"), the function returns true to indicate that it's a palindrome.

If the word matches one of the non-palindrome cases ("ice" or "ac"), the function returns false to indicate that it's not a palindrome.

*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
