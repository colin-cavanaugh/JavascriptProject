/*
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'.Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries.Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
    return country = (`${country} has ${population} million people and its capital city is ${capitalCity}`);
}
const countryUnitedStates = describeCountry('United States', 336, 'Washington D.C.');
const countryEngland = describeCountry('United Kingdom', 67.22, 'London');
const countryJordan = describeCountry('Jordan', 10.2, 'Amman');

console.log(countryEngland);
console.log(countryJordan);
console.log(countryUnitedStates);


// LECTURE: Function Declarations vs. Expressions


function percentageOfWorld1(population) {
    return popPercentage = (population / 7900) * 100
}

const percentageOfWorld2 = function (population) {
    return popPercentage = (population / 7900) * 100
}


const percUnStates = percentageOfWorld1(336)
const percEngland = percentageOfWorld1(67.22)
const percJordan = percentageOfWorld1(10.2);
console.log(percUnStates);

// LECTURE: Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100
const percUnitedStates = percentageOfWorld3(336);
console.log(percUnitedStates);


// LECTURE: Functions Calling Other Functions
const percentageOfWorld1 = population => (population / 7900) * 100;

function describePopulation(country, population) {
    const countryPerc = percentageOfWorld1(population)
    const countryDesc = `${country} has ${population} million people, which is about ${countryPerc}% of the world.`
    return countryDesc;
}
console.log(describePopulation('United States', 336));


// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

function percentageOfWorld1(population) {
    return popPercentage = (population / 7900) * 100
}

// const populations = [336, 35, 36, 37];
console.log(populations.length === 4);
const percentages = 
[
percentageOfWorld1(populations[0]), 
percentageOfWorld1(populations[1]), 
percentageOfWorld1(populations[2]), 
percentageOfWorld1(populations[3])
]
console.log(percentages);


// Basic Array Operations (Methods)

const neighbours = ['Mexico', 'Quebec', 'British Columbia'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.push('Germany');
console.log(neighbours);

neighbours.pop('Utopia');
if(!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}


// LECTURE: Introduction to Objects

const myCountry = {
    countryName:'Italy',
    countryCapital: 'Rome',
    countryLanguage: 'Italian',
    countryPopulation: 59.55,
    neighbours: ['France', 'Switzerland', 'Croatia']
}
console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation


console.log(`${myCountry.countryName} has ${myCountry.countryPopulation} million ${myCountry.countryLanguage}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.countryCapital}`);

myCountry.countryPopulation += 2;
console.log(myCountry.countryPopulation);

myCountry['countryPopulation'] -= 2;
console.log(myCountry.countryPopulation);

LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
LECTURE:


const myCountry = {
    countryName:'Italy',
    countryCapital: 'Rome',
    countryLanguage: 'Italian',
    countryPopulation: 59.55,
    neighbours: ['France', 'Switzerland', 'Croatia'],

    describe: function() {
        return `${this.countryName} has ${this.countryPopulation} million ${this.countryLanguage}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.countryCapital}`;
    },

    checkIsland: function() {
        this.isIsland = true;
        return `${this.neighbours.length === 0 ? 'false' : 'true'}`;
    }
}
console.log(myCountry.describe());
console.log(myCountry.checkIsland());


// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for(let currVoter = 1; currVoter <= 50; currVoter++) {
    console.log(`Voter number ${currVoter} is currently voting!`);
}


// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is


const populations = [336, 35, 36, 37];

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);


// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway 😉

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)


// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

// const populations = [336, 35, 36, 37];

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

const percentages3 = [];
let c = 0;
while (c < populations.length) {
    const cperc = percentageOfWorld1(populations[c]);
    percentages3.push(cperc);
    c++;
}
console.log(percentages3);
*/