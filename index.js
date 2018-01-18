let myFriends = ["Tyrion", "Tyler Durden", "Dragonborn", "Joshua Graham", "Jon Snow"];

myFriends.forEach(function(item){
    console.log(`${item.toUpperCase()}:`);
    for(i = 99; i > 0; i--){
        if(i > 2){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${item} strikes one out, clears it all out, ${i -1} lines of code in the file`);
        }else if(i === 1){
            console.log(`${i} line of code in the file, ${i} line of code; ${item} strikes one out, clears it all out, no more lines of code in the file`);
        }else{
            console.log(`${i} lines of code in the file, ${i} lines of code; ${item} strikes one out, clears it all out, ${i -1} line of code in the file`);
        }
    }
});