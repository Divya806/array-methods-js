//some()
//Tests whether at least one element in the array passes the test implemented by the provided function
// it returns true if any element passes the test, otherwise it returns false.

const numbers = [1, 2,3, 4,5 ];
const hasEvenNumber = numbers.some(
    (num)=> num%2 ===0);
console.log(hasEvenNumber);