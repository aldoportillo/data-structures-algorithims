/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum.
*/

// Sample Input:
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Sample Output:
// [-1, 11]

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function twoNumberSum(array, targetSum) {
    
    for (let i = 0; i < array.length; i++) {
        let firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
        let secondNum = array[j];
        if (firstNum + secondNum === targetSum) {
            return [firstNum, secondNum];
        }
        }
    }
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Solution 2: Hash Table
// Time Complexity: O(n)
// Space Complexity: O(n)

function twoNumberSum(array, targetSum) {
    let nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
        console.log(nums);
    }
    
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));