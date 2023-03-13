// Coding Challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);
console.log(dolphinScore, koalaScore);

const checkWinner = function(dolphinAvg, koalaAvg)
{
    if (dolphinAvg >= 2 * koalaAvg){
        console.log(`Dolphins WIN! (${dolphinAvg} VS ${koalaAvg})`);
    } else if (koalaAvg >= 2 * dolphinAvg){
        console.log(`Koalas WIN! ${koalaAvg} VS ${dolphinAvg}`);
    } else {
        console.log('No team wins....');
    }
}
checkWinner(dolphinScore, koalaScore);

// Test 2
dolphinScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);
console.log(dolphinScore, koalaScore);
checkWinner(dolphinScore, koalaScore);



// Coding Challenge #2


const calcTip = function(billValue) {
 return billValue <=300 && billValue >= 50 ? billValue * .15 : billValue * .2
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips);


// Coding Challenge #3

const descMark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weightMark: 78, // kg
    heightMark: 1.69, // m

    calcBMI: function () {
        this.markBMI = this.weightMark / (this.heightMark ** 2)
        return this.markBMI
    }
}

const descJohn = {
    firstName: 'John',
    lastName: 'Smith',
    weightJohn: 92, // kg
    heightJohn: 1.95, // m

    calcBMI: function () {
        this.johnBMI = this.weightJohn / (this.heightJohn ** 2)
        return this.johnBMI
    }
}
descJohn.calcBMI();
descMark.calcBMI();

console.log(descMark.markBMI, descJohn.johnBMI);

if (descMark.markBMI > descJohn.johnBMI) {
    console.log(`${descMark.firstName} ${descMark.lastName}'s BMI (${descMark.markBMI} is higher than ${descJohn.firstName} ${descJohn.lastName}'s (${descJohn.johnBMI})!`)
} else if (descJohn.johnBMI > descMark.markBMI) {
    console.log(`${descJohn.firstName} ${descJohn.lastName}'s BMI (${descJohn.johnBMI} is higher than ${descMark.firstName} ${descMark.lastName}'s (${descMark.markBMI})!`)
}
*/

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀



const calcTip = function (billValue) {
    return billValue <= 300 && billValue >= 50 ? billValue * .15 : billValue * .2
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const perc = calcTip(bills[i]);
    const tots = (calcTip(bills[i]) + bills[i]);
    tips.push(perc)
    totals.push(tots)
}
console.log(tips);
console.log(totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));






