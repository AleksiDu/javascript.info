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

/**
 * Methods pop/push, shift /unshift
 * push - appends an element to the end
 * shift - get an element from the beginning, advancing the quere, so that the 2nd element becomes the 1st.
 * push - adds an element to the end.
 * pop - takes an element from the end.
 */

// pop
console.log(fruits.pop()); // remove "Pear" and log it
console.log(fruits);  // Apple, Orange

// push
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear

// shift
console.log(fruits.shift()); // remove Apple and log it
console.log(fruits); // Orange, Pear

// unshift
fruits.unshift('Apple');
console.log(fruits); // Apple, ORange, Pear
// Methods push and unshift can add multiple elements at once

/**
 * Internals
 */

fruits = ["Bannaba"];

arr = fruits; // copy by reference (two variables reference the same array)
console.log(arr === fruits); //true

arr.push("Pear"); // modify the array by reference
console.log(fruits); // Banana, Pear - 2 items now

fruits = [];
fruits[99] = 5;
fruits.age = 25;
console.log(fruits);