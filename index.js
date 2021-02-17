/**
 *  splice
 */

// SYNTAX     : array.splice(index, deleteCount, insertItem1, ....., insertItemX)
// OPTIONAL   : deleteCount, insertItem1
// RETURNS    : an array, it contains deleted elements
// SPECIALITY : we add multiple elements in the middle of the array, with or without deleting elements

// index -> from which index should add or delete, deleteCount -> delete, insertItem1 -> add

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2, 0, ...arr.splice(7, 1)); // [1, 2, 8, 3, 4, 5, 6, 7, 9]

/**
 *  find
 */

// SYNTAX     : array.splice(index, deleteCount, insertItem1, ....., insertItemX)
// RETURNS    : it returns the first element, that passes the test
// SPECIALITY : we add multiple elements in the middle of the array, with or without deleting elements

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2, 0, ...arr.splice(7, 1)); // [1, 2, 8, 3, 4, 5, 6, 7, 9]
