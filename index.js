let myFriends = ["Tyrion", "Tyler Durden", "Dragonborn", "Joshua Graham", "Jon Snow"];
let singingButton = document.getElementById("sing");
let lyricArray = [];

let createElement = function(nodeToAppend, elementType, contentToAppend) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    nodeToAdd.appendChild(nodeText);

    nodeToAppend.appendChild(nodeToAdd);
}

let createNodeAndClass = function(elementType, contentToAppend, elementClass) {
    let nodeToAdd = document.createElement(elementType);
    let nodeHeader = document.createElement("h3");
    let nodeText = document.createTextNode(contentToAppend);
    nodeToAdd.className = elementClass;
    nodeHeader.appendChild(nodeText);
    nodeToAdd.appendChild(nodeHeader);

    document.body.appendChild(nodeToAdd);
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


document.addEventListener('DOMContentLoaded', function (){

    // manipulate elements
    singingButton.addEventListener("click", () => {
        //console.log("You clicked me");
        /*
        myFriends.forEach(function(item){
            console.log(`${item.toUpperCase()}`);
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
        */

        for(item in lyricArray){
            createNodeAndClass("div", lyricArray[item]["friendName"], "friend");
            let divFriendNames = document.getElementsByClassName("friend");
            //createElement(divFriendNames[item], "p", "stuff");
            for(item2 in lyricArray[item]["friendLyric"]){
                createElement(divFriendNames[item], "p", lyricArray[item]["friendLyric"][item2]);

            }
        }
    });

});
