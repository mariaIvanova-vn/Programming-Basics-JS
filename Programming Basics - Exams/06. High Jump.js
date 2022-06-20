function highJump(input) {
    let targetJump = Number(input[0]);    //231
    let startHeight = targetJump - 30;     //201
    let index = 1;
    let jump = Number(input[index]);        //205
    let jumpCount = 1;
    let badJumpCount=0;

    while (jump <= targetJump) {
        if (jump > startHeight) { 
            startHeight += 5;
            badJumpCount = 0;
        }
        else {
            badJumpCount++;
            if (badJumpCount == 3) {
                console.log(`Tihomir failed at ${startHeight}cm after ${jumpCount} jumps.`);
                return;
            }
        }
        jump = Number(input[++index]);
        jumpCount++;
    }
    console.log(`Tihomir succeeded, he jumped over ${targetJump}cm after ${jumpCount} jumps.`);
}

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])
