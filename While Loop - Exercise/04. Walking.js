function walking(input){
    let index=0;
    let command=input[index];
    let result=0;

    while(command !== "Going home"){
        let steps=Number(command);
        result+=steps;        

        if(result>=10000){
            console.log("Goal reached! Good job!");
            console.log(`${result-10000} steps over the goal!`);
            break;
        }
        index++;
        command=input[index];
        
    }
    if(command=== "Going home"){
        let StepsToHome=Number(input[index+1]);
        result+=StepsToHome
        if(result>=10000){
            console.log("Goal reached! Good job!");
            console.log(`${result-10000} steps over the goal!`);
        }
        else{
            console.log(`${10000-result} more steps to reach goal.`);
        }
    }
}

walking (["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

