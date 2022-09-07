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