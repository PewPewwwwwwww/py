class Student {
    constructor(id, name, course, grades, attendance) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.grades = grades;
        this.attendance = attendance;
        this.rank = 0;
    }

    getAvarage() {
        let total = 0;

        for (let score of this.grades) {
            total += score;
        }

        return total / this.grades.length;
    }

    getHighestGrade() {
        return Math.max(...this.grades);
    }

    getLowestGrade() {
        return Math.min(...this.grades);
    }

    getStatus() {
        if (this.getAvarage() >= 75) {
            return "PASSED";
        } else {
            return "FAILED";
        }
    }

    validateData() {
        if (this.id <= 0) {
            return "Invalid ID";
        } else if (this.name === "") {
            return "Name cannot be empty";
        } else if (this.course === "") {
            return "Course cannot be empty";
        } else if (!this.grades || this.grades.length === 0) {
            return "Grades cannot be empty";
        } else if (this.attendance < 0 || this.attendance > 100) {
            return "Invalid attendance";
        }

        for (let grade of this.grades) {
            if (grade < 0 || grade > 100) {
                return "INVALID GRADE " + this.id;
            }
        }

        return null;
    }
}

class ScholarshipStudent extends Student {

    getStatus() {
        if (this.getAvarage() >= 90 && this.attendance >= 90) {
            return "SCHOLARSHIP QUALIFIED";
        } else {
            return "SCHOLARSHIP NOT QUALIFIED";
        }
    }
}


const students = [
    new Student(2026001, "John", "BSIT", [90, 80, 92, 91], 95),
    new Student(2026002, "Mark", "BSIT", [85, 87, 83, 88], 92),
    new ScholarshipStudent(2026003, "Sarah", "BSBA", [95, 94, 96, 93], 98),
    new Student(2026004, "Anna", "BSBA", [78, 82, 80, 79], 90),
    new Student(2026005, "Mike", "BSIT", [70, 72, 68, 75], 85)
];

function generateStudent(students) {
    for (let student of students) {
        let error = student.validateData();

        if (error) {
            console.log(error);
            return;
        }
    }

    students.sort((a, b) => b.getAvarage() - a.getAvarage());

    for (let i = 0; i < students.length; i++) {
        students[i].rank = i + 1;
    }

    console.log("===== STUDENT RANKING =====");

    students.forEach(student => {
        console.log(
            student.rank +
            ". " +
            student.name +
            " - " +
            student.getAvarage().toFixed(2) +
            " - " +
            student.getStatus()
        );
    });
}

generateStudent(students);
