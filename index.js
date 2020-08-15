var state = ["X", "O"]
var stateIndex = 0

var wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 5, 9],
    [3, 5, 7],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    ]

var boxes = [];
for(var i = 1;i < 10;i++){
    boxes.push(document.getElementById(i.toString()))
}

function placeXorO(element){
    element.innerText = state[stateIndex]
    stateIndex = (stateIndex === 0) ? 1 : 0;

    if(checkWin()){
        alert("Game won!");
    }
}
function checkWin(){
   for(var i = 0;i < wins.length;i++){
       win = wins[i]
       if(
        (boxes[win[0]-1].innerText === boxes[win[1]-1].innerText)&&
        (boxes[win[1]-1].innerText == boxes[win[2]-1].innerText) && 
        (boxes[win[0]-1].innerText.length > 0)){
           return true;
       }
   }
   return false
}