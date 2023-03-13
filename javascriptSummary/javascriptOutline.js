'use strict';
///// Contents
'01. Javascript Fundamentals Part 1'; // Line 15
'-Assignment, Comparison and Logical Operators'; // Line 33
'-Typeof'; // Line 76

'02. Javascript Fundamentals Part 2'; // Line 95
'-Functions'; // Line 97
'-Loops'; // Line 153
'-Functions & Methods'; // Line 207
'-Date Methods'; // Line 334
'-Math Methods'; // Line 364

'03. Object Oriented Programming /// Constructor Functions /// Prototypes';

'04. Scope Chain/Call Stack';

////////// Section 01 Javascript Fundamentals Part 1 ////////////
///// DATA TYPES
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
// True*
console.log(typeof true);
// Boolean
console.log(typeof javaScriptIsFun);
// Boolean
console.log(typeof 23);
// Number
console.log(typeof 'Jonas', ':This is a string at line 19 (typeof: Jonas)');
// String

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);
// String

///// Assignment Operators

let x = 10 + 105; // 115
x += 10; // x = x + 10 = 25
x -= 10; // x = x - 10
x *= 4; // x = x * 4 = 100
x /= 1; // x = x divided by 1
x **= 2; // x = x to the power of 2
x %= 1; // x = x % 1???
x++; // x = x + 1
x--; // x = x - 1

x >= 1; // x is greater than or equal to 1
x <= 1; // x is less than or equal to 1
x >>= 1;

///// Comparison Operators

x == 1; // (Equals) returns true if operands are equal
x != 1; // x does not equal 1
x === 1; // (Strict Equals)

///// Logical Operators
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = 'Cat' && 'Dog'; // t && t returns Dog
const a6 = false && 'Cat'; // f && t returns false
const a7 = 'Cat' && false; // t && f returns false

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = 'Cat' || 'Dog'; // t || t returns Cat
const o6 = false || 'Cat'; // f || t returns Cat
const o7 = 'Cat' || false; // t || f returns Cat

const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !'Cat'; // !t returns false

///// Typeof
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"

///// Coding example (Operators)
const billValue = 475;
const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `The bill was ${billValue}, the tip was ${tip}, and the total value was ${
    billValue + tip
  }`
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Section 02 Javascript Fundamentals Part 2 ////////////

//////////////////// FUNCTIONS /////////////////////////////////////////////////
// Function — a set of instructions that perform a task.

///// Function Declaration
function calcage1(birthYear) {
  return 2037 - birthYear;
}

///// Function Expression

const calcage2 = function (birthYear) {
  return 2037 - birthYear;
};

///// Arrow Function

const calcage3 = birthYear => 2037 - birthYear;
const age3 = calcage3(1991);

////////////////////////////////////////////// ARRAYS //////////////////////////////////////////////////////

const friend1 = 'Patric';
const friend2 = 'Austin';
const friend3 = 'Colin';

const friends = ['Patric', 'Austin', 'Colin'];
console.log(
  friends,
  `This is the array created at line 115: const friends = ['Patric', 'Austin', 'Colin']`
);

const years2 = new Array(1991, 1984, 2008, 2020);

// Add elements
const newLength = friends.push('John'); // Insert element to end of array
console.log(friends, 'John was added to end of array with push');

friends.unshift('Justin'); // Insert new element at start of array and return length of array
console.log(friends, 'Justin was added to start of array with unshift');

// Remove elements
friends.pop(); // removes last element of array and returns it
console.log(friends, 'John was removed from end of array with pop');
friends.shift(); // removes first element of array and returns it
console.log(friends, 'Justin was removed from start of array with shift');
console.log(
  friends.length,
  'Value logged using friends.length to get the length of array friends'
); // logs the length of the specified array
friends.push('Justin');
friends.push('Abed');
friends.push('John');
friends.push('Maddie');
friends.push('Chelsey');
friends.push('Lucy');

//////////////////////////// LOOPS /////////////////////////////////////////////////////////////////////////////////////////

///// FOR LOOP
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

for (let i = 1; i < friends.length; i++) {
  console.log(friends[i], typeof friends[i]);
  // Output Austin, String
  // Output Colin, String
  // Output Justin, String
  // Output Abed, String
  // Output John, String
  // Output Maddie, String
  // Output Chelsey, String
  // Output Lucy, String
}
console.log(friends);
for (let i = 0; i < friends.length; i++) {
  //   friends.push('Justin'); // Endless loop NOOOOOOOO
  console.log(friends[i], `...This is element number ${i} in array friends`);
  //   friends.push(friends[i]); // Endless loop NOOOOOOOOO

  // Output Patric, String
  // Output Austin, String
  // Output Colin, String
  // Output Justin, String
  // Output Abed, String
  // Output John, String
  // Output Maddie, String
  // Output Chelsey, String
  // Output Lucy, String
}

for (let i = 0; i < 50; i++) {
  console.log(`Loop Number: ${i}`);
}
// Output 0 loop 1 loop 2 loop 3 loop ...... 49 loop

///// WHILE LOOP

let i = 1;
while (i <= 25 && i >= 0) {
  console.log(`This is iteration ${i} in the while loop`);
  i += 2;
}
// Output: This is iteration 1 in the while loop
// Output: This is iteration 3 in the while loop
// Output: This is iteration 5 in the while loop.....
// Output: This is iteration 25 in the while loop

/////////////////////////////////// FUNCTIONS & METHODS ////////////////////////////////////////////////////////////////////////
// Method — a set of instructions that are associated with an object.

////////////// Array Methods//////////////////////

///// .map()
// This method creates a new array with the results of calling a provided function on every element in this array.
const arr1 = ['One', 2, 'Three', 4];
const mappedArr1 = arr1.map(e => e + 2);
console.log(mappedArr1); // Output: ['One2', 4, 'Three2', 6]
///// .filter()
// This method creates a new array with only elements that passes the condition inside the provided function
const arr2 = [2, 4, 6, 8, 10];
const filteredArr2 = arr2.filter(element => element === 6 || element === 10);
console.log(filteredArr2); // Output: [6, 10] New Array***
///// .sort()
// This method is used to arrange/sort array’s elements either in ascending or descending order.
const arr3 = [1, 3, 5, 7, 9];
const sortArr3 = arr3.sort((a, b) => (a > b ? -1 : 1)); // Descending order
console.log(sortArr3);

///// .forEach()
// This method helps to loop over array by executing a provided callback function for each element in an array.
const arr4 = ['Chels', 'Lucy', 'Aust', 'Pat', 'Alex', 'Jenny'];
const newArr4 = arr4.forEach(element => {
  console.log(element);
});

///// .concat()
// This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.
const arr5 = ['Chels', 'Lucy', 'Aust', 'Pat', 'Alex', 'Jenny'];
const newArr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(newArr5.concat(arr5));
console.log(arr5);

///// .every()
// This method checks every element in the array that passes the condition, returning true or false as appropriate.
const arr6 = [10, 20, 30, 40, 50, 60];
const everyArr6 = arr6.every(num => num >= 9); // Every element is greater than or equal to 9, Output: True
console.log(everyArr6);

///// .some()
// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.
const arr7 = [10, 20, 30, 40, 50, 60];
const newArr7 = arr6.some(num => num >= 35); // Some elements in the array are greater than or equal to 35, Output: True
console.log(newArr7);

///// .includes()
// This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
const arr8 = [10, 20, 30, 40, 50, 60];
console.log(arr8.includes(9)); // Checks if the array includes 9, Ouput: False
console.log(arr8.includes(20)); // Checks if the array includes 20, Ouput: True

///// .join()
// This method returns a new string by concatenating all of the array’s elements separated by the specified separator.
const arr9 = ['Chels', 'Lucy', 'Aust', 'Pat', 'Alex', 'Jenny'];
console.log(arr9.join(' and '));

///// .reduce()
// This method applies a function against an accumulator and each element in the array to reduce it to a single value.
const arr10 = [1, 2, 3, 4, 5, 6, 7];
const reduceArr10 = arr10.reduce((a, b) => a + b);
console.log(reduceArr10); // Output: 28

///// .find()
// This method returns the value of the first element in an array that pass the test in a testing function.
const arr11 = ['Chels', 'Lucy', 'Aust', 'Pat', 'Alex', 'Jenny'];
const findArr11 = arr11.find(e => e.includes('C')); // Output: Chels
console.log(findArr11);

///// .findIndex()
// This method returns the index of the first element in an array that pass the test in a testing function.
const arr12 = ['Chels', 'Lucy', 'Aust', 'Pat', 'Alex', 'Jenny'];
const indexArr12 = arr12.findIndex(e => e.includes('C')); // Output: Chels
console.log(indexArr12);

///// .indexOf()
// This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
const arr13 = ['Blue', 'Green', 'Black', 'Red'];
const indexArr13 = arr13.indexOf('Green');
console.log(indexArr13); // Output: 1

///// .fill()
// This method fills the elements in an array with a static value and returns the modified array.
const arr14 = new Array(8); // Creates new array with 8 empty elements
// console.log(arr14); // Output: [empty x 8]
const newarr14 = arr14.fill(2);
console.log(newarr14);

///// .slice()
// This method returns a new array with specified start to end elements.
const arr15 = [2, 4, 6, 8, 10, 12];
console.log(arr15.slice(1, 5)); // Output: [4, 6, 8, 10]

///// .reverse()
// This method reverses an array in place. Element at last index will be first and element at 0 index will be last.
const arr16 = [2, 4, 6, 8, 10, 12];
console.log(arr16.reverse()); // Output: [12, 10, 8, 6, 4, 2]

///// .push()
// This method adds one or more elements to the end of array and returns the new length of the array.
const arr17 = ['a', 'b', 'c', 'd', 'e'];
const newArr17 = arr17.push('f');
console.log(arr17); // Output: ['a', 'b', 'c', 'd', 'e', 'f']
console.log(newArr17); // Ouput: 6

///// .pop()
//This method removes the last element from the end of array and returns that element.
const arr18 = ['a', 'b', 'c', 'd', 'e'];
const newArr18 = arr18.pop();
console.log(arr18); // Output: ['a', 'b', 'c', 'd']
console.log(newArr18); // Ouput: e

///// .shift()
// This method removes the first element from an array and returns that element.
const arr19 = ['coffee', 'cream', 'eggs', 'toast'];
const newArr19 = arr19.shift();
console.log(arr19); // Output: ['cream', 'eggs', 'toast']
console.log(newArr19); // Output: coffee

///// .unshift()
// This method adds one or more elements to the beginning of an array and returns the new length of the array.
const arr20 = [1, 2, 3, 4, 5, 6, 7];
const newArr20 = arr20.unshift(25);
console.log(newArr20);
console.log(arr20); // Output: [25, 1, 2, 3, 4, 5, 6, 7]

//////////////////// Date Methods ////////////////////////////

///// Date()
// Returns today's date and time
console.log(Date()); // Output: Tue Nov 22 2022 23:28:09 GMT-0500 (Eastern Standard Time)

// /// getDate()
// Returns the day of the month (number) for the specified date according to local time.
// new Date(year, month(0-11), date, hour, minute, second, millisecond)

const d = new Date(2022, 10, 22, 11, 46);
let day = d.getDate();
console.log(day); // Output: 22

///// getDay()
// Day of the week (number)
let day2 = d.getDay();
console.log(day2);

///// getMonth()
// Month (number)
let day3 = d.getMonth();
console.log(day3); // Output: 10
console.log(day3.toString());

let year1 = d.getFullYear();
console.log(year1);

console.log(d.toLocaleString()); // Output: 11/22/2022, 11:46:00 AM
console.log(d.toString()); // Output: Tue Nov 22 2022 11:46:00 GMT-0500 (Eastern Standard Time)
console.log(d.toLocaleDateString()); // Output: 11/22/2022
console.log(d.toTimeString()); // Output: 11:46:00 GMT-0500 (Eastern Standard Time)

///////////////// Math Methods //////////////////////////////

///// .max()
// Returns the largest of zero or more numbers.
const math1 = [1, 2, 4, 5, 8];
const [first, second] = math1;
console.log(first, second);
console.log(Math.max(0, 1, 2, 3, 4, 5)); // Output: 5

///// .min()
// Returns the smallest of zero or more numbers.
console.log(Math.min(0, 1, 2, 3, 4)); // Output: 0
///// .random()
// Returns a pseudo-random number between 0 and 1.
('See example on line 390');

///// .round()
// Returns the value of a number rounded to the nearest integer.
console.log(Math.round(1.24215122)); // 1
console.log(Math.round(23241.94215122)); // 23242

///// .trunc()
// function returns the integer part of a number by removing any fractional digits.
const math2 = Math.min(2.23124214, 4.5223214);
console.log(Math.trunc(math2)); // 2

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
// Output: randomly rolls 1 - 6 and logs 'Loop is about to end' when roll is '6'

///////////////////////////////////// Object Oriented Programming /// Constructor Functions /// Prototypes ////////////////////////////////////////////////
//// Constructor Functions (First letter Capitalized) //////////////////////
const Car = function (make, model, year) {
  // Instance properties
  this.make = make;
  this.model = model;
  this.year = year;
};

// Calling constructor function with "NEW" keyword
const carOne = new Car('Chrysler', '200', 2014); // Creates new object linked to Car constructor function
// console.log(carOne);
// console.log(carOne.__proto__);

////// Prototypes ////// NOTE: All objects that are created through this constructor function will inherit all methods and properties on this prototype property

Car.prototype.calcAge = function () {
  const yearOutput = year1 - this.year;
  console.log(`Your car is ${yearOutput} years old`);
};
carOne.calcAge(); // Output: Your care is 8 years old

// 1. New{} is created (Empty object)
// 2. function is called, this = {}
// 3. {} (object) is linked to prototype
// 4. function automatically returns {}

///// Class Expression /////

class CarCL {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  calcAge() {
    const yearOutput = year1 - this.year;
    console.log(`Your car is ${yearOutput} year(s) old`);
  }
  greet() {
    console.log(`Hey ${this.model}`);
  }
  get age() {
    return year1 - this.year;
  }

  // Set a property that already exists
  set rightYear(year) {
    console.log(year);
    if (year.includes(Number)) this._rightYear = this.year;
    else alert(`${this.year} is not a correct input`);
  }

  get rightYear() {
    return this.rightYear;
  }
}
const chelsCar = new CarCL('Chevrolet', 'Equinox', 2021);
console.log(chelsCar);
chelsCar.calcAge(); // Output: Your car is 1 years old
chelsCar.greet(); // Output: Hey Equinox
