function cinema(input){
    let typeOfProjection=input[0];
    let r=Number(input[1]);
    let c=Number(input[2]);
    let result=0;

    if(typeOfProjection == "Premiere"){
        result=r*c*12;
    }
    else if(typeOfProjection == "Normal"){
        result=r*c*7.50;
    }
    else if(typeOfProjection == "Discount"){
        result=r*c*5;
    }
    console.log(result.toFixed(2) + " leva")

}

cinema (["Premiere","10","12"])