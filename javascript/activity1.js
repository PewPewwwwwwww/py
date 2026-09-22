const student = [
    {
        studentID: 1,
        name: "Erick Gozo",
        age: 20,
        course: "BSIT",
        enrolled: true,
        yearlevel: 3,
    },
    {
        studentID: 2,
        name: "PrinceAj Orias",
        age: 22,
        course: "BSIT",
        enrolled: false,
        yearlevel: 3,
    },
    {
        studentID: 3,
        name: "Artemis Morada",
        age: 25,
        course: "BSA",
        enrolled: false,
        yearlevel: 3,
    },

    {
        studentID: 4,
        name: "Artemis Morada",
        age: 25,
        course: "BSA",
        enrolled: true,
        yearlevel: 3,
    }
    
];

// student.push; // add an object at the end of array
// student.unshift;  // Add to the beginning

student.unshift(
    {
        studentID: 11,
        name: "Zed bayot",  
        age: 19,
        course: "BSIT",
        enrolled: true,
        yearlevel: 3,
    }
)

// student.pop(); //Remove from the end

// student.shift(); //Remove from the beginning

// let enrolledStudents = student.filter((student) => student.enrolled).length;

// let notenrolledStudents = student.filter((student) => !student.enrolled).length;

// console.log("Student enrrolled: ", enrolledStudents);
// console.log("Studnet Not enrolled: ", notenrolledStudents);

let filterStudent = student.filter((students) => students.course === "BSA");

console.log(filterStudent);


async function getComment() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");

    const data = await response.json();

    let filterComments = data.filter((comment) => comment.id === 3 || comment.postId === 3,);

    filterComments.forEach((comment) => {
        const {name, email, body} = comment
        console.log("Name: ", name);
        console.log("email: ", email);
        console.log("body: ", body);
    });
}

getComment()