function aluminumJoinery(input){
    let countD=Number(input[0]);
    let typeD=input[1];
    let delivery=input[2];
    let price=0;

    if (countD<10) {
        console.log(`Invalid order`);
        return;
    }

    if(typeD==="90X130"){
        price=countD*110;
        if (countD>30 && countD<=60) { price=price*0.95;  }
        if (countD>60) {  price=price*0.92; }
    }
    else if (typeD==="100X150") {
        price=countD*140;
        if (countD>40 && countD<=80) { price=price*0.94;  }
        if (countD>80) {  price=price*0.9; }
    }
    else if (typeD==="130X180") {
        price=countD*190;
        if (countD>20 && countD<=50) { price=price*0.93;  }
        if (countD>50) {  price=price*0.88; }
    }
    else if (typeD==="200X300") {
        price=countD*250;
        if (countD>25 && countD<=50) { price=price*0.91;  }
        if (countD>50) {  price=price*0.86; }
    }
    if (delivery==="With delivery") {
        price+=60;
    }
    if(countD>99){
        price=price*0.96;
    }
console.log(`${price.toFixed(2)} BGN`);
}

aluminumJoinery (["105", 
"100X150",
"Without delivery"])
