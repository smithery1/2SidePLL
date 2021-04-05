'use strict';

const sortedPermKeys = ['Aa', 'Ab', 'E',  'H',  'Z',  'Ua', 'Ub',
                        'T',  'Y',  'F',  'Ja', 'Jb', 'Ra', 'Rb',
                        'V',  'Na', 'Nb', 'Ga', 'Gb', 'Gc', 'Gd']

let guessButtons = [];
let revealButton = null;
let solutionHeaderDiv = null;
let solutionStepsDiv = null;
let solutionDiv = null;

let currentPerm = null;

//import { renderVisible, renderHidden } from './modules/cube.js';

function init() {
    initCube(document.getElementById('cubeCanvas'));
    initGuessButtons();
    initRevealButton();
    initNextButton();
    initSolution();
    onNext();
}

function initGuessButtons() {
    let table = document.getElementById("buttonTable");
    let row = null;
    let index = 0;
    let rowCount = -1;
    for (const permKey of sortedPermKeys) {
    	var button = document.createElement("input");
    	button.type = "button";
        button.className = "guess";
    	button.value = permKey;
    	button.id = permKey;
        if (button.addEventListener) {
            button.addEventListener('click', onGuess, false);
        } else if (button.attachEvent) {
            button.attachEvent('onclick', onGuess);
        }
        guessButtons.push(button);
        
        if (index % 7 == 0) {
            index = 0;
            ++rowCount;
            row = table.insertRow(rowCount);
        }
        ++index;
        let cell = row.insertCell(-1);
        cell.appendChild(button);
    }
}

function onGuess(event) {
    if (event.target.id == currentPerm.perm) {
        onReveal();
    } else {
        event.target.className = "incorrect";
    }
}

function initRevealButton() {
    revealButton = document.getElementById('reveal')
    if (revealButton.addEventListener) {
        revealButton.addEventListener('click', onReveal, false);
    } else if (revealButton.attachEvent) {
        revealButton.attachEvent('onclick', onReveal);
    }
}

function onReveal() {
    revealButton.disabled = true;
    for (const button of guessButtons) {
        button.disabled = true;
        if (button.id == currentPerm.perm) {
            button.className = 'correct';
        }
    }
    
    renderHidden(currentPerm.sides);
    revealSolution();
}

function initNextButton() {
    let button = document.getElementById('next')
    if (button.addEventListener) {
        button.addEventListener('click', onNext, false);
    } else if (button.attachEvent) {
        button.attachEvent('onclick', onNext);
    }
}

function onNext() {
    hideSolution();
    currentPerm = permute();
    renderVisible(currentPerm.sides);

    revealButton.disabled = false;
    for (const button of guessButtons) {
        button.disabled = false;
        button.className = "guess";
    }
}

function initSolution() {
    solutionHeaderDiv = document.getElementById('solutionHeader');
    solutionStepsDiv = document.getElementById('solutionSteps');
    solutionDiv = document.getElementById('solution');
}

function hideSolution() {
    solutionHeaderDiv.className = 'solutionHidden';
    solutionHeaderDiv.innerHTML = 'Hidden...';
    solutionStepsDiv.innerHTML = '';
    solutionDiv.innerHTML = '';
}

function revealSolution() {
    const solution = solutionSteps(currentPerm.perm, currentPerm.rotation);
    const headerHTML =
        solution.header instanceof Array ? solution.header.join('<br>') : solution.header;
    const stepsHTML =
        solution.steps instanceof Array ? solution.steps.join('<li>') : solution.steps;
    
    solutionHeaderDiv.className = 'solutionRevealed';
    solutionHeaderDiv.innerHTML = headerHTML;
    
    solutionStepsDiv.innerHTML = '<ol><li>' + stepsHTML + '</ol>';
    solutionDiv.innerHTML = currentPerm.perm + " (" + currentPerm.rotation + ')';
}
