function fishingBoat(input){
    let budget=Number(input[0]);
    let season=input[1];
    let countOfFishers=Number(input[2]);
    let price=0;
    if(season == "Spring"){
       price=3000;
    }else if(season == "Summer"){
        price=4200;
    }else if(season == "Autumn"){
        price=4200;
    }else if(season == "Winter"){
        price=2600;
    }
if(countOfFishers<=6){
    price-=price*0.1;
}
else if(countOfFishers<=11){
price-=price*0.15;
}
else if(countOfFishers>=12){
    price-=price*0.25;
}
if(countOfFishers%2==0 && season != "Autumn"){
    price-=price*0.05;
}

if(budget >= price){
    console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`)
}else{
    console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`)
}
}
fishingBoat (["3600","Autumn","6"])
