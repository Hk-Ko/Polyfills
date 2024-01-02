//this keyword in javascript(Implicit Binding)
//Explain 'this' keyword?

//Q1 - what is the output?

const user = {
  firstName: "jude",
  getName() {
    const firstName = "marcus";
    return this.firstName;
  },
};

console.log(user.getName()); // marcus

//Q2 - what is the result of accessing its ref?why?

function makeUser() {
  return {
    name: "jay",
    ref: this,
  };
}

let User1 = makeUser();

console.log(User1.ref.name);

//Q3 - what is the output?

const User2 = {
  name: "marcus",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(User2.logMessage, 1000);

setTimeout(function () {
  //solution
  User2.logMessage();
}, 1000);

//Q-4what is the output?

const user3 = {
  name: "JJ",
  greet() {
    return `hello , ${this.name}!`;
  },
  farewell: () => {
    return `goodbye , ${this.name}!`;
  },
};

console.log(user3.greet()); // hello jj
console.log(user3.farewell()); // undefined

//Q5 - Create an object calculator?

let calculator = {
  read() {
    this.a = +prompt("a = ", 0);
    this.b = +prompt("b = ", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//Q6- what will be the output?

var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback);

//Q7 - implement calc

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
