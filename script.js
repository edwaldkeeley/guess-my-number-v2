'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🚫No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.failed').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    if (highscore === 20) {
      document.querySelector('.failed').textContent = 'Reached Limit';
      displayMessage('Reached Limit🏆');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#dfe223';
      document.querySelector('.number').style.backgroundColor = '#e4ae19';
      document.querySelector('.number').style.width = '15rem';
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.failed').textContent = 'Failed';
      document.querySelector('body').style.backgroundColor = '#cf4545';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.failed').textContent = 'Guess My Number!';
  document.querySelector('.number').style.backgroundColor = '#fff'
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
