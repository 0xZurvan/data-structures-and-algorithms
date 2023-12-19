/* eslint-disable no-console */
import { numbers, words } from './arrays'

// Bubble sort
// Definition: It compares the element next to each other and swap them to
// the correct position from the smallest to the largest element
function bubbleSort<T>(array: T[]): T[] {
  const sortedArray = array

  for (let i = 0; i < sortedArray.length - 1; ++i) {
    for (let j = 0; j < sortedArray.length - 1 - i; ++j) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        // Swap elements
        const first = sortedArray[j]
        sortedArray[j] = sortedArray[j + 1]
        sortedArray[j + 1] = first
      }
    }
  }

  return sortedArray
}

const bubbleSortedNumber = bubbleSort<number>(numbers)
const bubbleSortedString = bubbleSort<string>(words)
console.log('bubbleSortedNumber:', bubbleSortedNumber)
console.log('bubbleSortedString:', bubbleSortedString)

// Insertion sort
// Definition: Insertion sort is a sorting algorithm that places an unsorted element
// at its correct place in each iteration.

function insertionSort<T>(array: T[]): T[] {
  const sortedArray = array
  for (let k = 2; k < sortedArray.length; ++k) {
    const key = array[k]
    let index = k - 1

    // Shifts all the larger values to the right.
    while (index > 0 && sortedArray[index] > key) {
     sortedArray[index + 1] = sortedArray[index]
      index = index - 1
    }

    // Places the key in its correct place once all the larger values
    // are shifts to the right
   sortedArray[index + 1] = key
  }

  return sortedArray
}

const insertionSortNumber = insertionSort<number>(numbers)
const insertionSortString = insertionSort<string>(words)
console.log('insertionSortNumber:', insertionSortNumber)
console.log('insertionSortString:', insertionSortString)