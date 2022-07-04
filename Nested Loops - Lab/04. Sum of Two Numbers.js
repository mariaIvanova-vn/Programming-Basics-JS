function sum(input){
    let first=Number(input[0]);
    let second=Number(input[1]);
    let magicNum=Number(input[2]);
    let count=0;

for (let i = first; i <=second; i++) {
    for (let j = first; j <=second; j++) {
        count++;
      if(i+j===magicNum){
        console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
        return;
      }        
    }    
}
console.log(`${count} combinations - neither equals ${magicNum}`);
}

sum (["1",
"10",
"5"])