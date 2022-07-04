function sumAndProduct(input) {
    let n = Number(input[0]);
    let number="";

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    if (sum === product) {
                        if (n % 10 == 5) {
                            number+=a;
                            number+=b;
                            number+=c;
                            number+=d;
                            console.log(number);
                          //  console.log(`${a}${b}${c}${d}`);
                            return;
                        }
                    }
                   else if (product / sum == 3) {
                        if (n % 3 == 0) {
                            number+=d;
                            number+=c;
                            number+=b;
                            number+=a;
                            console.log(number);
                           // console.log(`${d}${c}${b}${a}`);
                            return;
                        }
                    }
                }
            }
        }
    }
    console.log("Nothing found");
}

sumAndProduct(["123"])