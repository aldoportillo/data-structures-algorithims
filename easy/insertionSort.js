//Insertion Sort
//Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array. 
//Insertion sort is a sorting algorithm that works by iterating through the array, at each iteration shifting the element at the current index until it is in the correct place.

//Best: O(n) time | O(1) space
//Average: O(n^2) time | O(1) space
//Worst: O(n^2) time | O(1) space

//Sample Input: [8, 5, 2, 9, 5, 6, 3]
//Sample Output: [2, 3, 5, 5, 6, 8, 9]


function insertionSort(array) {
  
    for (let i = 1; i < array.length; i++){
      let updatedIndex = i
  
      while (array[updatedIndex] < array[updatedIndex - 1]){
        let temp = array[updatedIndex]
        array[updatedIndex] = array[updatedIndex - 1]
        array[updatedIndex - 1] = temp
        updatedIndex--
      }
    }
  
    console.log(array)
    return array
  }