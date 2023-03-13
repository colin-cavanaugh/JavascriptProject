/*
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀


// Data 1
// const markWeight = 78
// const johnWeight = 92
// const markHeight = 1.69
// const johnHeight = 1.88

// Data 2
const markWeight = 95
const markHeight = 1.88
const johnWeight = 85
const johnHeight = 1.76

// Calculations
const BMIJohn = (johnWeight / johnHeight ** 2);
const BMIMark = (markWeight / markHeight ** 2);
console.log(BMIJohn, BMIMark);

const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI);

// Coding Challenge #2
if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${(BMIMark)}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


// Coding Challenge #3

// Data 1:
const avgScoreDolphins = (96 + 108 + 89) / 3;
const avgScoreKoalas = (88 + 91 + 10) / 3;
const minRequired = 100

// Data 2:
// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 123) / 3;
// const minRequired = 100

if(avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minRequired) {
    console.log('Dolphins win!');
} else if(avgScoreKoalas > avgScoreDolphins && minRequired >= 100) { 
    console.log('Koalas Win!');
} else if(avgScoreDolphins === avgScoreKoalas && minRequired >= 100) {
    console.log('Draw!');
} else {
    console.log('No Trophy');
}

console.log(avgScoreDolphins);
console.log(avgScoreKoalas);
*/

