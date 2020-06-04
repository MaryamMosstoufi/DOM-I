// Stretch Assignment - Digital Timer
let timer = document.getElementsByClassName('digits');
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

let secondTensValue = 0;
let secondOnesValue = 0;
let msHundredsValue = 0;
let msTensValue;

let secondMax = 10
let msMax = secondMax * 100;
//const eachMsTens = setInterval(setMsTens, 1);


for (i = 10; i <= msMax; i++) {
    (function (i) {
        setInterval(function () {
            msTensValue = (i % 10);
            return (msTens.textContent = msTensValue);
        }, 1000)
    })(i);
}


