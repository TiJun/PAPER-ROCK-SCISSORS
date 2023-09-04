const startState = document.querySelector('.start-state')
const gameState = document.querySelector('.game-state')
const startBtn = document.querySelector('.start-state__btn')
const playerPoints = document.querySelector('.player-box__points')
const computerPoints = document.querySelector('.computer-box__points')
const rock = '<img src="./utilities/rock.jpg" alt="" class="game-info__weapons--weapon">'
const paper = '<img src="./utilities/paper.jpg" alt="" class="game-info__weapons--weapon">'
const scissors = '<img src="./utilities/scissors.jpg" alt="" class="game-info__weapons--weapon">'
const computerWeapon = document.querySelector('.computer-box__computer--weapon')
const playerWeapon = document.querySelector('.player-box__player--weapon')
const rockWeapon = document.querySelector('#rock')
const paperWeapon = document.querySelector('#paper')
const scissorsWeapon = document.querySelector('#scissors')
const resultText = document.querySelector('.game-info__text')
const startApp = () => {
	startState.classList.add('display-off')
	gameState.classList.add('display-on')
    playerPoints.textContent = 0
    computerPoints.textContent = 0
}
const rockChoose = () => {
    Math.floor(Math.random()*3)
    randomWeapon = Math.floor(Math.random()*3)
    playerWeapon.innerHTML = rock
    if (randomWeapon === 0) {
        computerWeapon.innerHTML = rock
    } else if (randomWeapon === 1) {
        computerWeapon.innerHTML = paper
    } else if (randomWeapon === 2) {
        computerWeapon.innerHTML = scissors
    }
    checkWinner()
}
const paperChoose = () => {
    Math.floor(Math.random()*3)
    randomWeapon = Math.floor(Math.random()*3)
    playerWeapon.innerHTML = paper
    if (randomWeapon === 0) {
        computerWeapon.innerHTML = rock
    } else if (randomWeapon === 1) {
        computerWeapon.innerHTML = paper
    } else if (randomWeapon === 2) {
        computerWeapon.innerHTML = scissors
    } else if (randomWeapon === 0) {
        computerWeapon.innerHTML = rock
    }
    checkWinner()
}
const scissorsChoose = () => {
    Math.floor(Math.random()*3)
    randomWeapon = Math.floor(Math.random()*3)
    playerWeapon.innerHTML = scissors
    if (randomWeapon === 0) {
        computerWeapon.innerHTML = rock
    } else if (randomWeapon === 1) {
        computerWeapon.innerHTML = paper
    } else if (randomWeapon === 2) {
        computerWeapon.innerHTML = scissors
    } else if (randomWeapon === 0) {
        computerWeapon.innerHTML = rock
    }
    checkWinner()
}
const checkWinner = () => {
    computer = computerWeapon.innerHTML
    player = playerWeapon.innerHTML
    if (computer === rock && player === rock || computer === paper && player === paper || computer === scissors && player === scissors) {
        resultText.textContent = 'Remis'
    } else if (computer === rock && player === paper || computer === paper && player === scissors || computer === scissors && player === rock) {
        resultText.textContent = 'Wygrałeś'
        playerPoints.textContent++
    } else if (computer === rock && player === scissors || computer === paper && player === rock || computer === scissors && player === paper) {
        resultText.textContent = 'Przegrałeś'
        computerPoints.textContent++
    }
}
startBtn.addEventListener('click', startApp)
rockWeapon.addEventListener('click', rockChoose)
scissorsWeapon.addEventListener('click', scissorsChoose)
paperWeapon.addEventListener('click', paperChoose)