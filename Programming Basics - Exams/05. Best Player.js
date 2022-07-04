<<<<<<< HEAD
function bestPlayer(input){
    let index = 0;
    let command=input[index];
    let best=Number.MIN_SAFE_INTEGER;
    let bestPlayer="";
    let goals;

    while(command !=="END"){
        index++;
        goals=Number(input[index]);
        if(goals>best){
            best=goals;
            bestPlayer=command;
        }
        if(goals>=10){
            break;
        }
        index++;
        command=input[index];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (goals>=3) {
    console.log(`He has scored ${best} goals and made a hat-trick !!!`);
}
else{
    console.log(`He has scored ${best} goals.`);
}
}

bestPlayer (["Silva",
"5",
"Harry Kane",
"10"])

=======
function bestPlayer(input){
    let index = 0;
    let command=input[index];
    let best=Number.MIN_SAFE_INTEGER;
    let bestPlayer="";
    let goals;

    while(command !=="END"){
        index++;
        goals=Number(input[index]);
        if(goals>best){
            best=goals;
            bestPlayer=command;
        }
        if(goals>=10){
            break;
        }
        index++;
        command=input[index];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (goals>=3) {
    console.log(`He has scored ${best} goals and made a hat-trick !!!`);
}
else{
    console.log(`He has scored ${best} goals.`);
}
}

bestPlayer (["Silva",
"5",
"Harry Kane",
"10"])

>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
