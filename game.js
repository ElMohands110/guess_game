// let x = document.querySelector('.message');
//  x.textContent = 'Welcome...';
// console.log(x);

// let check = document.getElementById("check");
// check.onclick = function() {
//     let x = document.querySelector('.message');
//     x.nodeValue;
//     console.log(x);
// }

'use strict';
let secretNumber = Math.trunc(Math.random()* 20) +1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    let guess = document.querySelector('.guess').value;
    if (!guess) {
        document.querySelector('.message').textContent = 'Please Enter Number';
        document.querySelector('body').style.backgroundColor = '#333';
    }
    else if (guess == secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guess').value = '';
        if (score > highScore){
            highScore = score;
        }
        document.querySelector('.highScore').textContent = highScore;
    }
    else if (guess < secretNumber) {
        if (guess < 1 || guess > 20) {
            document.querySelector('.message').textContent = 'Sorry, Your Guess Must Be From 1 To 20';
            document.querySelector('.guess').value = '';
        }
        else {
            score--;
            document.querySelector('.score').textContent = score;
            if (score<=0) {
                score =0;
                document.querySelector('.message').textContent = 'Game Over 😢';
                document.querySelector('.number').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.guess').value = '';
            }
            else {
                document.querySelector('.message').textContent = 'Too Less';
                document.querySelector('.guess').value = '';
                document.querySelector('body').style.backgroundColor = '#333';
            }
        }
    }
    else if (guess > secretNumber) {
        if (guess < 1 || guess > 20) {
            document.querySelector('.message').textContent = 'Sorry, Your Guess Must Be From 1 To 20';            document.querySelector('.guess').value = '';
        }
        else {
            score--;
            document.querySelector('.score').textContent = score;
            if (score<=0) {
                score=0;
                document.querySelector('.message').textContent = 'Game Over 😢';
                document.querySelector('.number').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.guess').value = '';
            }
            else {
                document.querySelector('.message').textContent = 'Too Much';
                document.querySelector('.guess').value = '';
                document.querySelector('body').style.backgroundColor = '#333';
            }
        }
    }
});
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
});