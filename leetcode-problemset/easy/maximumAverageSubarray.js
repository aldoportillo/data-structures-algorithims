// Maximum Average Subarray I

// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
// And you need to output the maximum average value.

// Example 1:
// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75

// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

// Note:
// 1 <= k <= n <= 30,000.
// Elements of the given array will be in the range [-10,000, 10,000].

//Sliding Window Approach

var findMaxAverage = function(nums, k) {

    let sum = 0;

    for (let i = 0; i < k; i++){
        sum += nums[i]
    }

    let largest = sum

    for (let j = k; j < nums.length; j++){
        sum = sum + nums[j] - nums[j-k]

        largest = Math.max(largest, sum);
    }

    return largest/k

}


//Pointer Approach

var findMaxAverage = function(nums, k) {
    
    let largest = -Infinity

    for (let leftPointer = 0; leftPointer < nums.length; leftPointer++){

        let average = 0
        let rightPointer = leftPointer + k - 1

        if (rightPointer >= nums.length) return largest;
        
        while(leftPointer <= rightPointer){
            average += nums[rightPointer]
            rightPointer--
        }

        average /= k

        if (average > largest){
            largest = average
        }

    }

    return largest


};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))