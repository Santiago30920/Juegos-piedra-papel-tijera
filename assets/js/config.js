let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let game = document.getElementById('game');
let youSelect = document.getElementById('yourSelect');
let yourIcon = document.getElementById('yourIcon');
let select = document.getElementById('select');
let botSelect = document.getElementById('botSelect');
let botIcon = document.getElementById('botIcon');
let totalPointer = 0;
if(localStorage.getItem("key")){
    totalPointer = localStorage.getItem("key");
    document.getElementById('pointer').innerHTML = totalPointer;
}
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

function startGame(propertie) {
    game.style.display = 'none';
    select.style.display = 'flex';
    switch (propertie) {
        case 'rock':
            youSelect.className = 'rock';
            yourIcon.className = 'fa fa-hand-grab-o';
            youSelect.style.marginTop = "43px";
            random('rock');
            break;
        case 'scissors':
            youSelect.className = 'Scissors';
            yourIcon.className = 'fa fa-hand-scissors-o';
            youSelect.style.marginTop = "43px";
            random('scissors');
            break;
        case 'paper':
            youSelect.className = 'paper';
            yourIcon.className = 'fa fa-hand-paper-o';
            youSelect.style.marginTop = "43px";
            random('paper');
            break;
    }
}
function random(yourResult) {
    value = Math.random(2);
    if (value > 0.66) {
        botSelect.className = 'Scissors';
        botIcon.className = 'fa fa-hand-scissors-o'
        botSelect.style.marginTop = "15px";
        viewResult(yourResult, 'scissors');
    } else if (value >= 0.33 && value <= 0.66) {
        botSelect.className = 'rock';
        botIcon.className = 'fa fa-hand-grab-o'
        botSelect.style.marginTop = "15px";
        viewResult(yourResult, 'rock');
    } else {
        botSelect.className = 'paper';
        botIcon.className = 'fa fa-hand-paper-o';
        viewResult(yourResult, 'paper');
    }
}
function viewResult(yourResult, botResult) {
    if (yourResult === botResult) {
        document.getElementById('resultGame').innerHTML = 'YOUR TIE';
    } else if (yourResult === 'scissors' && botResult === 'rock') {
        totalPointer -= 1;
        document.getElementById('pointer').innerHTML = totalPointer;
        document.getElementById('resultGame').innerHTML = 'YOUR LOSE';
        localStorage.setItem("key", totalPointer);
    } else if (yourResult === 'rock' && botResult === 'scissors') {
        totalPointer += 1;
        document.getElementById('pointer').innerHTML = totalPointer;
        document.getElementById('resultGame').innerHTML = 'YOUR WIN';
        localStorage.setItem("key", totalPointer);

    } else if (yourResult === 'scissors' && botResult === 'paper') {
        totalPointer += 1;
        document.getElementById('pointer').innerHTML = totalPointer;
        document.getElementById('resultGame').innerHTML = 'YOUR WIN';
        localStorage.setItem("key", totalPointer);

    } else if (yourResult === 'paper' && botResult === 'scissors') {
        totalPointer -= 1;
        document.getElementById('pointer').innerHTML = totalPointer;
        document.getElementById('resultGame').innerHTML = 'YOUR LOSE';
        localStorage.setItem("key", totalPointer);

    } else if (yourResult === 'paper' && botResult === 'rock') {
        totalPointer += 1;
        document.getElementById('pointer').innerHTML = totalPointer;
        document.getElementById('resultGame').innerHTML = 'YOUR WIN';
        localStorage.setItem("key", totalPointer);

    } else {
        totalPointer -= 1;
        document.getElementById('pointer').innerHTML = totalPointer;
        document.getElementById('resultGame').innerHTML = 'YOUR LOSE';
        localStorage.setItem("key", totalPointer);
    }
}
function newGame() {
    game.style.display = 'block';
    select.style.display = 'none';
}

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}