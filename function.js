//Functions in Javascript
//Q1 - What is function Declarations?

function square(num) {
  return num * num;
}

//Q2 - what is function Expression?

const squareIn = function (num) {
  return num * num;
};

//Q3 - what are first Class Functions?
function squareft(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("square is " + fn(5));
}

// displaySquare(squareft)

//Q4 - What is IIFE?
//IIFE is immediately invoked function expression

// (function cuba(num){
//     console.log(num * num);
// })(5)

//Q5 - IIFE - O/P Based Question?

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

//Q6 - function scope

var num1 = 20,
  num2 = 3,
  name = "Roadside Coder";

function multiply() {
  return num1 * num2;
}

console.log(multiply());

function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}
console.log(getScore());

//Q7 - function scope - O/P Based Question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//Q8 - function hoisting

functionName();

function functionName() {
  console.log(x);
  var x = 5;

  console.log("Roadside Coder");
}

//Q9 - Function Hoisting - O/P Based Question

var z = 21;
var fun = function () {
  console.log(z);
  var z = 4;
};

fun();

//Q10 - Params & Arguments

function triangle(num) {
  //Params

  console.log(num * num);
}

triangle(5); //Arguments

//Rest & Spread

function multiply(...nums) {
  //Rest

  console.log(nums[0] * nums[1]);
}

var arr = [5, 6];

multiply(...arr); //Spread

//Q11 - Params & Arguments - O/P Based Question

const fn = (a, x, y, ...numbers) => {
  // remember rest or spread operators must be last
  console.log(x, y, numbers);
};

fn(3, 4, 5, 6, 7, 8, 9);

//Q12 - what is callback function

document.addEventListener("click", function (params) {});

//Q13 - Arrow functions vs Regular functions

//1-syntax
//2-Implicit "return" keyword

function squareFeet(num) {
  return num * num;
}

const squareFt = (num) => num * num;

//3 - arguments
function fnRe() {
  console.log(arguments);
}

// fnRe(1, 2, 3, 4);

const fnArr = () => {
  console.log(arguments);
};

// fnArr(1, 2, 3, 4);

//4 - 'this' keyword

let user = {
  username: "Roadside Coder",
  rc1: () => {
    console.log("Sub to " + this.username);
  },
  rc2() {
    console.log("Sub to " + this.username);
  },
};

user.rc1();
user.rc2();
