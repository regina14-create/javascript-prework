function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove;
computerMove = 'kamień';
playerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to' + playerMove + ',to wygrywasz!');