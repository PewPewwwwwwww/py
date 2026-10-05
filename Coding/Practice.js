class Student {
    constructor(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    getStatus() {

        let avarage = this.score


        if (avarage >= 90) {
            return  "Excellent";
        } else if (avarage >= 75) {
            return  "Passed";
        } else {
            return "Failed";
        }
    }
}

function getTopStudents(students) {

    const filterStudent = students.filter(student => student.name)

    filterStudent.sort((a, b) => b.score - a.score);

    const topStudents = filterStudent.slice(0, 3);

    return topStudents;
}

const students = [
    new Student("Erick", 20, 95),
    new Student("John", 21, 95),
    new Student("Maria", 20, 95),
    new Student("Anna", 22, 95),
    new Student("Peter", 21, 88),
    new Student("Mark", 20, 73),

]

const topStudents = getTopStudents(students);


console.log("====== Student Grade ======")

topStudents.forEach(student => {
    console.log(`Name: ${student.name} | Score: ${student.score} | status: ${student.getStatus()}`)
});