function sum(input){
    let inputNumber=Number(input[0]);
    let sum=0;
    let number=Number(input[1]);
    sum+=number;
    let count=2;

    while(sum<inputNumber){
        number=Number(input[count]);
        count++;
    sum+=number;
    }
    console.log(sum);
}

sum (["100",
"10",
"20",
"30",
"40"])
