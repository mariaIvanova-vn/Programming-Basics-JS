function ball(input){
    let n=Number(input[0]);
    let totalPoints=0;
    let redBalls= 0;
    let orangeBalls= 0;
    let yellowBalls= 0
    let whiteBalls= 0;
    let otherColors = 0;
    let black=0;
    let index=1;

    for (let i = 0; i < n; i++) {
        
       let color=input[index];
       index++;
       if (color === "red") {
        redBalls++;
        totalPoints+=5;
       }
       else if(color === "orange"){
        orangeBalls++;
        totalPoints+=10;
       }
       else if(color === "yellow"){
        yellowBalls++;
        totalPoints+=15;
       }
       else if(color === "white"){
        whiteBalls++;
        totalPoints+=20;
       }
       else if(color === "black"){
        black++;
        totalPoints=Math.floor(totalPoints/2);
       }
       else{
        otherColors++;
       }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${black}`);
}

ball (["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])



