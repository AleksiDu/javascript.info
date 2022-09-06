"use strict";

/**
 * Task1.
 */

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shopingCart = fruits;
shopingCart.push("Banana");

// what's in fruits?
console.log(fruits.length);

/**
 * Task2
 * Array operations
 */

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
styles.shift();

console.log(styles);

styles.unshift("Rap", "Raggae");
console.log(styles);

/**
 * Task3
 * Calling in array context
 */

let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
})

arr[2]();

/**
 * Task4
 * Sum inputs numbers
 */
function sumInput() {
    let numbers = [];

    while (true) {
        let userInput = prompt("enter the values", 0);
        if (typeof (userInput) != Number || userInput === "" || userInput === null) break;

        userInput.push(+userInput);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sumInput());
