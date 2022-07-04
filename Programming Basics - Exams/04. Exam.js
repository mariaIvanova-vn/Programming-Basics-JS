<<<<<<< HEAD
function exam(input) {
    let student = Number(input[0]);
    let index = 1;
    let count5 = 0;
    let count4 = 0;
    let count3 = 0;
    let count2 = 0;
    let totalGrade = 0;
    for (let i = 1; i <= student; i++) {
        let gradeStudent = Number(input[index++]);

        totalGrade += gradeStudent;

        if (gradeStudent >= 5) {
            count5++;
        }
        else if (gradeStudent >= 4 && gradeStudent <= 4.99) {
            count4++;
        }
        else if (gradeStudent >= 3 && gradeStudent <= 3.99) {
            count3++;
        }
        else if (gradeStudent < 3) {
            count2++;
        }
    }

    let topStudents = (count5 / (student * 1.0)) * 100;
    let betwen45 = (count4 / (student * 1.0)) * 100;
    let betwen3 = (count3 / (student * 1.0)) * 100;
    let betwen2 = (count2 / (student * 1.0)) * 100;
    let sumGrade = totalGrade / student;

    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${betwen45.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${betwen3.toFixed(2)}%`);
    console.log(`Fail: ${betwen2.toFixed(2)}%`);
    console.log(`Average: ${sumGrade.toFixed(2)}`);
}


exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])
=======
function exam(input) {
    let student = Number(input[0]);
    let index = 1;
    let count5 = 0;
    let count4 = 0;
    let count3 = 0;
    let count2 = 0;
    let totalGrade = 0;
    for (let i = 1; i <= student; i++) {
        let gradeStudent = Number(input[index++]);

        totalGrade += gradeStudent;

        if (gradeStudent >= 5) {
            count5++;
        }
        else if (gradeStudent >= 4 && gradeStudent <= 4.99) {
            count4++;
        }
        else if (gradeStudent >= 3 && gradeStudent <= 3.99) {
            count3++;
        }
        else if (gradeStudent < 3) {
            count2++;
        }
    }

    let topStudents = (count5 / (student * 1.0)) * 100;
    let betwen45 = (count4 / (student * 1.0)) * 100;
    let betwen3 = (count3 / (student * 1.0)) * 100;
    let betwen2 = (count2 / (student * 1.0)) * 100;
    let sumGrade = totalGrade / student;

    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${betwen45.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${betwen3.toFixed(2)}%`);
    console.log(`Fail: ${betwen2.toFixed(2)}%`);
    console.log(`Average: ${sumGrade.toFixed(2)}`);
}


exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])
>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
