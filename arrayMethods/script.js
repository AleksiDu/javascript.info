"use strict";

/**
 * Add/remove items
 */

// spluce
// The arrays are objects, so we can try to use delete:

let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
console.log(arr[1]); // undefined

console.log(arr); // now arr = ["I", , "home"];
console.log(arr.length);

// deletion:
arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 lement
console.log("deletion =>>>", arr);

// replace:
arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first element and replace them with another
arr.splice(0, 3, "Let's", "dance");
console.log("replace =>>", arr); // now ["Let's", "dance", "right", "now"]

// return removed element:
arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);
console.log(removed); // "I", "study" <---- array of removed elements

// insert:

arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then isert "complex" and "language"

arr.splice(2, 0, "complex", "language");
console.log(arr); // "I", "study", "complex", "language", "JavaScript"

// Negative indexes allowed

arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then isert 3 and 4

arr.splice(-1, 0, 3, 4);
console.log("negative index -->", arr);

// slice
// the method arr.slice is returns a new array copyng to it all items from index start to end.
// Both start and end can be negative, in that case position from array end is assumed.
// It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

arr = ["t", "e", "s", "t"];

console.log(arr.slice(1, 3)); // e, s (copy from 1 to 3)
console.log(arr.slice(-2)); // s, t (copy from -2 till the end)

// concat
// The method arr.comcat creates a new array that includes value from other arrays and additional items

arr = [1, 2];

// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1, 2, 3, 4
// create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

arr = [1, 2]
let arrayLike = {
    0: "something",
    length: 1
};

console.log(arr.concat(arrayLike)); // 1, 2, [object Object]

// But if an array-like object has a special Symbol.isConcatSpreadable property, 
// then it’s treated as an array by concat: its elements are added instead:
arr = [1, 2];

arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr.concat(arrayLike)); // 1, 2, something, else

/**
 * Iterate: forEach
 * The arr.forEach method allows to run a function for every element of the array.
 */

// for each element call console.log

["Bilbo", "Gandalf", "Mazgul"].forEach(console.log);

["Bilbo", "Gandalf", "Mazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
})
// The result of the function (if it returns any) is thrown away and ignored

/**
 * Search in array
 */

// indexOf/lastIndexOf and includes

// arr.indexOf(item, from) - looks for item starting from index from, and returns the index where it was gound, ptherwise -1
// arr.includes(item, from) - looks for item starting from index from, return true if found

arr = [1, 0, false];

console.log(arr.indexOf(0)); //1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

let result = arr.find(function (item, index, array) {
    // if true is returned, item is returned and ireation is stopped
    // for falsy scenario returns undefined
});

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];


let user = users.find(item => item.id == 1);

console.log(user.name);

// fileter

result = arr.filter(function (item, index, array) {
    // if true item is pushed to results and the iteration continiues
    // returns emty array if nothing found
});

users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

/**
 * Transform an array
 */

//map

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

// sort(fn)

arr = [1, 2, 15];

// the method records the content of arr

arr.sort();

console.log(arr); // 1, 15, 2

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);
    return a - b;
});

arr = [1, 2, 15];

arr.sort(function (a, b) { return a - b; });

console.log(arr);  // 1, 2, 15

// reverse

arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr); // 5,4,3,2,1

// split and join 

let names = 'Bilbo, Gandalf, Nazgul';

arr = names.split(', ');

for (let name of arr) {
    console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

console.log(str); // Bilbo;Gandalf;Nazgu

// reduce/reduceRight

arr = [1, 2, 3, 4, 5];

result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15