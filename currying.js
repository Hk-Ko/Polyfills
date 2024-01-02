//Currying in javascript
//Example f(a,b) into f(a)(b)

function f(a, b) {
  console.log(a, b);
}

function e(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(e(5)(6));

//Why should we use curring?

//Q1- sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

/*Q2-
    evaluate("sum")(4)(2) => 6
    evaluate("multiply")(4)(2) => 8
    evaluate("divide")(4)(2)=>2
    evaluate("substract")(4)(2)=>2
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}

const plus = evaluate("sum");
const mul = evaluate("multiply");
const div = evaluate("divide");
const sub = evaluate("substract");

console.log(plus(4)(2));
console.log(mul(4)(2));
console.log(div(4)(2));
console.log(sub(4)(2));

//Q3- Infinite Currying => (1)(2)(3)(4).....(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(4)(5)(7)(8)());

//Q4 - Currying vs Partial Applicationg

function par(a) {
  //partial

  return function (b, c) {
    return a + b + c;
  };
}

const x = par(10);

console.log(x(3, 5));
console.log(x(5, 6));

console.log(sum(20)(8)(8));

function cur(a) {
  //currying
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//Q5- Manipulating Dom

// function updateElementText(id) {
//   return function (context) {
//     document.querySelector("#" + id).textContent = context;
//   };
// }

// const updateHeader = updateElementText("heading");

// updateHeader("Subscribe to Roadside Coder");

//Q6 - curry() implementation
//converts fun(a,b,c) into fun(a)(b)(c)

function curry(fun) {
  return function curriedFunc(...args) {
    if (args.length >= fun.length) {
      return fun(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const positive = (a, b, c, d) => a + b + c + d;

const totalSum = curry(positive);

console.log(totalSum(5)(3)(2)(1));
