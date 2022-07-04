function journey(input){
    let budget=Number(input[0]);
    let season=input[1];
    let typeOfJourney;
    let destination;
    let price=0;
    
  if(season === "summer" && destination!="Europe"){
        typeOfJourney = "Camp";
    }else {
        typeOfJourney = "Hotel";
    }
    

    if (budget<=100){
       destination = "Bulgaria";
       if(season === 'summer'){
           price += budget*0.3; 
       }else price += budget*0.7; 
    }
    else if(budget>100 && budget<=1000){
       destination = "Balkans";
       if(season == "summer"){
        price+=budget*0.4;
    }else price+=budget*0.8;
    }
    else if(budget>1000){
        destination = "Europe";
        price=budget*0.9;
    }

console.log(`Somewhere in ${destination}`);
console.log(`${typeOfJourney} - ${price.toFixed(2)}`);

}

journey(["1500", "summer"])
