/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Sample Input:
array = [1, 2, 3, 5, 6, 8, 9]
Sample Output:
[1, 4, 9, 25, 36, 64, 81]
*/

// Solution 1: Brute Force
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)

function sortedSquaredArray(array) {
    
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] ** 2;
    }

    return array.sort((a, b) => a - b);
    
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));



// Solution 2: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(n)

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);

    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const smallerValue = array[smallerValueIdx];
        const largerValue = array[largerValueIdx];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[i] = smallerValue * smallerValue;
            smallerValueIdx++;
        } else {
            sortedSquares[i] = largerValue * largerValue;
            largerValueIdx--;
        }

    }
    return sortedSquares;
}

console.log(sortedSquaredArray([1, 2, 3,  5, 6, 8, 9,]));

