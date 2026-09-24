const students = [
  {
    studentId: 1,
    name: "Sei",
    age: 20,
    course: "BSIT",
    enrolled: true,
    yearLevel: 3,
  },
  {
    studentId: 2,
    name: "Anna",
    age: 20,
    course: "BSIT",
    enrolled: false,
    yearLevel: 2,
  },
  {
    studentId: 3,
    name: "Muta",
    age: 21,
    course: "BSBA",
    enrolled: false,
    yearLevel: 3,
  },
  {
    studentId: 4,
    name: "Bucay",
    age: 21,
    course: "BSBA",
    enrolled: true,
    yearLevel: 2,
  },
];

// students.push; // add an object at the end of array
students.unshift({
  // add an object at the start of an element
  studentId: 5,
  name: "Neeh",
  age: 24,
  course: "BSBA",
  enrolled: true,
  yearLevel: 2,
});

// students.pop();
// students.shift();

let filteredStudents = students.filter((student) => student.course === "BSBA");


console.log(filteredStudents);

async function getComments() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
  );
  const data = await response.json();

  let filteredComments = data.filter((comment) => comment.id === comment.postId,);

  filteredComments.forEach((comment) => {
    console.log(`Name: ${comment.name}`);
    console.log(`Email: ${comment.email}`);
    console.log(`Body: ${comment.body}`);
  });
}

getComments();