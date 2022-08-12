"use strict";

/**
 * task1
 * Uppercase the first character
 * Write a @function ucFirst(str) that returns the string str with the uppercased first character, for instance:
 */

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
};

console.log(ucFirst("hello"));

/**
 * task2
 * Check for spam
 * Write a @function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
 */

function checkSpam(str) {

    return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')
};

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

/**
 * task3
 * Truncate the text
 * Create a @function truncate(str,maxlength) that checks the length of the @str and, if it exceeds 
 * @maxlength – replaces the end of @str with the ellipsis character @"…", to make its length equal to @maxlength.
 */

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "...";
    } return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));