//Call ,Bind and Apply in javascript (Explicit Binding)
//Q1- What is call?

var obj = { name: "jude" };

function sayHello(age, professional) {
  return "hello " + this.name + " is " + age + " and is a " + professional;
}

console.log(sayHello.call(obj, 24, "developer"));

//Q2 - what is apply?

var object = { name: "jude" };

function sayHi(age, professional) {
  return "hello " + this.name + " is " + age + " and is a " + professional;
}

console.log(sayHi.apply(object, [24, "developer"]));

//Q3 - what is bind?

var sub = { name: "jude" };

function sayWhup(age, professional) {
  return "hello " + this.name + " is " + age + " and is a " + professional;
}

const bindFunc = sayWhup.bind(sub);

console.log(bindFunc(30, "engineer"));
console.log(bindFunc(20, "doctor"));
console.log(bindFunc(30, "student"));

//Q4- what is the output?

const person = { name: "Marcus" };

function sayGuy(age) {
  return `${this.name} is ${age}`;
}

console.log(sayGuy.call(person, 24));
console.log(sayGuy.bind(person, 24));

//Q5 - Call with function inside object

const age = 50;

var guy = {
  name: "Jay",
  age: 27,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 29 };

console.log(guy.getAge.call(person2));

//Q6 - what is the output?

var status = "glass";

setTimeout(() => {
  const status = "heart";

  const data = {
    status: "avogado",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
});

//Q7 - Call printAnimals such that it prints all animals in object

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

//Q8 - Append an array to another array

const array = ["a", "b"];

const elements = [1, 2, 3, 4];

array.push.apply(array, elements);

console.log(array);

//Q9 - Find min/max in an array

const numbers = [5, 3, 8, 6, 9];

console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

//Q10 - Bound function

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g();

//Q11 - Bind Chainig

function e() {
  console.log(this.name);
}

e = e.bind({ name: "Jude" }).bind({ name: "Marcus" });

e();

//Q12 - Fix the line 22 to make code work properly

function checkPassword(success, failed) {
  let password = prompt("Password", "");
  if (password == "Roadside Coder") success();
  else failed();
}

let User = {
  name: "Jude",

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },

  loginFailed() {
    console.log(`${this.name} failed to logged in`);
  },
};

checkPassword(User.loginSuccessful.bind(User), User.loginFailed.bind(User));

//Q13 - Partial application for login function

//Q 14 - Explicit Binding with Arrow Function

const old = 10;

var p = {
  name: "Jay",
  old: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var p2 = { old: 14 };

p.getAgeArrow.call(p2);
p.getAge.call(p2);

//Q15 - pollyfill for call method

const car1 = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not Callable");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car1, "$", 300000);

//Q16 - pollyfill for apply method

const car2 = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar2(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not Callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar2.myApply(car2, ["$", 300000]);

//Q17 - pollyfill for bind method

const car3 = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar3(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bounded as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar3.myBind(car3, "$");

console.log(newFunc(5000000));
