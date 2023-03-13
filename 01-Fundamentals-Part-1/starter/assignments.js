/*
// // Values & Variables
let country = 'United States';
let continent = 'North America';
let population = 332403650;
console.log(country);
console.log(continent);
console.log(population);


// // Data Types
const isIsland = false;
const language;
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);

// // let, const and var
const language = 'english';
const country = 'United States';
const continent = 'North America';
const isIsland = false;
isIsland = true;

// // Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description1);

// // LECTURE: Strings and Template Literals
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);


// LECTURE: Taking Decisions: if / else Statements

let population = 13
let country = 'United States'

if(population > 33){
console.log(`The ${country} population is above average`)
} else {
console.log(`The ${country} is 22 below average`)
}

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; 4
// '19' - '13' + '17'; 617
// '19' - '13' + 17; 23
// '123' < 57; NaN or False
// 5 + 6 + '4' + 9 - 4 - 2; 1149 - 6 = 1143


// LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(prompt(
    'How many neighboring countries does your country have?'));
if(numNeighbours === 1) {
    console.log('Only 1 border!')
} else if(numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log(' no borders')
}  


// LECTURE: The switch Statement

const language = 'arabic'
switch (language) {
    case 'mandarin' || 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}
*/

// LECTURE: The Conditional (Ternary) Operator

const population = 336;
console.log(`The United States population is ${population >= 33 ? 'above' : 'below'} average`); 
