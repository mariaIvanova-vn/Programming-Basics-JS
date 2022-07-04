function excursionSale(input) {

    let countSee = Number(input[0]);
    let countMountain = Number(input[1]);
    let index = 2;
    let command = input[index];
    let price = 0;

    while (command !== "Stop") {
        if (countSee === 0 && countMountain === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }

        if (command === "sea" && countSee > 0) {
            price += 680;
            countSee--;
        }
        else if (command === "mountain" && countMountain > 0) {
            price += 499;
            countMountain--;
        }
        command = input[++index];
    }
    console.log(`Profit: ${price} leva.`);
}
excursionSale(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])

