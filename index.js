const item = document.getElementsByClassName("item");
const display = document.getElementById("points");
var lit = 73;
var points = 0;
var chosenColumn = Math.floor((Math.random() * 6));
item[chosenColumn].style.backgroundColor = "#f5f5f5";
function goDown() {
    item[chosenColumn].style.backgroundColor = "#000";
    chosenColumn = chosenColumn + 7;
    if (chosenColumn > 76) {
        chosenColumn = Math.floor((Math.random() * 6));
        points--;
        display.innerHTML = points;
    }
    if (item[chosenColumn].style.backgroundColor == "rgb(127, 255, 212)") {
        chosenColumn = Math.floor((Math.random() * 6));
        points++;
        display.innerHTML = points;
    }
    item[chosenColumn].style.backgroundColor = "#f5f5f5";
}
function start() {
    document.getElementById("play").style.display = "none";
    setInterval(goDown, 100);
}

document.addEventListener("keyup", move);
function left() {
    item[lit].style.backgroundColor = "#000";
    lit--;
    if (lit < 70) {
        lit = 76;
    }
    item[lit].style.backgroundColor = "rgb(127, 255, 212)";
}
function right() {
    item[lit].style.backgroundColor = "#000";
    lit++;
    if (lit > 76) {
        lit = 70;
    }
    item[lit].style.backgroundColor = "rgb(127, 255, 212)";
}
function move(event) {
    var checkCode = event.keyCode;
    if (checkCode == 37 || checkCode == 65) {
        left()
    }
    if (checkCode == 39 || checkCode == 68) {
        right()
    }
}