//Bubble Sort

//Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array. 

//Solution #1 Recursive Approach
//Best: O(n) time | O(n) space
//Average: O(n^2) time | O(n) space
//Worst: O(n^2) time | O(n) space

function bubbleSort(array) {
    let swaps = 0;
  
    for (let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]){
          let temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
          swaps++
        }
      }
    
    return swaps === 0 ? array : bubbleSort(array);
  }
  