// Slice()
//  Returns a shallow copy of a portion of an array into a new array object selected from start to end .
// the original array willnot be modifed.

const numbers = [1, 2, 3, 4, 5];

const sliceNumbers = numbers.slice(0,2);
console.log(sliceNumbers);