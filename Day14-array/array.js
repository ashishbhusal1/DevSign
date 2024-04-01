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
let word = "cat";
let myArray1 = ["cat", "dog", "concat", "white", "blue"];
let matchArray = myArray1.filter((element) => element.includes(word));
console.log(matchArray); // cat,concat

let myNumbers = [1, 4, 9];
let sqrRoot = numbers.map(myFunction);
let myFunction = function (element) {
  console.log(element);
  return Math.sqrt(element);
};
conasole.log(sqrRoot);

//every
let StudentAge = [15, 24, 32, 18];
let result = StudentAge.every((age) => {
  if (age > 18) return age;
});
console.log(result); //false

//some
let StudentAge1 = [15, 24, 32, 18];
let result1 = StudentAge.some((age) => {
  if (age > 18) return age;
});
console.log(result1); //true

//find,findIndex,findLast , findLastIndex
let UserAge = [15, 24, 32, 18];
let result3 = UserAge.find((age) => {
  if (age > 18) return age;
});
console.log(age); //24 first found element

//multiple methods
let myNumbers1 = [-3, -6, -1, 1, 0, 5, 8, 2, 7, 9, -17];
let myResult = myNumbers1.filter((num) => num > 0).map((num) => num % 2 === 0);

//other array methods

//concat
let arr1 = [2, 4, 6];
let arr2 = [0, 7, 9];
let arr4 = ["a", "b", "c"];
let arr3 = [];
console.log(arr3.concat(arr1, arr2, arr4));

//includes
console.log(fruits.includes("orange"));

//indexOf
console.log(fruits.indexOf("orange"));

//join //split
console.log(fruits.join("-")); //apple,banana,orange
console.log(fruits.split("-"));

//reverse
console.log(fruits.reverse());

//slice
console.log(fruits.slice(0, 2));


//splice
let months=['Jan', "Feb",'March', 'May'];
// console.log(months.splice(start,deleteCount,item1,item2,...itemN));
let myVar=(months.splice(3,1,'April'))
console.log(myVar);

//shift
months.splice(0,0,'Aug');

//pop
months.splice(-1,1);

//sort
let numbers1=[10,12,15,0,1,2,3,4,5,6,7,8,9];
console.log(numbers.sort());


//Remove nagative numbers from the given array
// Move element given on the variable 'toMove' to the last index of array
// Output =[3,4,5,8,7,1,2,2,2,2]

let ProblemArray=[-1,2,-4,-6,2,3,4,2,5,8,2,7,1]
let toMove=2;

// let filteredArray=ProblemArray.filter(num=>num>=0);
let arr11=[];
let arr12=[];
let newArray=[];
let filteredArray=ProblemArray.filter((num)=>num>=0).forEach((num)=>{
    if(num==2){
        arr11.push(num);
    }
    else{ arr12.push(num)};
});
newArray=newArray.concat(arr12,arr11);
console.log(newArray);

