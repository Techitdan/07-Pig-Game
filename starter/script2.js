'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const maxScore = document.querySelector('.input-max-score');

const dice1El = document.querySelector('.dice-1');
const dice2El = document.querySelector('.dice-2');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//starting conditions
function init() {

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  maxScore.value = 100;
  playing = true;
  dice1El.classList.add('hidden');
  dice2El.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  document.getElementById('name--0').textContent = 'PLAYER 1';
  document.getElementById('name--1').textContent = 'PLAYER 2';
}
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //  1. Generating the die random roll
    const dice1 = Math.trunc(Math.random() * 6) + 1;
    const dice2 = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    dice1El.classList.remove('hidden');
    dice2El.classList.remove('hidden');
    dice1El.src = `dice-${dice1}.png`;
    dice2El.src = `dice-${dice2}.png`;
    
    //Check if the dice rolled is a 1, switch to next player
    if (dice1 !== 1 && dice2 !== 1) {
      currentScore += dice1 + dice2;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // Add dice rolled to current score
    } else {
      //switch to the next player

      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if the player's score is >= 100
    if (scores[activePlayer] >= maxScore.value) {
      //Finish the game
      playing = false;
      dice1El.classList.add('hidden');
      dice2El.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
/* 
      if (activePlayer === 0) {
        document.getElementById('name--0').textContent = 'Winner';
      } else if (activePlayer === 1) {
        document.getElementById('name--1').textContent = 'Winner';
      }
 */  
activePlayer === 0 ?  document.getElementById('name--0').textContent = 'Winner' :
 document.getElementById('name--1').textContent = 'Winner';
  } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);