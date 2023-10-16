// JavaScript source code
var speed = 0;
var prevSpeed = 0;
var currentScale = 1;
function Increasespeed() {
    if (speed < 180) {
        speed = speed + 10;
        addclass();
        currentScale = currentScale + 1;
        changeActive();
        changetext()
    }
}

function Decreasespeed() {
    if (speed > 0) {
        speed = speed - 10;
        addclass();
        changeActive();
        currentScale = currentScale - 1;
        changetext()
        
    } 
}

function addclass() {
    let newClass = "speed-" + speed;
    let prevClass = "speed-" + prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if (el.classList.contains(prevClass)) {
        el.classList.remove(prevClass);
        el.classList.add(newClass);
    }
    prevSpeed = speed;
}

function changeActive() {
    let tempclass = "Speedometer-scale-" + currentScale;
    let el = document.getElementsByClassName(tempclass)[0];
    el.classList.toggle("active");
}

function changetext() {
    let el = document.getElementsByClassName("km")[0];
    el.innerText = speed;
}