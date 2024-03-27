let array = [];
let array1 = new Array();

let numbers = [1, 2, 3, 4, 5, 0, 8, 9, 6, 7, 10];
let strings = ["aa", "dd", "vv", "bb"];
let fruits = ["apple", "banana"];
let name = ["ashish", "bhusal"];

console.log(fruits[1]); //banana

let myArray = [
  "String",
  25,
  true,
  {
    name: "Ashish",
  },
  function () {
    console.log("Hello");
  },
];
console.log(myArray[3].name);
fruits.length; //3

//push pop shift unshift
//push
fruits.push("Mango", "kiwi");
//pop
fruits.pop();
//unshift
fruits.unshift("kiwi");
fruits.shift();

//array looping
//for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let evenNumbers = [];
for (let i = 0; numbers.length; i++) {
  if (numbers[i] % 2 == 0) evenNumbers.push(numbers[i]);
}
console.log(evenNumbers);

//for..of
let evenNumbers1 = [];
for (let number of numbers) {
  if (number % 2 == 0) {
    evenNumbers1.push(number);
  }
}
console.log(evenNumbers1);

//forEach
numbers.forEach(isEven); //callback function  =isEven(element,index,array)
var evenNumbers2 = [];
function isEven(number) {
  if (number % 2 == 0) evenNumbers2.push(number);
}
console.log(evenNumbers2);

//arrow function in for each
let evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 == 0) evenNumbers3.push(number);
});

fruits.forEach((fruit, index) => {
  console.log(index + "->" + fruit);
});

//filter
let evenNumbers4 = [];
evenNumbers4 = numbers.filter(isEven);
function isEven(number) {
  if (number % 2 == 0) return number;
}
console.log(evenNumbers4);
// using arrow function
evenNumbers4 = numbers.fikter((number) => {
  if (number % 2 == 0) return number;
  return number % 2 == 0;
});

evenNumbers4 = numbers.filter((number) => number % 2 == 0);
console.log(evenNumbers4);

//string
let fruitArray = [];
for (let fruit of fruits) {
  if (fruit.length <= 4) fruitArray.push(fruit);
}
console.log(fruitArray);

//using filter
let fruitArray1 = [];
fruitArray1 = fruits.filter((fruit) => {
  return fruit.length <= 4;
});

//or
fruitArray1 = fruits.filter((fruit) => fruit.length <= 4);

//problem1 : find prime numbers
let myNewArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

let primeNumbers = myNewArray.filter(isPrime);

console.log("Prime Numbers in the array:", primeNumbers);

//problem2
let word='cat';
let myArray1=['cat', 'dog','concat','white','blue'];
let matchArray = myArray1.filter(element => element.includes(word));
console.log(matchArray); // cat,concat


