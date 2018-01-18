let myFriends = ["Tyrion", "Tyler Durden", "Dragonborn", "Joshua Graham", "Jon Snow"];
let divFriend = document.getElementById("friend");
let lyricArray = [];
let createElement = function(nodeToAppend, elementType, contentToAppend) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    nodeToAdd.appendChild(nodeText);

    nodeToAppend.appendChild(nodeToAdd);
}

document.addEventListener('DOMContentLoaded', function (){

    // manipulate elements
    console.log("dom content loaded");
    
    });

while (divFriend.hasChildNodes()) {
    divFriend.removeChild(divFriend.lastChild);
}

myFriends.forEach(function(item){
    let lyricLine = "";
    let lyricLineArray = [];
    for(i = 99; i > 0; i--){
        if(i > 2){
            lyricLine = `${i} lines of code in the file, ${i} lines of code; ${item} strikes one out, clears it all out, ${i -1} lines of code in the file`;
        }else if(i === 1){
            lyricLine = `${i} line of code in the file, ${i} line of code; ${item} strikes one out, clears it all out, no more lines of code in the file`;
        }else{
            lyricLine = `${i} lines of code in the file, ${i} lines of code; ${item} strikes one out, clears it all out, ${i -1} line of code in the file`;
        }
        lyricLineArray.push(lyricLine);
    }

    lyricArray.push({
        friendName: item,
        friendLyric: lyricLineArray
    });
});

for(item in lyricArray){
    createElement(divFriend, "p", lyricArray[item]["friendName"]);
    for(item2 in lyricArray[item]["friendLyric"]){
        createElement(divFriend, "p", lyricArray[item]["friendLyric"][item2]);
    }
}