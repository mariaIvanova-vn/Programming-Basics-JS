function equalSums(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine="";

    for (let i = start; i <=end; i++) {
        let currNum="" + i;
        let oddSum=0;
        let evenSum=0;
        for (let j = 0; j <= currNum.length; j++) {
            let currDigit= Number(currNum.charAt(j));
            if(j % 2 === 0){
                evenSum+=currDigit;
            }
            else{
                oddSum+=currDigit;
            }
        }
        if(oddSum == evenSum){
            printLine += `${i} `
        }
    }
    console.log(printLine);
}

equalSums (["100000",
"100050"])