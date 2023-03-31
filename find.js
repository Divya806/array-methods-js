//find()
//Returns the value of the first element un the array that satisfies the provided testing function.
// otherwise, undefined is returned.

const numbers = [1, 2, 3 , 4, 5];
const foundNumber = numbers.find(num => num >3);
console.log(foundNumber);