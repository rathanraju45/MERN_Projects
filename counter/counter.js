let value = 0;
let valueElement = document.getElementsByClassName('value')[0];
valueElement.innerHTML = value;
let plus = document.getElementById('plus');
let minus = document.getElementById("minus");

function increment() {
    value = value + 1;
    valueElement.innerHTML = value;
}

function decrement() {
    value = value - 1;
    valueElement.innerHTML = value;
}