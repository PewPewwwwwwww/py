class Student {
    constructor(id, name, scores, attendance) {
        this.id = id;
        this.name = name;
        this.scores = scores;
        this.attendance = attendance;
        this.rank = 0;
    }

    getTotal() {
        return this.scores.reduce((total, score) => total + score, 0);
    }

    getAverage() {
        return this.getTotal() / this.scores.length;
    }

    getStatus() {
        return this.getAverage() >= 75 && this.attendance >= 80
            ? "PASS"
            : "FAIL";
    }
}

class HonorStudent extends Student {
    getStatus() {

        if (this.getAverage() >= 90 && this.attendance >= 90) {
            return "HONOR";
        }

        return super.getStatus();
    }
}

const students = [
    new Student(1, "Alice", [95, 92, 94], 96),
    new Student(2, "Bob", [80, 75, 85], 88),
    new Student(3, "Charlie", [60, 70, 65], 90),
    new HonorStudent(4, "Diana", [98, 95, 97], 99),
    new Student(5, "Ethan", [88, 90, 84], 79)
];


function generateReport(students) {

    const invalidStudent = students.find(student => {

        const invalidScores = student.scores.some(
            score => score < 0 || score > 100
        );

        const invalidAttendance =
            student.attendance < 0 ||
            student.attendance > 100;

        return (
            !student.name ||
            student.scores.length === 0 ||
            invalidScores ||
            invalidAttendance
        );
    });

    if (invalidStudent) {
        console.log(`Invalid data for ${invalidStudent.name}`);
        return;
    }

    students.forEach(student => {
        student.total = student.getTotal();
        student.average = student.getAverage();
        student.status = student.getStatus();
    });

    students.sort((a, b) => b.average - a.average);

    students.forEach((student, index) => {
        student.rank = index + 1;
    });

    const classAverage =
        students.reduce(
            (sum, student) => sum + student.average,
            0
        ) / students.length;

    const passingStudents = students.filter(
        student =>
            student.status === "PASS" ||
            student.status === "HONOR"
    );

    const passingPercentage =
        (passingStudents.length / students.length) * 100;

    const highestScorer = students[0];

    const lowestScorer = students[students.length - 1];

    const qualifiedStudents = students.filter(
        student =>
            (student.status === "PASS" ||
             student.status === "HONOR") &&
            student.average >= 85
    );

    console.log("\n===== STUDENT PERFORMANCE REPORT =====");

    console.log(
        "Rank\tName\tTotal\tAverage\tAttendance\tStatus"
    );

    console.log("-----------------------------------------------");

    students.forEach(student => {

        console.log(
            `${student.rank}\t` +
            `${student.name}\t` +
            `${student.total}\t` +
            `${student.average.toFixed(2)}\t` +
            `${student.attendance}%\t\t` +
            `${student.status}`
        );
    });

    console.log("\n===== CLASS STATISTICS =====");

    console.log(
        `Class Average: ${classAverage.toFixed(2)}%`
    );

    console.log(
        `Passing Percentage: ${passingPercentage.toFixed(0)}%`
    );

    console.log(
        `Highest Scorer: ${highestScorer.name}`
    );

    console.log(
        `Lowest Scorer: ${lowestScorer.name}`
    );

    console.log("\n===== QUALIFIED STUDENTS =====");

    qualifiedStudents.forEach(student => {
        console.log(
            `${student.name} - ${student.average.toFixed(2)}`
        );
    });

    return {
        students,
        classAverage,
        passingPercentage,
        highestScorer,
        lowestScorer,
        qualifiedStudents
    };
}

const report = generateReport(students);