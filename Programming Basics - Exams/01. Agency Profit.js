function agencyProfit(input){
    let name=input[0];
    let countTicketAdult=Number(input[1]);
    let countTicketKids=Number(input[2]);
    let netPriceAdult=Number(input[3]);
    let taxesPrice=Number(input[4]);

    let netPriceKids=netPriceAdult*0.30;
    let totalAdult=netPriceAdult+taxesPrice;
    let totalKids=netPriceKids+taxesPrice;
    let totalPrice=(totalAdult*countTicketAdult)+(totalKids*countTicketKids);
    let total=totalPrice*0.20;

    console.log(`The profit of your agency from ${name} tickets is ${total.toFixed(2)} lv.`);
}

agencyProfit (["WizzAir",
"15",
"5",
"120",
"40"])