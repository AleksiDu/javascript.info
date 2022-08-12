"use strict";

/**
 * Quotes
 */

// Strings can be enclosed within either single quotes, double quotes or backticks:

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

// backticks, allow us to embed ("ჩასმა") any expression into the string, by wrapping in it ${...}:

function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
* John
* Pete
* Mary
`;
console.log(guestList); // a list of guests, multiple lines

/**
 * Special characters
 */

guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log("guestList with '\\n'", guestList);

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2);

// Unicode:
console.log(">>>Unicode<<<");
console.log("\u00A9"); // ©
console.log("\u{20331}"); // 佫, a rare Chinese hieroglyph (long Unicode)
console.log("\u{1F60D}"); // 😍, a smiling face symbol (another long Unicode)

// Escape character:
console.log(">>>Escape Character<<<");
console.log('I\'m the Walrus!'); // I'm the Walrus!

/**
 * String length
 */

console.log(">>>String length<<<");
console.log(`My\n`.length); // 3
// Note that \n is a single "special" character, so the length is indeed 3.

/**
 * Accessing characters
 */

let str = `Hello`;

// the first character
console.log(str[0]); // H
console.log(str.charAt(0)); // H
// the last character
console.log(str[str.length - 1]); // o

console.log("(str[1000] =>", str[1000]); // undefined
console.log("str.charAt(1000)=>", str.charAt(1000)); // '' (an empty string)

// We can also iterate over characters using for..of:
for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
};