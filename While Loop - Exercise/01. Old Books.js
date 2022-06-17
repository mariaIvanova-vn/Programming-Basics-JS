function oldBooks(input){
    let searchBook=input[0];
    let book=input[1];
    let index=2;
    let count=0;
    while(book !== "No More Books"){
        if(book===searchBook){
            console.log(`You checked ${count} books and found it.`)
            return;
        }
        book=input[index];
        index++;
        count++;       
    }
    console.log("The book you search is not here!");
    console.log(`You checked ${count} books.`)
}

oldBooks (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
