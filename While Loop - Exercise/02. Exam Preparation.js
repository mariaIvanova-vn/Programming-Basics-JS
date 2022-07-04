function examPreparation(input){
    let countPoorGrade=Number(input[0]);
    let index=1;  
    let exam=input[index];  
   
    let countPoor=0;
    let count=0;
    let sum = 0;
    let lastProblem="";

    while(exam !== "Enough"){   
        index++;
        let grade= Number(input[index]);
        lastProblem=exam;
        sum += grade; 
        count++;
        if(grade<=4){
             countPoor++;
             if(countPoor===countPoorGrade){
                console.log(`You need a break, ${countPoorGrade} poor grades.`);
                return;
            }
       }           
        index++;
         exam=input[index];             
    }
    let average = sum /count;
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${count}`);
    console.log(`Last problem: ${lastProblem}`);
}

examPreparation (["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
