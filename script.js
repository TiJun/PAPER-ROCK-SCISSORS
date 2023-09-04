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
    return
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
    return
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
    return
}
startBtn.addEventListener('click', startApp)
rockWeapon.addEventListener('click', rockChoose)
scissorsWeapon.addEventListener('click', scissorsChoose)
paperWeapon.addEventListener('click', paperChoose)