'use strict';

let secretNumber = Math.round(Math.random() * 19) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess > 20) {
    displayMessage('🚫 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high 📈' : 'to low 📉');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game 😛');
      displayScore(0);
    }
  }
});

//play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 19) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
