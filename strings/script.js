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

/**
 * String are immutable
 */

str = 'Hi';
// str[0] = 'h'; // error
// console.log(str[0]); // doesn't work

str = 'h' + str[1]; // replace the string
console.log(str);

/**
 * Changing the case
 */
// Methods toLowerCase() and toUpperCase() change the case:
console.log(">>>change the case<<<");
console.log('Interface'.toLowerCase()); // interface
console.log('Interface'.toUpperCase()); // Interface

// Or, if we want a single character lowercased:
console.log('Interface'[0].toLowerCase()); // 'i'

/**
 * Searching for a substring
 */
console.log(">>>str.indexOf<<<");
/* first method is str.indexOf(substr,pos).
    It looks for the substr in str, string from the given position pos, and returns
    the position where the match was found or -1 if nothing can be found.
*/

str = 'Widget with id as';
console.log(str.indexOf('Widget')); // 0. because 'Widget' is found at the beginning
console.log(str.indexOf('widget')); // -1, not found, the search is case-sensitive 
console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// The optional second parameter allows us to start searching from given position
console.log(str.indexOf('id', 2)); //12

// If we're interested in all occurrences, we can run indexOf in loop:
str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;

while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the next position
}

// The same algorithm can be layed out shorter:

pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
}

str = "Widget with id";

if (str.indexOf("Widget")) {
    console.log("We found it"); // doesn't work!
}

if (str.indexOf("Widget") != -1) {
    console.log("We found it"); // works now!
}

console.log(">>>The bitwise NOT trick<<<")
// The bitwise NOT trick
console.log(~2); // -3. the same as -(2+1)
console.log(~1); // -2, the same as -(1+1)
console.log(~-2); // 1, the same as -(-2+1)

// As we can see, ~n is zero only if n == -1 (that’s for any 32-bit signed integer n).
str = "Widget";
if (~str.indexOf("Widget")) {
    console.log('Found it!'); // works
};

/**
 * includes, startsWith, endsWith
 * The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.
 */
console.log(">>>includes, startsWith, endsWith<<<");

console.log("Widget with id".includes("Widget")); // true
console.log("Hello".includes("Bye")); // false

// The optional second argument of str.includes is the position to start searching from:
console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 3)) // false, from position 3 there is no "id"

// The methods str.startsWith and str.endsWith do exactly what the say:
console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get"));  //true, "Widget" ends with "get"

/**
 * Getting a substring
 * There are 3 methods in JavaScript to get a substring: substring, substr and slice.
 */
console.log(">>>str.slice(start[, end])<<<")
// str.slice(start[, end])
// Returns the part of the string from start to (but not including) end.

str = "stringify";
console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0
// If ther is no second argument, tthen slice goes till the end of string:
console.log(str.slice(2)); // 'ringify', from the 2nd position till the end
// begative values from start/end are also possible. They mean the position is counted from the string end:
console.log(str.slice(-4, -1)); // 'gif'

// str.substring(start [, end])
console.log(">>>str.substring(start [, end])<<<")
// Returns the part of the string between start and end.
// This is almost the same as slice, but it allows start to be greater than end.

// these are same from substring
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"
// ...but not for slice:
console.log(str.slice(2, 6)); // "ring" (the same)
console.log(str.slice(6, 2)); // "" (an emty string)
// Negative arguments are (unlike slice) not supported, they are treated as 0.

// str.substr(start [, length])
console.log(">>>str.substr(start [, length]<<<");
// Returns the part of the string from start, with the given length.
// In contrast with the previous methods, this one allows us to specify the length instead of the ending position:
console.log(str.substr(2, 4)); // 'ring', from 2nd position get 4 characters
// The first argument may be negative, to count from the end:
console.log(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters