function moving(input){
    let first=Number(input[0]);
    let second=Number(input[1]);
    let third=Number(input[2]);
    let total=first*second*third;
    let index=3;
    let command=input[index];
    let sum=0;

    while(command !== "Done"){
        let current=Number(command);
        sum+=current;
        if(sum>total){
            console.log(`No more free space! You need ${sum-total} Cubic meters more.`);
            return;
        }
        index++;
        command=input[index];
    }
    console.log(`${total-sum} Cubic meters left.`);
}

moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])