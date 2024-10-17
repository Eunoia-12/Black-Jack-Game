let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name : "Adriana",
    chips : 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function chips() {
    if (hasBlackJack === true){
        player.chips += 100
    } 
    if (hasBlackJack === false){
        player.chips -= 10
    }  
}

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}

function newGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum  = firstCard + secondCard 
    renderGame()
}

function renderGame() {  
    cardsEl.textContent = "Cards: "
    for( let i = 0; i< cards.length; i++){
        cardsEl.textContent+= cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum  
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got a BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false  
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
 



