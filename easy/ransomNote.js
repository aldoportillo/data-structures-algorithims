// Ransom Note
// Difficulty: Easy
//
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
//
// Each letter in magazine can only be used once in ransomNote.
//
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

var canConstruct = function(ransomNote, magazine) {

    let letters = {};

    for(let i = 0; i < magazine.length; i++){
        if (letters[magazine[i]]){
            letters[magazine[i]] += 1;
        } else {
            letters[magazine[i]] = 1;
        }
    }
    console.log(letters)

    for(let i = 0; i < ransomNote.length; i++){
        if (letters[ransomNote[i]]){
            letters[ransomNote[i]] -= 1
        } else {
            return false
        }
        console.log(letters)
    }

    return true
};

console.log(canConstruct("abcd", "abbac"))