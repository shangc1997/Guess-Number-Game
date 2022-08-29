'use strict';
/*
//lec_DOM
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

//Project 1 - inital version
var random_num = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var current_high_score = 0;
var high_score = 0;

//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess_num = Number(document.querySelector('.guess').value);

  //no input
  if (!guess_num) {
    document.querySelector('.message').textContent = 'No Number Input';

    //correct answer
  } else if (guess_num === random_num) {
    document.querySelector('.message').textContent = '💯 Correct Number!';

    //set high score
    high_score = score;
    if (current_high_score <= high_score) {
      document.querySelector('.highscore').textContent = high_score;
      current_high_score = high_score;
    } else {
      document.querySelector('.highscore').textContent = current_high_score;
    }

    //style the correst answer
    document.querySelector('.number').textContent = random_num;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = 'red';

    //out of range
  } else if (guess_num < 1 || guess_num > 20) {
    document.querySelector('.message').textContent =
      'Out of Range, Please try again';

    //guess too low
  } else if (guess_num < random_num) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
    }

    //guess to high
  } else if (guess_num > random_num) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
    }

    //wrong answer
  } else {
    document.querySelector('.message').textContent =
      'Wrong Guess, Please try again';
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  //change the style back
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = 'white';

  //change the content back
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = current_high_score;
  document.querySelector('.guess').value = '';

  //assign new random value
  random_num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
*/
//Project 1 - dry version
let random_num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let current_high_score = 0;
let high_score = 0;

//display numbers text
const display_numbers = function (numbers) {
  document.querySelector('.number').textContent = numbers;
};

//display message text
const display_message = function (message) {
  document.querySelector('.message').textContent = message;
};

//display score text
const display_score = function (scores) {
  document.querySelector('.score').textContent = scores;
};

//display high score text
const display_high_score = function (high_scores) {
  document.querySelector('.highscore').textContent = high_scores;
};

//change style
const change_style = function (body_color, number_width, number_color) {
  document.querySelector('body').style.backgroundColor = body_color;
  document.querySelector('.number').style.width = number_width;
  document.querySelector('.number').style.backgroundColor = number_color;
};

//check button logic
const check_logic = function () {
  const guess_num = Number(document.querySelector('.guess').value);

  //no input
  if (!guess_num) {
    display_message('No Number Input');

    //guess correct answer
  } else if (guess_num === random_num) {
    //set high score
    high_score = score;
    if (current_high_score <= high_score) {
      display_high_score(high_score);
      current_high_score = high_score;
    } else {
      display_high_score(current_high_score);
    }

    //style the correst answer
    display_message('💯 Correct Number!');
    display_numbers(random_num);
    change_style('green', '30rem', 'red');

    //out of range
  } else if (guess_num < 1 || guess_num > 20) {
    display_message('Out of Range, Please try again');

    //guess too low or too high or use all the chance
  } else if (guess_num != random_num) {
    if (score > 0) {
      guess_num < random_num
        ? display_message('Too Low')
        : display_message('Too High');
      score--;
      display_score(score);
    } else {
      display_message('You Lost the Game');
    }

    //guess wrong answer
  } else {
    display_message('Wrong Guess, Please try again');
  }
};

//to restart the game
const restart = function () {
  //change the style and content
  score = 20;
  display_message('Start guessing...');
  display_score(score);
  display_high_score(current_high_score);
  document.querySelector('.guess').value = '';
  change_style('black', '15rem', 'white');

  //assign new random value
  random_num = Math.trunc(Math.random() * 20) + 1;
  display_numbers('?');
};

//click interact
document.querySelector('.check').addEventListener('click', () => check_logic());
document.querySelector('.again').addEventListener('click', () => restart());
