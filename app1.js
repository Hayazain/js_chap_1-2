// CHAPTER 02

//  Practice exercise 2.1

let str1 = 'Laurence';
console.log(typeof(str1));
let str2 = "Svekis";
console.log(typeof(str2));
let val1 = undefined;
console.log(typeof(val1));
let val2 = null;
console.log(typeof(val2));
let myNum = 1000;
console.log(typeof(myNum));

//  Practice exercise 2.2

let nam = 'Haya';
let age = 19;
let abc = 'true';
console.log ('Hello, my name is' + " " + nam + ',' + 'I am ' + " " + age + " " + 'years old and I can code JavaScript' + " " + abc + '.' );

//  Practice exercise 2.3

let a = prompt ('Enter value of a');
let b = prompt ('Enter value of b');

let res1 = a ** 2;
let res2 = b ** 2;

let c = res1 + res2;
let res3 = c ** (1/2);
console.log(res3);

//  Practice exercise 2.4

let d = 2;
let e = 6;
let f = 10;

let sum = d + e;
let div = d / f;
let mod = f %= e;

console.log(sum);
console.log(div);
console.log(mod);

// CHAPTER PROJECT

// Miles-to-kilometers converter

const miles = 130;
const kilometers = miles * 1.60934;
console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles.`);

// BMI calculator

const heightInInches = 70; 
const weightInPounds = 160; 

const inchesToCentimeters = 2.54;
const poundsToKilos = 0.453592;

const heightInCentimeters = heightInInches * inchesToCentimeters;
const weightInKilos = weightInPounds * poundsToKilos;

const heightInMeters = heightInCentimeters / 100;
const bmi = weightInKilos / (heightInMeters ** 2);

console.log(`Height in centimeters: ${heightInCentimeters.toFixed(2)} cm`);
console.log(`Weight in kilograms: ${weightInKilos.toFixed(2)} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);

// Self-check quiz

// 1. string
// 2. integer
// 3. it is depends on the specific use case and programming context
// 4. world
// 5. Hello world!
// 6. whatever the user enters in response to the prompt dialog
// 7. 71
// 8. 4
// 9. 16,536
// 10. true, false, true, true, false
