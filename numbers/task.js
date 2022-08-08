'use strict';
/**
 * Task1
 * Sum numbers from visitor
 */
// let num1 = +prompt("enter 1st number: ",);
// let num2 = +prompt("endter 2nd number: ",);
// alert(num1 + num2);

/**
 * Task2
 * A random number from min to max
 */

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));

/**
 * Task3
 * A random integer from min to max
 */

function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randomInteger(1, 5));