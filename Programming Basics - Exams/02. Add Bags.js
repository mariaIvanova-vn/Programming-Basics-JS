<<<<<<< HEAD
function addBags(input){
    let priceUp20=Number(input[0]);
    let kgBags=Number(input[1]);
    let daysToGo=Number(input[2]);
    let countBags=Number(input[3]);
    let taxes=0;

    if(kgBags<10){
     taxes = priceUp20*0.20;
    }
    else if (kgBags>=10 && kgBags<=20) {
        taxes = priceUp20*0.50;
    }
    else{
        taxes=priceUp20;
    }

    if (daysToGo>30) {
        taxes= taxes + (taxes*0.10)
    }
    else if(daysToGo>=7 && daysToGo<=30){
        taxes= taxes + (taxes*0.15);
    }
    else if(daysToGo<7){
        taxes= taxes + (taxes*0.40)
    }

let result=taxes * countBags;
   console.log(`The total price of bags is: ${result.toFixed(2)} lv.`);
}

addBags (["30",
"18",
"15",
=======
function addBags(input){
    let priceUp20=Number(input[0]);
    let kgBags=Number(input[1]);
    let daysToGo=Number(input[2]);
    let countBags=Number(input[3]);
    let taxes=0;

    if(kgBags<10){
     taxes = priceUp20*0.20;
    }
    else if (kgBags>=10 && kgBags<=20) {
        taxes = priceUp20*0.50;
    }
    else{
        taxes=priceUp20;
    }

    if (daysToGo>30) {
        taxes= taxes + (taxes*0.10)
    }
    else if(daysToGo>=7 && daysToGo<=30){
        taxes= taxes + (taxes*0.15);
    }
    else if(daysToGo<7){
        taxes= taxes + (taxes*0.40)
    }

let result=taxes * countBags;
   console.log(`The total price of bags is: ${result.toFixed(2)} lv.`);
}

addBags (["30",
"18",
"15",
>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
"2"])