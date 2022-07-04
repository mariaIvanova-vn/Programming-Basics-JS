<<<<<<< HEAD
function solve(input) {
    let destination = "";
    while (destination != "End") {
        destination = input.shift();
        let priceDestination = Number(input.shift());
        let saving = 0;
        for (let savingTot = 0; savingTot < priceDestination;) {
            saving = Number(input.shift());
            savingTot += saving
            if (savingTot >= priceDestination) {
                console.log(`Going to ${destination}!`)
            }
        }
    }
}

solve (["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
=======
function solve(input) {
    let destination = "";
    while (destination != "End") {
        destination = input.shift();
        let priceDestination = Number(input.shift());
        let saving = 0;
        for (let savingTot = 0; savingTot < priceDestination;) {
            saving = Number(input.shift());
            savingTot += saving
            if (savingTot >= priceDestination) {
                console.log(`Going to ${destination}!`)
            }
        }
    }
}

solve (["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
"End"])