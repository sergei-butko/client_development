// Task 1
function swap() {
    let el = document.getElementById('bl1a').innerHTML;
    document.getElementById('bl1a').innerHTML = document.getElementById('bl1b').innerHTML;
    document.getElementById('bl1b').innerHTML = el;
}

// Task 2
let a = 12;
let b = 34;
function square() {
    let square = a * b;
    let el = document.getElementById('photo').innerHTML;
    el = el + "\nПлоща прямокутника зі сторонами " + a + " та " + b + " дорівнює " + square;
    document.getElementById('photo').innerHTML = el;
}

// Task 3
function findMinMax() {
    let numbers = document.getElementById('text').value.split(" ");
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) { min = numbers[i]; }
        if (numbers[i] > max) { max = numbers[i]; }
    }
    alert("Мінімальне число = " + min + ", а максимальне = " + max);
    setCookie("Min", min);
    setCookie("Max", max);
}

function setCookie(name, val, maxAge) {
    if (maxAge === "") { document.cookie = name + " = " + val; }
    else { document.cookie = name + " = " + val + ";max-age=" + maxAge; }
}

function checkCookie() {
    let someCookie = document.cookie;
    if (someCookie !== "") {
        if (confirm("Бажаєте зберегти значення найбільшого і найменшого чисел?")) {
            if (confirm("Дані збережено. Бажаєте перезавантажити сторінку?")) {
                location.reload();
            }
        }
        else {
            if (confirm("Бажаєте видалити значення?")) {
                setCookie("Min", 0, 0);
                setCookie("Max", 0, 0);
            }
        }
    }
}

// Task 4
function checkBold() {
    let ch = document.getElementById('ch1');
    if (ch.checked) {
        sessionStorage.setItem('bold', '1');
        makeBold();
    }
    else {
        sessionStorage.setItem('bold', '0');
        makeBold();
    }
}

function makeBold() {
    if (sessionStorage.getItem('bold') === '1') {
        document.getElementById('h1').style.fontWeight="bold";
        document.getElementById('ul01').style.fontWeight="bold";
    }
    else {
        document.getElementById('h1').style.fontWeight="normal";
        document.getElementById('ul01').style.fontWeight="normal";
    }
}

// Task 5 - look index.html

// Task 6
function checkSessionStorage() {
    if (sessionStorage.getItem('bl2Flag') === '1') {
        document.getElementById('bl2').innerText = sessionStorage.getItem('bl2');
    }
    else {
        sessionStorage.setItem('def', document.getElementById('bl2').innerText);
    }
}

function addText() {
    document.getElementById('res1').innerHTML = document.getElementById('1in').value;
}

function saveChanges() {
    sessionStorage.setItem('bl2Flag', '1');
    sessionStorage.setItem('bl2', document.getElementById('res1').innerText);
    document.getElementById('bl2').innerText = sessionStorage.getItem('bl2');
}

function deleteChanges() {
    if (sessionStorage.getItem('bl2Flag') === '1') {
        sessionStorage.removeItem('bl2');
        sessionStorage.setItem('bl2Flag', '0');
        document.getElementById('bl2').innerText = sessionStorage.getItem('def');
    }
}