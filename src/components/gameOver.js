export function gameOver() {
    
    // removes all back facing cards
    let cards = Array.from(document.getElementsByClassName('card'));
    cards.forEach(card => {
        card.classList.remove('visible')
    })

    // removes forward facing dealer cards
    let dealerCards = Array.from(document.getElementsByClassName('dealer-card'));
    dealerCards.forEach(card => {
        card.classList.remove('show')
    })

    // removes forward facing player cards
    let playerCards = Array.from(document.getElementsByClassName('player-card'));
    playerCards.forEach(card => {
        card.classList.remove('show')
    })
}