let myFriends = ["Tyrion", "Tyler Durden", "Dragonborn", "Joshua Graham", "Jon Snow"];
const singingButton = document.getElementById("sing");
let lyricArray = [];
let containerDiv = document.getElementsByClassName("container");
let mainDiv = document.getElementById("displayContent");

let createElement = function(nodeToAppend, elementType, contentToAppend, elementClass = null) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    if(elementClass != null){
        
    }

    nodeToAdd.appendChild(nodeText);
    nodeToAppend.appendChild(nodeToAdd);
}

let createNodeAndClass = function(elementType, contentToAppend, elementClass) {
    let nodeToAdd = document.createElement(elementType);
    let nodeHeader = document.createElement("h3");
    let nodeText = document.createTextNode(contentToAppend);
    elementClass.forEach((item)=> {
        nodeToAdd.className += `${item} `;
        console.log(item);
        console.log(nodeToAdd.className);
    });

    console.log(nodeToAdd.className);
    
    nodeHeader.appendChild(nodeText);
    nodeToAdd.appendChild(nodeHeader);
    mainDiv.appendChild(nodeToAdd);
}

let eraseAllChildNodes = (nodeToClean) => {
    while (nodeToClean.firstChild) {
        nodeToClean.removeChild(nodeToClean.firstChild);
    }
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

    singingButton.addEventListener("click", () => {

        //Delete Placeholder
        if(mainDiv.children.length === 1){
            eraseAllChildNodes(mainDiv);
        }

        if(mainDiv.children.length === 0){
            for(item in lyricArray){
                createNodeAndClass("div", lyricArray[item]["friendName"], ["friend","card", "z-depth-5", "center-align"]);
                let divFriendNames = document.getElementsByClassName("friend");
                for(item2 in lyricArray[item]["friendLyric"]){
                    createElement(divFriendNames[item], "p", lyricArray[item]["friendLyric"][item2]);
                }
            }
        }else{
            
            eraseAllChildNodes(mainDiv);
        }
    });

});