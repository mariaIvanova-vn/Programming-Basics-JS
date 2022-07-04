<<<<<<< HEAD
function uniquePinCodes(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    for (let i = 2; i <= first; i += 2) {
        for (let j = 2; j <= second; j++) {
            for (let k = 2; k <= third; k += 2) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    console.log(i + " " + j + " " + k);
                }
            }
        }
    }
}

uniquePinCodes(["8",
"2",
"8"])

=======
function uniquePinCodes(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    for (let i = 2; i <= first; i += 2) {
        for (let j = 2; j <= second; j++) {
            for (let k = 2; k <= third; k += 2) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    console.log(i + " " + j + " " + k);
                }
            }
        }
    }
}

uniquePinCodes(["8",
"2",
"8"])

>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
