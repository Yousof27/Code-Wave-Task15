/*

Task 1:
-------
Modify Array Elements & Length
Instructions:
    Create an array of fruits (e.g., ["apple", "banana", "orange"]).
    Use the following methods and log the updated array after each operation:
    push() to add a new fruit.
    pop() to remove the last fruit.
    shift() to remove the first fruit.
    unshift() to add a new fruit to the beginning of the array.

*/

// let arr = ["Apple", "Banana", "Orange"];

// console.log(`Array without any modifying`, arr);
// console.log('');

// // push()
// arr.push("Watermelon");
// console.log(`1- Using push("Watermelon")`, arr);
// console.log('');

// // pop()
// arr.pop();
// console.log(`2- Using pop("")`, arr);
// console.log('');

// // shift()
// arr.shift();
// console.log(`3- Using shift("")`, arr);
// console.log('');

// // unshift()
// arr.unshift("Watermelon", "Apple");
// console.log(`4- Using unshift("Watermelon", "Apple")`, arr);
// console.log('');


////////////////////////////////////////////////////
////////////////////////////////////////////////////




/*

Task 2:
-------
Filter and Map Array Elements
Instructions:
    Create an array of numbers (e.g., [1, 2, 3, 4, 5, 6]).
    Use filter() to create a new array containing only even numbers.
    Use map() on the filtered array to calculate the square of each number.
    Log both the filtered array and the mapped array.

*/

let arr = [1, 2, 3, 4, 5, 6];

console.log(`Array without any modifying:`);
console.log(arr);
console.log('');

// filter()
let newArray = arr.filter(e => e % 2 === 0);

console.log("1- Array After Filtering even numbers:");
console.log(newArray);
console.log('');

// map()
newArray = newArray.map(e => e ** 2);

console.log("2- Using map() on The Filtered Array To Square The Numbers Inside It:");
console.log(newArray);

