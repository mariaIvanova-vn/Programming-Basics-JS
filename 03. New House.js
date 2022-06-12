function newHouse(input){
    let typeOfFlower=input[0];
    let countOfFlowers=Number(input[1]);
    let budget=Number(input[2]);
    let price=0;
    if(typeOfFlower=="Roses"){
        price=countOfFlowers*5;
        if(countOfFlowers>80){
           price-=price*0.1;
        }
    }else if(typeOfFlower == "Dahlias"){
        price=countOfFlowers*3.80;
        if(countOfFlowers>90){
            price-=price*0.15;
         }
    }else if(typeOfFlower == "Tulips"){
        price=countOfFlowers*2.80;
        if(countOfFlowers>80){
            price-=price*0.15;
         }
    }else if(typeOfFlower == "Narcissus"){
        price=countOfFlowers*3;
        if(countOfFlowers<120){
            price+=price*0.15;
         }
    }else if(typeOfFlower == "Gladiolus"){
        price=countOfFlowers*2.50;
        if(countOfFlowers<80){
            price+=price*0.2;
         }
    }
    if(budget>=price){
        console.log(`Hey, you have a great garden with ${countOfFlowers} ${typeOfFlower} and ${(budget-price).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`)
    }

}

newHouse (["Roses","55","250"])