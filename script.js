'use strict';

const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');
const diceRemove = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//gane starting conditions!
let scores, currentScore, activePlayer, playing;
const initialize = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // scorePlayer0.textContent = 0;
  // scorePlayer1.textContent = 0;
  diceRemove.classList.add('hidden');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  diceRemove.classList.add('hidden');
};
initialize();
// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;
// scorePlayer0.textContent = 0;
// scorePlayer1.textContent = 0;
// diceRemove.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// scorePlayer0.textContent = 0;
// scorePlayer1.textContent = 0;
// diceRemove.classList.add('hidden');
//rolling dice functionalty!

rollButton.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display dice.
    diceRemove.classList.remove('hidden');
    diceRemove.src = `dice-${dice}.png`;
    //3. if rollled 1,switch to next player.

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // player0.classList.toggle('player--active');
      // player1.classList.toggle('player--active');
      switchPlayer();
    }
  }
  //1. generate random dice roll.(math.trunc helps remove decimasls)
});
// console.log(switchPlayer);

buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceRemove.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      // document.querySelector('.btn--roll').classList.add('hidden');
      // document.querySelector('.btn--hold').classList.add('hidden');
      // document.querySelector('.dice').classList.add('hidden');
    } else {
      switchPlayer();

      // document.querySelector('.btn--roll').classList.add('hidden');
      // document.querySelector('.btn--hold').classList.add('hidden');
    }
  }
});

buttonNew.addEventListener('click', initialize);
//   const scores = [0, 0];
//   let currentScore = 0;
//   let activePlayer = 0;
//   let playing = true;
//   scorePlayer0.textContent = 0;
//   scorePlayer1.textContent = 0;
//   diceRemove.classList.add('hidden');

//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   player0.classList.toggle('player--active');
//   player1.classList.toggle('player--active');
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   document.querySelector('#current--0').textContent = 0;
//   document.querySelector('#current--1').textContent = 0;
//   document.querySelector('#score--0').textContent = 0;
//   document.querySelector('#score--1').textContent = 0;
//   diceRemove.classList.add('hidden');
// });

//  newAge = function (birthYear) {
//   const now = 2037;
//   const age = now - birthYear;
//   return age;
// };
// newAge(1997);
// console.log(now);const
