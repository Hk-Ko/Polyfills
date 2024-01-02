//Object in javascript

//Q1 - what is the output?

const obj = {
  a: "one",
  b: "two",
  a: "three",
  b: "four",
};

console.log(obj);

//Q2- Create function multiplyBytwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  myTitle: "My nums",
};

multiplyBytwo(nums);

function multiplyBytwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

console.log(nums);

//Q3- what is the output of the following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//Q4 - what is JSON.strigify and JSON.parse?

const jay = {
  name: "Jude",
  age: 27,
};

const strObj = JSON.stringify(jay);

localStorage.setItem("test", strObj);

console.log(JSON.parse(localStorage.getItem("test")));

//Question 5 - what is the output?

console.log([..."Lydia"]);

//Q6 - what is the output?

const joker = { name: "Jude", age: 27 };
const admin = { admin: true, ...joker };

console.log(admin);

//Q7 - What is the output?

const settings = {
  username: "Jude",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);

console.log(data);

//Q8 - what is the output?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); // NaN

//Q9 - what is destructing in objects?

let client = {
  name: "Jude",
  age: 27,
  fullName: {
    firstName: "Jude",
    lastName: "Marcs",
  },
};

const name = "Joker";

const {
  fullName: { firstName },
} = client;

console.log(firstName);

//Q10 - What is the output?

function getItems(fruitList, favouriteFruit, ...args) {
  return [...fruitList, ...args, favouriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));

//Q11-what is the output?

let x = { greeting: "Hi" };
let z;

z = x;

x.greeting = "hello";

console.log(z.greeting);

//Q12- what is the output?

console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

//Q13 - what is the output?

let person = { name: "jude" };
const member = [person];

person = null;

console.log(member);

//Q14 - what is the output?

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
multiply(value);

//Q15 - what is the output?

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "jude",
    age: 50,
  };
  return person;
}

const personObj1 = {
  name: "jay",
  age: 35,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);
console.log(personObj2);

//Q16 -what's shallow copy and deep copy?

let user = {
  name: "Roadside coder",
  age: 27,
};

const objClone1 = Object.assign({}, user);
const objClone2 = JSON.parse(JSON.stringify(user));
const objClone3 = { ...user };

objClone1.name = "Jude";
objClone2.name = "Jude";
objClone3.name = "Jude";

console.log(user, objClone1);
console.log(user, objClone2);
console.log(user, objClone3);
