function train(input) {
    let num = Number(input[0]);
    let index = 1;
    let command = input[index];
    let currGrade = 0;
    let totalGrade = 0;
    let count=0;

    while (command !== "Finish") {
        //let name = input[command];
        count++;
        index++;
        for (let i = 0; i < num; i++) {           
            let grade = Number(input[index++]);
            currGrade += grade;
            totalGrade += grade;
        }
        console.log(`${command} - ${(currGrade / num).toFixed(2)}.`);
        currGrade=0;
        command = input[index];
    }
    let del=num * count;
    console.log(`Student's final assessment is ${(totalGrade / del).toFixed(2)}.`);
}

train(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
