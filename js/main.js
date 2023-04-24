let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let menu3 = document.getElementById("menu3");
let menu4 = document.getElementById("menu4");
let menu5 = document.getElementById("menu5");
let menu11 = document.getElementById("menu11");
let menu21 = document.getElementById("menu21");
let menu31 = document.getElementById("menu31");
let menu41 = document.getElementById("menu41");
let menu51 = document.getElementById("menu51");


function showOne1() {
    menu11.classList.toggle("mystyle");
}
function showTwo1() {
    menu21.classList.toggle("mystyle");
}
function showThree1() {
    menu31.classList.toggle("mystyle");
}
function showFour1() {
    menu41.classList.toggle("mystyle");
}
function showFiv1e() {
    menu51.classList.toggle("mystyle");
}
function showOne() {
    menu1.classList.toggle("mystyle");
}
function showTwo() {
    menu2.classList.toggle("mystyle");
}
function showThree() {
    menu3.classList.toggle("mystyle");
}
function showFour() {
    menu4.classList.toggle("mystyle");
}
function showFive() {
    menu5.classList.toggle("mystyle");
}


let backIcon = document.getElementById("icon");
console.log(backIcon)
backIcon.onclick = function() {
    window.history.back();
}