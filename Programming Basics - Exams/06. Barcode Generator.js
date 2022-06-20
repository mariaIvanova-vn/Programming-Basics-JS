function barcode(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result='';

    let lastFromstart=Math.floor((start / 1000) % 10)
    let lastFromEnd = Math.floor((end / 1000) % 10)

    let thirdStart=Math.floor((start / 100) % 10)
    let thirdEnd = Math.floor((end / 100) % 10)
    
    let secondStart=Math.floor((start / 10) % 10)
    let secondEnd=Math.floor((end / 10) % 10)
    
    let firstStart=Math.floor(start % 10)
    let firstEnd=Math.floor(end % 10)


    for (let i = lastFromstart; i <= lastFromEnd; i++) {
        for (let j = thirdStart; j <=thirdEnd; j++) {
            for (let k = secondStart; k <= secondEnd; k++) {
                for (let l = firstStart; l <= firstEnd; l++){
                  if(i%2!==0 && j%2!==0 && k%2!==0 && l%2!==0){
                   result+= `${i}${j}${k}${l} `; 
                  }
                }                
            }            
        }  
             
    }
    console.log(result); 
}

barcode (["2345",
"6789"])