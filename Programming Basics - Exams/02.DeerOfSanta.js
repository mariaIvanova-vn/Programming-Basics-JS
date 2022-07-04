function deerOfSanta(input){
    let countDays=Number(input[0]);
    let leftFoodKg=Number(input[1]);
    let foodForDayForFirstDeerKg=Number(input[2]);
    let foodForDayForSecondDeerKg=Number(input[3]);
    let foodForDayForThirdDeerKg=Number(input[4]);

    let totalFood = (foodForDayForFirstDeerKg + foodForDayForSecondDeerKg + foodForDayForThirdDeerKg) * countDays;
    let foodLeft = Math.floor(leftFoodKg - totalFood);
    let foodNeeded = Math.ceil(totalFood - leftFoodKg);

    if (totalFood<leftFoodKg) {
        console.log(`${foodLeft} kilos of food left.`);
    }
    else{
        console.log(`${foodNeeded} more kilos of food are needed.`);
    }
}

deerOfSanta (["5",
"10",
"2.1",
"0.8",
"11"])

