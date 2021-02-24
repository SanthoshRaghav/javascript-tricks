/**
 *  splice
 */

// SYNTAX     : array.splice(index, deleteCount, insertItem1, ....., insertItemX)
// OPTIONAL   : deleteCount, insertItem1
// RETURNS    : an array, it contains deleted elements
// SPECIALITY : we can add multiple elements in the middle of the array, with or without deleting elements.
// JS VERSION : ECMAScript 1

// index -> from which index should add or delete, deleteCount -> delete, insertItem1 -> add

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2, 0, ...arr.splice(7, 1)); // [1, 2, 8, 3, 4, 5, 6, 7, 9]

/**
 *  slice
 */

// SYNTAX     : array.slice(startIndex, endIndex)
// OPTIONAL   : startIndex, endIndex
// RETURNS    : an array, it contains elements between startIndex and endIndex(endIndex element is not included).
// SPECIALITY : to take a portion of the array
// JS VERSION : ECMAScript 1

// index -> from which index should add or delete, deleteCount -> delete, insertItem1 -> add

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2, 0, ...arr.splice(7, 1)); // [1, 2, 8, 3, 4, 5, 6, 7, 9]

/**
 *  find
 */

// RETURNS    : element or undefined
// SPECIALITY : we can pick an element from an array, instaed of picking it by index(static). using find() makes more dynamic.
// EXECUTION  : once the function returns the element, it won't run on remaining elements.
// JS VERSION : ECMAScript 6 or ECMAScript 2015

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.find((item) => item === 19); // undefined

/**
 *  findIndex
 */

// RETURNS    : element index or -1
// SPECIALITY : to find the index of an element from an array.
// EXECUTION  : once the function returns the index, it won't run on remaining elements.
// JS VERSION : ECMAScript 6 or ECMAScript 2015

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.find((item) => item === 19); // -1
