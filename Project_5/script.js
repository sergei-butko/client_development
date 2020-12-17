const work = document.querySelector('#work');
const anim = document.querySelector('#anim');
const square = document.querySelector('#square');
let canvas = document.querySelector('#cnAnim');
let ctx = canvas.getContext('2d');
let flag = 0;

const playSt = document.querySelector('#playSt');
const playCn = document.querySelector('#playCn');
const close = document.querySelector('#close');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reload = document.querySelector('#reload');
const message = document.querySelector('#message');
let timer;

playSt.addEventListener('click', function() {
    flag = 1;
    localStorage.clear();
    document.querySelector('#header').setAttribute(
        'style', 'height: 200px; display: block; padding: 0;');
    document.querySelector('#bl1').setAttribute('style', 'display: none;');
    document.querySelector('#bl2').setAttribute('style', 'display: none;');
    work.setAttribute('style', 'display: grid;');
    anim.setAttribute('style',  'display: block;');
    canvas.setAttribute('style',  'display: none;');
    message.innerHTML = 'Play Standard Clicked';
    localStorage.setItem(new Date(), 'Play Standard Clicked');
    document.querySelector("#LocalStorage").value = "";
    document.querySelector('#LocalStorage').setAttribute('rows', '0');
    square.style.left = anim.offsetWidth / 2 - 10 + 'px';
    square.style.top = anim.offsetHeight / 2 - 10 + 'px';
});

playCn.addEventListener('click', function() {
    flag = 2;
    localStorage.clear();
    document.querySelector('header').setAttribute(
        'style', 'height: 200px; display: block; padding: 0;');
    document.querySelector('#bl1').setAttribute('style', 'display: none;');
    document.querySelector('#bl2').setAttribute('style', 'display: none;');
    work.setAttribute('style', 'display: grid;');
    canvas.setAttribute('style',  'display: block;');
    anim.setAttribute('style',  'display: none;');
    message.innerHTML = 'Play Canvas Clicked';
    localStorage.setItem(new Date(), 'Play Canvas Clicked');
    document.querySelector("#LocalStorage").value = "";
    document.querySelector('#LocalStorage').setAttribute('rows', '0');
    DrawCanvas();
});

close.addEventListener('click', () => {
    work.setAttribute('style', 'display: none;');
    document.querySelector('#header').setAttribute(
        'style', 'display: grid; padding: 40px; height: auto;');
    document.querySelector('#bl1').setAttribute('style', 'display: block;');
    document.querySelector('#bl2').setAttribute('style', 'display: block;');
    message.innerHTML = 'Close Clicked';
    localStorage.setItem(new Date(), 'Close Clicked');
    stop.setAttribute('style', 'display: none;');
    start.setAttribute('style', 'display: block;');
    square.setAttribute('style', 'display: none;');
    clearInterval(timer);

    document.querySelector('#LocalStorage').setAttribute('rows', '10');
    let keys = Object.keys(localStorage);
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        document.querySelector('#LocalStorage').value +=
            localStorage.getItem(keys[i]) + ' - ' + keys[i] + '\n';
    }
});

start.addEventListener('click', () => {
    start.setAttribute('style', 'display: none;');
    stop.setAttribute('style', 'display: block');
    square.setAttribute('style', 'visibility:visible');
    message.innerHTML = 'Start Clicked';
    localStorage.setItem(new Date(), 'Start Clicked');
    if (flag === 1) { PlayAnim(); }
    if (flag === 2) { PlayCanvasAnim(); }
});

stop.addEventListener('click', () => {
    stop.setAttribute('style', 'display: none;');
    start.setAttribute('style', 'display: block;');
    message.innerHTML = 'Stop Clicked';
    localStorage.setItem(new Date(), 'Stop Clicked');
    clearInterval(timer);
});

reload.addEventListener("click", () => {
    reload.setAttribute('style', 'display: none;');
    start.setAttribute('style', 'display: block;');
    message.innerHTML = 'Reload Clicked';
    localStorage.setItem(new Date(), 'Reload Clicked');
    if (flag === 1) {
        square.style.left = anim.offsetWidth / 2 - 10 + 'px';
        square.style.top = anim.offsetHeight / 2 - 10 + 1 + 'px';
        square.style.visibility = 'visible';
    }
    if (flag === 2) { DrawCanvas(); }
});

function PlayAnim() {
    let i = 0;
    let k = 1;
    let top = anim.offsetHeight / 2 - 10;
    let left = anim.offsetWidth / 2 - 10;
    timer = setInterval(function() {
        i++;
        if (top === 135) {
            message.innerHTML = 'Touch the Wall';
            localStorage.setItem(new Date(), 'Touch the Wall');
        }
        if (top < 145) {
            if (k % 4 === 1) {
                square.style.left = left + 1 + 'px';
                left++;
            }
            else if (k % 4 === 2){
                square.style.top = top + 1 + 'px';
                top++;
            }
            else if (k % 4 === 3){
                square.style.left = left - 1 + 'px';
                left--;
            }
            else if (k % 4 === 0){
                square.style.top = top - 1 + 'px';
                top--;
            }
        }
        else {
            i = 0
            k = 1
            square.style.visibility = 'hidden';
            clearInterval(timer);
            message.innerHTML = 'Out of Area';
            localStorage.setItem(new Date(), 'Out of Area');
            stop.setAttribute('style', 'display: none');
            reload.setAttribute('style', 'display: block;');
        }
        if (i === k) {
            i = 0;
            k++;
        }
    }, 1);
}

function DrawCanvas() {
    let x = canvas.offsetWidth / 2 - 10;
    let y = canvas.offsetHeight / 2 - 10;
    ctx. beginPath();
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,10,10);
}

function PlayCanvasAnim() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
    let x = canvas.offsetWidth / 2 - 10;
    let y = canvas.offsetHeight / 2 - 10;
    let i = 0;
    let k = 1;
    timer = setInterval(function() {
        i++;
        if (y === 140) {
            message.innerHTML = 'Touch the Wall';
            localStorage.setItem(new Date(), 'Touch the Wall');
        }
        if (y < 145) {
            if (k % 4 === 1) {
                ctx.clearRect(x-1, y-1, 12, 12);
                ctx.fillRect(x+1,y,10,10);
                x++;
            }
            else if (k % 4 === 2){
                ctx.clearRect(x-1, y-1, 12, 12);
                ctx.fillRect(x,y+1,10,10);
                y++;
            }
            else if (k % 4 === 3){
                ctx.clearRect(x-1, y-1, 12, 12);
                ctx.fillRect(x-1,y,10,10);
                x--;

            }
            else if (k % 4 === 0){
                ctx.clearRect(x-1, y-1, 12, 12);
                ctx.fillRect(x,y-1,10,10);
                y--;
            }
        }
        else {
            i = 0
            k = 1
            ctx.clearRect(x-1, y-1, 12, 12);
            clearInterval(timer);
            message.innerHTML = 'Out of Area';
            localStorage.setItem(new Date(), 'Out of Area');
            stop.setAttribute('style', 'display: none');
            reload.setAttribute('style', 'display: block;');
        }
        if (i === k) {
            i = 0;
            k++;
        }
    }, 1);
}
