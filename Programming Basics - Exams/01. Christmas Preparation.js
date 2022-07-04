function christmasPreparation(input){
    let countHartiq = Number(input[0]);
    let countRolki = Number(input[1]);;
    let litriLepilo = Number(input[2]);;
    let prozentSale = Number(input[3]);;

    let priceProlki = countHartiq * 5.80;
    let pricePolki = countRolki * 7.20;
    let priceLepilo = litriLepilo * 1.20;

    let sum = priceLepilo + pricePolki + priceProlki;
    let priceWithSale = sum - sum * prozentSale / 100;
   console.log(`${priceWithSale.toFixed(3)}`);
}


christmasPreparation (["2",
"3",
"2.5",
"25"])
