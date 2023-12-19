/* eslint-disable no-console */
const words: string[] = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js', 'HTML', 'CSS', 'API', 'Database']
const numbers: number[] = [1, 10, 42, 3, 7, 100, 2023, 14, 23]

// Binary search
function binarySearch<T>(array: T[], target: T): number | 'Not found' {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    const position = Math.floor((low + high) / 2)

    if (array[position] === target)
      return position

    else if (array[position] < target)
      low = position + 1

    else
      high = position - 1
  }

  return 'Not found'
}

const sortedWords = words.slice().sort()
const wordIndex = binarySearch<string>(sortedWords, 'Vue')
console.log('wordIndex:', wordIndex)


// Interpolation search
function interpolationSearch(array: number[], target: number): number | 'Not found' {
  let low = 0
  let high = array.length - 1

  while (low <= high && target >= array[low] && target <= array[high]) {
    const position = Math.floor(low + ((target - array[low]) * (high - low)) / (array[high] - array[low]))
    if (array[position] < target)
      low = position + 1

    else if (array[position] > target)
      high = position - 1

    else
      return position
  }

  return 'Not found'
}

const sortedNumber = numbers.sort((x, z) => x - z)
const numberIndex = interpolationSearch(sortedNumber, 10)
console.log('numberIndex', numberIndex)
