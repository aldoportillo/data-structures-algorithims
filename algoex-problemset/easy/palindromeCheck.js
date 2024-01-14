//Palindrome Check
// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.    
// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.    


//Sample Input: "abcdcba"
//Sample Output: true

//Solution 1: Two Pointers
//O(n) time | O(1) space

function isPalindrome(string) {
  
    let count = 0;
    let leftPointer = 0
    let rightPointer = string.length - 1

    while (leftPointer < rightPointer){
      if (string[leftPointer] === string[rightPointer]){
        count++
      }
      leftPointer++
      rightPointer--
    }

    return count == leftPointer
}