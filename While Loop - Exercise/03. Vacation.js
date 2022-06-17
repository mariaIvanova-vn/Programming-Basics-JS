function vacation(input){
    let neededMoney=Number(input[0]);
    let money=Number(input[1]);
    let index=2;
    let spendOrSave=input[index];

    let countSpend=0;
    let count=0;

    while(money<neededMoney){     
        count++;
        if(spendOrSave=="spend"){
            index++;
            spendOrSave=Number(input[index]);
            money-=spendOrSave;
            countSpend++;
            if(money<0){
                money=0;
            }
            if(countSpend==5 && money<neededMoney){
                console.log("You can't save the money.")
                console.log(`${count}`);
                return;
            }
        }
        else if(spendOrSave=="save"){           
            countSpend=0;
            index++;
            spendOrSave=Number(input[index]);
            money+=spendOrSave;
        }
        index++;
        spendOrSave=input[index];        
    }
    console.log(`You saved the money for ${count} days.`);
}

vacation (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
