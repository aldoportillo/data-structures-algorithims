// Missing Number (Easy)
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
// Example 1:
// Input: [3,0,1]

// var missingNumber = function(nums) {

//     let sorted = nums.sort((a,b) => a - b);

//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i] !== i) {
//             return i
//         }
//     }


//     return sorted.length
    
// };

var missingNumber = function(nums) {

    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = true;
    }
    
    for (let i = 0; i <= nums.length; i++) {
        if (!hash[i]) {
            return i;
        }
    }

    
};

console.log(missingNumber([3,0,1]))