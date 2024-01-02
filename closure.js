//Closures in javascript
//Lexical scope

var username = "Roadside Coder";

//global scope
function lexical() {
  //local scope
  console.log(username);
}

lexical();

//what is closure

function sub() {
  var name = "Roadside Coder";
  function displayName(num) {
    console.log(name, num);
  }
  return displayName;
}

sub()(5);

//Closure scope chain

//global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      //outer function scope
      return function (d) {
        //local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));

//Q1 -What will be logged to console?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();

//Q2 - Write a function that would allow you to do this

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

var addSix = createBase(6);

addSix(10); // return 16
addSix(21); // return 27

//Q3 - Time optimization

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

var closure = find();

console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

//Q4 - Block scope and setTimeout

// function a() {
//   for (var i = 0; i < 4; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a();

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

//how would you use a closure to create a private counter?

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();

c.add(5);
c.add(10);

console.log(c.retrive());

//Q6 - what is module pattern?

var Module = (function () {
  function privateMethod() {
    //do something
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

// Module.privateMethod();
// Module.publicMethod();

//Q7 - Make this run only once

let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already subscribed");
    } else {
      view = "Roadside Coder";
      console.log("Subcribe to " + view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();

isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();

//Q8 -once polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once(console.log("hello"));

hello();
hello();
hello();
hello();
hello();

//Q9 - Memoize polyfill

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9467, 7469));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7469));
console.timeEnd("Second call");

//Q10 - Difference between Closure and Scope

//Closure -> global scope ,outer scope ,local scope
//Scope -> global scope ,local scope
