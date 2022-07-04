<<<<<<< HEAD
function accountBalance(input){
    let increase=input[0];
    let sum=0;
    let index=1;
 
    while(increase !== "NoMoreMoney"){
        let amount=Number(increase);
        if(amount<0){
            console.log(`Invalid operation!`);
            break;
        }
        sum+=amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        
        increase=input[index];        
        index++;
    }
     console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])

=======
function accountBalance(input){
    let increase=input[0];
    let sum=0;
    let index=1;
 
    while(increase !== "NoMoreMoney"){
        let amount=Number(increase);
        if(amount<0){
            console.log(`Invalid operation!`);
            break;
        }
        sum+=amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        
        increase=input[index];        
        index++;
    }
     console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])

>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
