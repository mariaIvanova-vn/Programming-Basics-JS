<<<<<<< HEAD
function nums(input){
    let number=Number(input[0]);
    let current=1;
    let isBigger=false;
    let printCurrentLine="";

    for (let row = 1; row <=number; row++){
        for (let col = 1; col <= row; col++) {
            if(current>number){
                isBigger=true;
                break;
            }
            printCurrentLine+=current + " ";
            current++;
        }
       console.log(printCurrentLine);
       printCurrentLine="";
       if(isBigger){  break;  }
    }
}

=======
function nums(input){
    let number=Number(input[0]);
    let current=1;
    let isBigger=false;
    let printCurrentLine="";

    for (let row = 1; row <=number; row++){
        for (let col = 1; col <= row; col++) {
            if(current>number){
                isBigger=true;
                break;
            }
            printCurrentLine+=current + " ";
            current++;
        }
       console.log(printCurrentLine);
       printCurrentLine="";
       if(isBigger){  break;  }
    }
}

>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
nums (["1"])