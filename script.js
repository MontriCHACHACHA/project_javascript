const btnred = document.getElementById("btnred");
const btnblue = document.getElementById("btnblue");
const btnyellow = document.getElementById("btnyellow");
const btnblack = document.getElementById("btnblack");

const box = document.getElementById("box");

btnred.addEventListener("click" , () => {
    box.style.backgroundColor = "red";
});

btnblue.addEventListener("click" , () => {
    box.style.backgroundColor = "blue";
});

btnyellow.addEventListener("click" , () => {
    box.style.backgroundColor = "yellow";
});

btnblack.addEventListener("click", () => {
    box.style.backgroundColor = "black";
});