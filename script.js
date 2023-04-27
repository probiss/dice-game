'use strict';

// Selecting elements
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality

btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll
    // 2. Display dice
    // 3. Check for rolled 1: if true, switch to next player
    console.log('Rolling dice')
})