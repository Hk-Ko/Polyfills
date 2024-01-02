// Question 1 : Return only name of students in Capital
//Question 2 :Return only details of those who scored more than 60
//Question 3 : More than 60 marks and rollNumber grater than 15
//Question 4 : Sum of marks of all students
//Question 5 : Return only names of students who scored more than 60
//Question 6 : Return total marks for students with marks greather than 60 after 20 marks have been added to those who scored less than 60

let students = [
  { name: "August", rollNumber: 31, marks: 80 },
  { name: "Jude", rollNumber: 10, marks: 69 },
  { name: "Marcus", rollNumber: 55, marks: 36 },
  { name: "Jay", rollNumber: 15, marks: 56 },
];

// let names = [];

// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }

const names = students.map((stu) => stu.name.toUpperCase());

console.log(names);

const details = students.filter((stu) => stu.marks > 60);

console.log(details);

const socres = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);

console.log(socres);

const sum = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

console.log(sum);

const name = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);

console.log(name);

const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks +=  20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);
