const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock");
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("paper");
})

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    playRound("scissor");
})


const computerImage = document.querySelector('.compImage');
computerImage.style.transform = 'scaleX(-1)';
const yourImage = document.querySelector('.yourImage');

const scoreHuman = document.querySelector('#humanScore');
const scoreComp = document.querySelector('#computerScore');
const resultText = document.querySelector('#text');



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}


function playRound(selection) {

    const humanSelection = selection;
    const computerSelection = getComputerChoice();

    if (humanSelection === 'rock' && computerSelection === 'paper') {
        yourImage.src = 'rock.png';
        computerImage.src = 'paper.png';
        text.textContent = 'You lose! paper beats rock';
        scoreComp.textContent = parseInt(scoreComp.textContent) + 1;

    }
    else if (humanSelection === 'rock' && computerSelection === 'scissor') {
        yourImage.src = 'rock.png';
        computerImage.src = 'scissor.png';
        text.textContent = 'You Win! rock beats scissor';
        scoreHuman.textContent = parseInt(scoreHuman.textContent) + 1;

    }
    else if (humanSelection === 'rock' && computerSelection === 'rock') {
        yourImage.src = 'rock.png';
        computerImage.src = 'rock.png';
        text.textContent = 'Draw! You both chose rock';

    }
    else if (humanSelection === 'paper' && computerSelection === 'rock') {
        yourImage.src = 'paper.png';
        computerImage.src = 'rock.png';
        text.textContent = 'You Win! paper beats rock';
        scoreHuman.textContent = parseInt(scoreHuman.textContent) + 1;

    }
    else if (humanSelection === 'paper' && computerSelection === 'paper') {
        yourImage.src = 'paper.png';
        computerImage.src = 'paper.png';
        text.textContent = 'Draw!You both chose paper';

    }
    else if (humanSelection === 'paper' && computerSelection === 'scissor') {
        yourImage.src = 'paper.png';
        computerImage.src = 'scissor.png';
        text.textContent = 'You Lose! scissor beats paper';
        scoreComp.textContent = parseInt(scoreComp.textContent) + 1;

    }
    else if (humanSelection === 'scissor' && computerSelection === 'rock') {
        yourImage.src = 'scissor.png';
        computerImage.src = 'rock.png';
        text.textContent = 'You Lose! rock beats scissor';
        scoreComp.textContent = parseInt(scoreComp.textContent) + 1;

    }
    else if (humanSelection === 'scissor' && computerSelection === 'paper') {
        yourImage.src = 'scissor.png';
        computerImage.src = 'paper.png';
        text.textContent = 'You Win! scissor beats paper';
        scoreHuman.textContent = parseInt(scoreHuman.textContent) + 1;

    }
    else if (humanSelection === 'scissor' && computerSelection === 'scissor') {
        yourImage.src = 'scissor.png';
        computerImage.src = 'scissor.png';
        text.textContent = 'Draw! You both chose scissor';

    }



    if (parseInt(scoreComp.textContent) === 5) {
        text.textContent = 'YOU LOSE!';
        text.style.color = 'red';
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;

        rock.style.opacity = 0.5;
        paper.style.opacity = 0.5;
        scissor.style.opacity = 0.5;
    }
    if (parseInt(scoreHuman.textContent) === 5) {
        text.textContent = 'YOU WIN!';
        text.style.color = 'green';
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;

        rock.style.opacity = 0.5;
        paper.style.opacity = 0.5;
        scissor.style.opacity = 0.5;

        confetti();
    }
}

const restart = document.querySelector('#restart');
restart.addEventListener('click', () => {
    scoreComp.textContent = '0';
    scoreHuman.textContent = '0';
    text.textContent = '';
    text.style.color = '#ee9b00';

    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;

    rock.style.opacity = 1;
    paper.style.opacity = 1;
    scissor.style.opacity = 1;
})
