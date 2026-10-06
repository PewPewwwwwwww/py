class Student {

    constructor(id, name, scores, attendance) {
        this.id = id;
        this.name = name;
        this.scores = scores;
        this.attendance = attendance;
    }

    getTotal() {

        let total = 0;

        for (let score of this.scores) {
            total += score;
        }

        return total;
    }

    getAverage() {

        return this.getTotal() / this.scores.length;
    }

    getStatus() {

        if (this.getAverage() >= 75 && this.attendance >= 80) {
            return "PASS";
        } else {
            return "FAIL";
        }
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

    for (let student of students) {

        if (
            student.scores.length === 0 ||
            student.attendance < 0 ||
            student.attendance > 100
        ) {

            console.log("Invalid data for " + student.name);
            return;
        }


        for (let score of student.scores) {

            if (score < 0 || score > 100) {

                console.log("INVALID SCORE for " + student.name);
                return;
            }
        }
    }


    for (let student of students) {

        student.total = student.getTotal();

        student.average = student.getAverage();

        student.status = student.getStatus();
    }

    students.sort(function(a, b) {

        return b.average - a.average;

    });

    for (let i = 0; i < students.length; i++) {

        students[i].rank = i + 1;
    }

    let totalAverage = 0;

    for (let student of students) {

        totalAverage += student.average;
    }

    let classAverage = totalAverage / students.length;


    let passingCount = 0;

    for (let student of students) {

        if (
            student.status === "PASS" ||
            student.status === "HONOR"
        ) {

            passingCount++;
        }
    }

    let passingPercentage =
        (passingCount / students.length) * 100;



    let highestScorer = students[0];

    let lowestScorer = students[students.length - 1];


    let qualifiedStudents = [];

    for (let student of students) {

        if (
            (student.status === "PASS" ||
             student.status === "HONOR") &&
            student.average >= 85
        ) {

            qualifiedStudents.push(student);
        }
    }



    console.log("==== STUDENT PERFORMANCE REPORT ====");

    console.log(
        "Rank\tName\tTotal\tAverage\tAttendance\tStatus"
    );

    console.log("-----------------------------------------------");


    for (let student of students) {

        console.log(
            student.rank +
            "\t" +
            student.name +
            "\t" +
            student.total +
            "\t" +
            student.average.toFixed(2) +
            "\t" +
            student.attendance +
            "%" +
            "\t\t" +
            student.status
        );
    }



    console.log("\n====== CLASS STATISTICS ======");

    console.log(
        "Class Average: " +
        classAverage.toFixed(2) +
        "%"
    );

    console.log(
        "Passing Percentage: " +
        passingPercentage.toFixed(0) +
        "%"
    );

    console.log(
        "Highest Scorer: " +
        highestScorer.name
    );

    console.log(
        "Lowest Scorer: " +
        lowestScorer.name
    );

   

    console.log("\n====== QUALIFIED STUDENTS ======");

    for (let student of qualifiedStudents) {

        console.log(
            student.name +
            " - " +
            student.average.toFixed(2)
        );
    }


    return {

        students: students,

        classAverage: classAverage,

        passingPercentage: passingPercentage,

        highestScorer: highestScorer,

        lowestScorer: lowestScorer,

        qualifiedStudents: qualifiedStudents
    };
}


const report = generateReport(students);