// Task 1
let id = 1;
let delay = 5000;
let next = document.getElementById('bl5').innerText;
function task1() {
    let timerID = setInterval(delayChanges, delay);
    function delayChanges() {
        if (id === 1) {
            let current = document.getElementById('bl1').innerText;
            document.getElementById('bl1').innerText = next;
            next = current;
        }
        else {
            if (id > 5) {
                clearInterval(timerID);
            }
            let current = document.getElementById('bl'+id).innerText;
            document.getElementById('bl'+id). innerText = next;
            next = current;
        }
        id += 1;
        clearInterval(timerID);
        delay += 5000;
        task1();
    }
}

// Task 2
function task2() {
    let counter = 1;
    let timerID = setInterval(setBold, 5000);
    function setBold() {
        if (counter % 2 === 1) {
            document.getElementById('bl3').style.fontWeight="bold";
        }
        else {
            document.getElementById('bl3').style.fontWeight="normal";
        }
        counter += 1;
    }
}

let flag = 0;
function onFocus() {
    alert('Ви натиснули на поле E-Mail');
    setTimeout(function () {
        if (flag === 0) {
            document.getElementById('bl1').style.fontWeight="bold";
            document.getElementById('bl5').style.fontWeight="bold";
            flag = 1;
        }
        else {
            document.getElementById('bl1').style.fontWeight="normal";
            document.getElementById('bl5').style.fontWeight="normal";
            flag = 0;
        }
    }, 5000);
}

// Task 3
async function task3(userName,reposName) {
    let response = await fetch("https://api.github.com/repos/" + userName + "/" + reposName + "/commits");
    if (response.ok) {
        let commits = await response.json();
        console.log(commits);
        let log = [];
        let name = [];
        let mes = [];
        for (let i = 0; i < commits.length; i++) {
            log.push('\n' + commits[i].author.login);
            name.push('\n' + commits[i].commit.author.name);
            mes.push('\n' + commits[i].commit.message);
        }
        document.getElementById('userLogin').innerText = log;
        document.getElementById('userName').innerText = name;
        document.getElementById('commitMessage').innerText = mes;
    } else {
        document.getElementById('error').style.padding = "20px";
        document.getElementById('error').style.border = "solid red 3px";
        document.getElementById('error').innerText = 'Error: ' + response.status;
    }
}

// Task 4
function task4() {
    callbacks(function (){
        console.log('First Callback');
    }, function () {
        console.log('Second Callback');
    })
}
function callbacks(callback1, callback2) {
    console.log('Task 4:');
    callback1();
    callback2();
}

// Task 5
let nums = [];
function addNum() {
    nums.push(document.getElementById('number').value);
    document.getElementById('number').value = '';
}
function task5() {
    console.log(nums);
    let str1 = "Ваші числа: " + nums;
    let str2 = "\nПісля сортування: " + quickSort(nums);
    document.getElementById('result').innerText = str1 + str2;
}
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}