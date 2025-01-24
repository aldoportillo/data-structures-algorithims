function threeNumberSum(array, targetSum) {
    let sorted = array.sort((a, b) => a - b);
  
    console.log(sorted);
    let triplets = [];
  
    for (let i = 0; i < sorted.length - 2; i++) {
      let leftPointer = i + 1;
      let rightPointer = sorted.length - 1;
  
      while (leftPointer < rightPointer) {
        let sum = sorted[leftPointer] + sorted[rightPointer] + sorted[i];
        
         if (sum < targetSum) {
          //move left pointer to the right for greater sum
          leftPointer++;
        } else if (sum > targetSum) {
          //move right pointer to left for lesser sum
          rightPointer--;
        } else {

          triplets.push([sorted[i], sorted[leftPointer], sorted[rightPointer]]);
          leftPointer++;
        }
      }
    }
    return triplets;
  }
  

//threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0); // Expected Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

console.log(threeNumberSum([-1, 0, 1, 2, -1, -4], 0)); // Expected Output: [[-1, 0, 1], [-1, -1, 2]]