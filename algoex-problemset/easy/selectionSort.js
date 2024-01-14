//Selection Sort
//Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.   
//Selection sort works by iterating through the array, finding the minimum value, and moving it to the beginning of the array. Then, ignoring the first position, which is now sorted, iterate through the array again to find the next minimum value and move it to index 1. This continues until all values are sorted.   

//Best: O(n^2) time | O(1) space
//Average: O(n^2) time | O(1) space 
//Worst: O(n^2) time | O(1) space

//Sample Input: [8, 5, 2, 9, 5, 6, 3]
//Sample Output: [2, 3, 5, 5, 6, 8, 9]

//Solution 1

function selectionSort(array) {

    let smallestIndex = 0
    let sublistLength = 0
  
    while (sublistLength !== array.length){
      for (let i = sublistLength; i < array.length; i++){
        if(array[smallestIndex] > array[i]){
          smallestIndex = i
        } 
      }
  
      let temp = array[smallestIndex]
      array[smallestIndex] = array[sublistLength]
      array[sublistLength] = temp
      
      sublistLength++
      smallestIndex = sublistLength
    }  
  
    return array
  }