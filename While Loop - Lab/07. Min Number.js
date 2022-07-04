<<<<<<< HEAD
function minNumber(input){
    let readText=input[0];
    let index=1;
    let minNumber=Number.MAX_SAFE_INTEGER;

    while(readText !== "Stop"){
        let number=Number(readText);
        if(number<minNumber){
            minNumber=number;
        }
        readText=input[index];
        index++;
    }
    console.log(minNumber);
}

minNumber (["100",
"99",
"80",
"70",
"Stop"])
=======
function minNumber(input){
    let readText=input[0];
    let index=1;
    let minNumber=Number.MAX_SAFE_INTEGER;

    while(readText !== "Stop"){
        let number=Number(readText);
        if(number<minNumber){
            minNumber=number;
        }
        readText=input[index];
        index++;
    }
    console.log(minNumber);
}

minNumber (["100",
"99",
"80",
"70",
"Stop"])
>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
