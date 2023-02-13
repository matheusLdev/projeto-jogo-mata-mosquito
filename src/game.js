var height = 0;
var width = 0;
var lifes = 1;
var timer = 15;

var createMosquitoTimer = 1500;

var level = window.location.search;
level = level.replace('?', '');

if(level === 'normal') {
	//1500
	createMosquitoTimer = 1500;
} else if(level === 'hard') {
	//1000
	createMosquitoTimer = 1000;
} else if (level === 'chucknorris') {
	//750
	createMosquitoTimer = 750;
}

function adjustGameStageSize() {
	height = window.innerHeight;
	width = window.innerWidth;
}
adjustGameStageSize();

var stopwatch = setInterval(function() {
	timer -= 1;
	if(timer < 0) {
		clearInterval(stopwatch);
		clearInterval(createMosquito);
		window.location.href = 'win.html';
	} else {
		document.getElementById('timer').innerHTML = timer;
	}
}, 1000)

function randomPosition() {
	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove();
		if(lifes > 3) {
			window.location.href = 'end-game.html';
		} else {
			document.getElementById('v' + lifes).src = "imagens/coracao_vazio.png";
			lifes++;
		}
	}
	var positionX = Math.floor(Math.random() * width) - 90;
	var positionY = Math.floor(Math.random() * height) - 90;
	positionX = positionX < 0 ? 0 : positionX;
	positionY = positionY < 0 ? 0 : positionY;

	//criar o elemento html
	var mosquito = document.createElement('img');
	mosquito.src = 'imagens/mosquito.png';
	mosquito.className = randomSize() + ' ' + randomSide();
	mosquito.style.left = positionX + 'px';
	mosquito.style.top = positionY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';
	mosquito.onclick = function() {
		this.remove();
	}
	document.body.appendChild(mosquito);
}

function randomSize() {
	var classe = Math.floor(Math.random() * 3)
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function randomSide() {
	var classe = Math.floor(Math.random() * 2)
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}