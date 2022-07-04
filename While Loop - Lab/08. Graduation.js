<<<<<<< HEAD
function graduation(input){
    let name=input[0];
    let grade=Number(input[1]);
    let index=2;
    let sum=0;
    let count=0;
    for(let i=1; i<=12;i++){
        if(grade>=4){
            sum+=grade;
            grade=Number(input[index]);
            index++;
        }
        else{ count++; }
        if(count === 2){
            console.log(`${name} has been excluded at ${i-1} grade`);
            return;
        }
    }
   console.log(`${name} graduated. Average grade: ${(sum/12).toFixed(2)}`);
}


graduation (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
=======
function graduation(input){
    let name=input[0];
    let grade=Number(input[1]);
    let index=2;
    let sum=0;
    let count=0;
    for(let i=1; i<=12;i++){
        if(grade>=4){
            sum+=grade;
            grade=Number(input[index]);
            index++;
        }
        else{ count++; }
        if(count === 2){
            console.log(`${name} has been excluded at ${i-1} grade`);
            return;
        }
    }
   console.log(`${name} graduated. Average grade: ${(sum/12).toFixed(2)}`);
}


graduation (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
"3"])