var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector('body');

function setGradient() {
    console.log(color1.value);
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function generateRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setRandomGradient(){
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color1.value = generateRandomColor();
color2.value = generateRandomColor();

setRandomGradient();