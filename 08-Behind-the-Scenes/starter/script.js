'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scopes variable
      const firstName = 'Patric';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope's variable
      output = 'New Output!';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

//Global Variable
const firstName = 'Colin';
calcAge(1987);
// console.log(age);
// printage();

// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Colin';
let job = 'Lightspeed';
const year = 1991;

// Hoisting with Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow());

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingcart();

var numProducts = 10;

function deleteShoppingcart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// This Keyword

console.log(this);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeArrow(1987);

const colin = {
  year: 1987,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
colin.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = colin.calcAge;
matilda.calcAge();

const f = colin.calcAge;
f();
*/
/*
const colin = {
  firstName: 'Colin',
  year: 1987,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);

    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
colin.greet();
colin.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
