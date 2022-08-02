"use strict";

/**
 * More ways to write a number
 */

let billion = 1000000000;
console.log("billion ==>", billion);
billion = 1_000_000_000;
console.log("billion with separator ==>", billion);

billion = 1e9; // 1billion, literally: 1 and 9 zeroes
console.log("billion 1e9 ==>", billion);

console.log(1e3 === 1 * 1000); // e3 means * 1000
console.log(1.23e6 === 1.23 * 1000000); // e6 means * 1000000

// Now something very small, 1 microsecond (one millionth of a second):

let mcs = 0.000001
console.log("mcs ===>", mcs);
mcs = 1e-6; // five zeroes to the left from 1
console.log("mcs 1e-6 ==>", mcs);

// -3 divides by 1 with 3 zeroes
console.log(1e-3 === 1 / 1000); // 0.001
// -6 divides by 1 with 6 zeroes
console.log(1.23e-6 === 1.23 / 1000000); // 0.00000123
// an example with a bigger number
console.log(1234e-2 === 1234 / 100); //12.34, decimal point  moves 2 times

/**
 * Hex, binary and octal numbers
 */

console.log("Hexadecumal ===>", 0xff); //255;
console.log("Hexadecimal upper case ==>", 0xFF); // 255 (the same, case doesn't matter)

let a = 0b11111111; // nimary form of 255
let b = 0o377; // octal form of 255

console.log(a === b); //ture, the same number 255 at both saides

/**
 * toString(base)
 * The method num.toString(base) returns a string representation of num in the numeral system with the given base.
 */

let num = 255;
console.log("num 16 to string =>", num.toString(16)); //ff
console.log("num 2 to string =>", num.toString(2)); // 11111111

// base 36.
console.log(123456..toString(36)); //2n9c
// Two dots to call a method not a typo

/**
 * Rounding
 */
// 1. Multyply-and-divide
num = 1.23456;
console.log(Math.round(num * 100) / 100); //1.23456 -> 123.456 -> 123 ->1.23
// 2. method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
num = 12.34;
console.log(num.toFixed(1)); // "12.3"
// This rounds up or down to the nearest value, similar to Math.round:
num = 12.36;
console.log(num.toFixed(1)); // "12.4"
// Note that the result of toFixed is a string. if the decimal part is shorter than reqired, zeroes are appended to th end:
num = 12.34;
console.log(num.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits
// We can convert it to a number using a Number() call or +num.toFixed(5).

/**
 * Imprecise calculations
 * If a number is really huge, it may overflow the 64-bit storage and became a special numeric value Infinty:
 */
console.log(1e500); // Infinity

// Falsy! equality test:
console.log(0.1 + 0.2 == 0.3); // false
// Whats is  wrong?
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1.toFixed(20)); // 0.10000000000000000555
// Hello! I'm a self-increasing number!
console.log(9999999999999999);

/**
 * Two zeroes
 * 
Another funny consequence of the internal representation of numbers is the existence of two zeroes: 0 and -0.

That’s because a sign is represented by a single bit, so it can be set or not set for any number including a zero.

In most cases the distinction is unnoticeable, because operators are suited to treat them as the same.
 */

/**
 * Test: isFinite and isNaN
 * Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
 * NaN represents an error.
 */

// isNaN(value) converts its argument to a number and then test it for being NaN:
console.log(isNaN(NaN)); //true
console.log(isNaN("str")); // true
console.log(NaN === NaN); // false

// isFinite(value) converts its argument to a number and returns true if ti's a regular number, not NaN/Infinity/-Infinity
console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

