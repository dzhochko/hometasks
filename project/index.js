const butterflyTypes = [
	{ emoji: '🦋', score: 3 },
	{ emoji: '🐞', score: 2 },
	{ emoji: '🐝', score: 1 }
];

let score = 0;
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const levelSelect = document.getElementById('level');
const timerDisplay = document.getElementById('timer');
let butterflies = [];

function createButterfly() {
	const butterflyType = butterflyTypes[Math.floor(Math.random() * butterflyTypes.length)];

	const butterfly = document.createElement('div');
	butterfly.classList.add('butterfly');
	butterfly.innerText = butterflyType.emoji;

	const maxX = gameBoard.offsetWidth - butterfly.offsetWidth;
	const maxY = gameBoard.offsetHeight - butterfly.offsetHeight;

	const left = Math.floor(Math.random() * maxX);
	const top = Math.floor(Math.random() * maxY);

	butterfly.style.left = left + 'px';
	butterfly.style.top = top + 'px';

	butterfly.addEventListener('click', function () {
		score += butterflyType.score;
		scoreDisplay.textContent = 'Очки: ' + score;
		gameBoard.removeChild(butterfly);
		butterflies = butterflies.filter(b => b !== butterfly);
		clearTimeout(timer);
	});

	gameBoard.appendChild(butterfly);
	butterflies.push(butterfly);

	timer = setTimeout(function () {
		gameBoard.removeChild(butterfly);
		butterflies = butterflies.filter(b => b !== butterfly);
		score -= 10;
		scoreDisplay.textContent = 'Очки: ' + score;
		checkGameOver();
	}, 5000);

	let speed;
	if (levelSelect.value === 'easy') {
		speed = Math.random() * 1500 + 1000;
	} else if (levelSelect.value === 'medium') {
		speed = Math.random() * 1300 + 600;
	} else {
		speed = Math.random() * 900 + 200;
	}

	setTimeout(createButterfly, speed);
}

function startGame() {
	for (const butterfly of butterflies) {
		gameBoard.removeChild(butterfly);
	}
	butterflies = [];

	score = 0;
	scoreDisplay.textContent = 'Очки: ' + score;
	timerDisplay.textContent = 'Час: 0';
	startTime = new Date().getTime();
	createButterfly();
	updateTimer();
}

function updateTimer() {
	const currentTime = new Date().getTime();
	const elapsedTime = Math.floor((currentTime - startTime) / 1000);
	timerDisplay.textContent = 'Час: ' + elapsedTime;
	if (score >= 0) {
		requestAnimationFrame(updateTimer);
	}
}

function checkGameOver() {
	if (score < 0) {
		score = 0;
		scoreDisplay.textContent = 'Очки: ' + score;
		endTime = new Date().getTime();
		const recordTime = (endTime - startTime) / 1000;
		alert('Кінець гри! Рекордний час: ' + recordTime + ' сек.');
		location.reload();
	}
}