let player = {
    name : "Your chips", //can be later made into an object element which accepts player name and then displays it on the screen
    chips : 100
}
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

function getRandomCard() {
    let randomCard = Math.floor(Math.random()* 13) + 1;
    if(randomCard === 1){
        return 11;
    } else if(randomCard > 10){
        return 10;
    } else{
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard() , secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function resetGame() {
    isAlive = false;
    hasBlackJack = false;
    player.chips = 100;
    startGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += "| " + cards[i] + " |";
    }
    sumEl.textContent = "Sum : " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
        player.chips += 50;
        alert("You've got BlackJack");
        resetGame();
    } else {
        message = "You're out!"
        isAlive = false;
        player.chips -= 50;
    }
    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;
    if (player.chips === 0) {
        alert("You're outta chips!")
        resetGame();
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}