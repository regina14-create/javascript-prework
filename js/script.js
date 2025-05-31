var buttonPaper, buttonRock, buttonScissors;

/**
 * Clearing messages on the page.
 */
function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

/**
 * Adding a message to the page
 */
function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

/**
 * Function returns the move name based on its number.
 */
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Function displays the game result.
 */
function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else if (
    (argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
    (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
    (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
  ) {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', A Ty — ' + argPlayerMove);
}

/**
 * Function is called when a button is clicked. This is where all the game logic happens.
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  var playerMove = argButtonName;
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var computerMove = getMoveName(randomNumber);

  console.log('Losovwa liczba: ' + randomNumber);
  console.log('ruch komputera: ' + computerMove);

  displayResult(playerMove, computerMove);
}

// We bind the buttons.
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function() { buttonClicked('kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function() { buttonClicked('papier'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function() { buttonClicked('nożyce'); });
