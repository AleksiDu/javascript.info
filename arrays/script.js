"use strict";

/**
 * Declaration
 */

// There are two syntaxes for creating an empty array:

let arr = new Array();
arr = [];

let fruits = ["Apple", "Orange", "Plum"];

// We can get an element by its number in square brackets:

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

/**
 * Get last element with "at"
 */

console.log("last elemet =>", fruits[fruits.length - 1]);
// same as fruits[fruits.length-1]
console.log("last element with 'at'=>", fruits.at(-1));

// In the other words, arr.at(i):
// * is exactly same as arr[i], if i>=0.
// * for negative values of i, it steps back from the end of the array