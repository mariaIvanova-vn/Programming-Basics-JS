<<<<<<< HEAD
function maxNumber(input){
    let readText=input[0];
    let index=1;
    let maxNumber=Number.MIN_SAFE_INTEGER;

    while(readText !== "Stop"){
        let number=Number(readText);
        if(number>maxNumber){
            maxNumber=number;
        }
        readText=input[index];
        index++;
    }
    console.log(maxNumber);
}

=======
function maxNumber(input){
    let readText=input[0];
    let index=1;
    let maxNumber=Number.MIN_SAFE_INTEGER;

    while(readText !== "Stop"){
        let number=Number(readText);
        if(number>maxNumber){
            maxNumber=number;
        }
        readText=input[index];
        index++;
    }
    console.log(maxNumber);
}

>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
maxNumber (["100","99","80","70","Stop"])