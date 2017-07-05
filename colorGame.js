var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var squares= document.querySelectorAll(".square");
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();


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

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new color from new array
    pickedColor = pickColor();
    //reset display and nav
    h1.style.backgroundColor = document.body.style.backgroundColor;
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    //reset color of squares 
    for(var i = 0; 0 < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    };
    
});

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; 0 < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; 0 < squares.length; i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
})

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
            resetButton.textContent = "Play Again?"
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