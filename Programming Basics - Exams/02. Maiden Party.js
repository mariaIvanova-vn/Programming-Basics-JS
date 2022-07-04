<<<<<<< HEAD
function maidenParty(input) {
    let priceOfParty = Number(input[0]);
    let countLoveMessage = Number(input[1]);
    let countRoses = Number(input[2]);
    let countKeychain = Number(input[3]);
    let countCartoons = Number(input[4]);
    let countSurprise = Number(input[5]);

    let price = countLoveMessage * 0.60 + countRoses * 7.20 + countKeychain * 3.60 + countCartoons * 18.20 + countSurprise * 22;
    let count = countLoveMessage + countRoses + countKeychain + countCartoons + countSurprise;
    if (count>25) {
        price*=0.65;
    }
    price*=0.9;
    if (price>priceOfParty) {
        console.log(`Yes! ${(price - priceOfParty).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(priceOfParty - price).toFixed(2)} lv needed.`);
    }
}

maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])

=======
function maidenParty(input) {
    let priceOfParty = Number(input[0]);
    let countLoveMessage = Number(input[1]);
    let countRoses = Number(input[2]);
    let countKeychain = Number(input[3]);
    let countCartoons = Number(input[4]);
    let countSurprise = Number(input[5]);

    let price = countLoveMessage * 0.60 + countRoses * 7.20 + countKeychain * 3.60 + countCartoons * 18.20 + countSurprise * 22;
    let count = countLoveMessage + countRoses + countKeychain + countCartoons + countSurprise;
    if (count>25) {
        price*=0.65;
    }
    price*=0.9;
    if (price>priceOfParty) {
        console.log(`Yes! ${(price - priceOfParty).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(priceOfParty - price).toFixed(2)} lv needed.`);
    }
}

maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])

>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
