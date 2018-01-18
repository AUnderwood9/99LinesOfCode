let myFriends = ["Tyrion", "Tyler Durden", "Dragonborn", "Joshua Graham", "Jon Snow"];
let divFriend = document.getElementById("friend");
let lyricArray = [];
let createElement = function(nodeToAppend, elementType, contentToAppend) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    nodeToAdd.appendChild(nodeText);

    nodeToAppend.appendChild(nodeToAdd);
}

while (divFriend.hasChildNodes()) {
    divFriend.removeChild(divFriend.lastChild);
}

/*
myFriends.forEach(function(item){
    let upperCased = item.toUpperCase();
    console.log(`${upperCased}:`);
    for(i = 99; i > 0; i--){
        if(i > 1){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${item} strikes one out, clears it all out, ${i -1} lines of code in the file}`);
        }else{
            console.log(`${i} line of code in the file, ${i} line of code; ${item} strikes one out, clears it all out, no more lines of code in the file`);
        }
    }
});
*/

myFriends.forEach(function(item){
    let lyricLine = "";
    let lyricLineArray = [];
    for(i = 99; i > 0; i--){
        if(i > 1){
            lyricLine = `${i} lines of code in the file, ${i} lines of code; ${item} strikes one out, clears it all out, ${i -1} lines of code in the file`;
        }else{
            lyricLine = `${i} line of code in the file, ${i} line of code; ${item} strikes one out, clears it all out, no more lines of code in the file`;
        }
        lyricLineArray.push(lyricLine);
    }

    lyricArray.push({
        friendName: item,
        friendLyric: lyricLineArray
    });
});

console.log(lyricArray[1]["friendLyric"][0]);

for(item in lyricArray){
    //console.log(lyricArray[item].friendLyric);
    //console.log(lyricArray[item]["friendName"])
    createElement(divFriend, "p", lyricArray[item]["friendName"]);
    for(item2 in lyricArray[item]["friendLyric"]){
        createElement(divFriend, "p", lyricArray[item]["friendLyric"][item2]);
        /*
        for(item3 in lyricArray[item]["friendLyric"]){
        createElement(divFriend, "p", lyricArray[item]["friendLyric"][item3]);
        }*/
    }
}

/*
let nodeToAdd = document.createElement("p");
let nodeText = document.createTextNode(lyricArray[1]["friendName"]);
nodeToAdd.appendChild(nodeText);

divFriend.appendChild(nodeToAdd);
*/