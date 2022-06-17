function cake(input){
    let first=Number(input[0]);
    let second=Number(input[1]);
    let countOfPiece=first*second;
    let index=2;
    let command=input[index];
    let numPieces=0;

    while(command !== "STOP"){
        let current=Number(command);
        numPieces += current;
        if(numPieces>countOfPiece){
            console.log(`No more cake left! You need ${numPieces - countOfPiece} pieces more.`);
            break;
        }
        index++;
        command=input[index];
    }
    if(command === "STOP" && numPieces<=countOfPiece){
        console.log(`${countOfPiece-numPieces} pieces are left.`);
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
