<<<<<<< HEAD
function password(input){
    let username=input[0];
    let password=input[1];
    let data=input[2];
    let count=3;

    while(data !== password){
        data=input[count];
        count++;
    }
    console.log(`Welcome ${username}!`)
}

password (["Nakov",
"1234",
"Pass",
"1324",
"1234"])
=======
function password(input){
    let username=input[0];
    let password=input[1];
    let data=input[2];
    let count=3;

    while(data !== password){
        data=input[count];
        count++;
    }
    console.log(`Welcome ${username}!`)
}

password (["Nakov",
"1234",
"Pass",
"1324",
"1234"])
>>>>>>> d3872ecdb483a6b8a5a3bb2eb280e65733bab02b
