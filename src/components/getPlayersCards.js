export function getPlayersCards(e) {
    const deck = e;
    let playersCards = [];
    for(let i = 3; i < deck.length; i++) {
        playersCards.push(deck[i].code)
    }
    
    return playersCards;
}