var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var squares= document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var pickedColor = pickedColor();


colorDisplay.textContent = pickedColor;

function generateRandomColors(num){
    //create an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //generate random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


for(var i = 0; 0 < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeAllColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = document.body.style.backgroundColor;
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeAllColors(color){
    //loop all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}