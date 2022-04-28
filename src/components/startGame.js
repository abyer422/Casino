import { createDeckAndDraw } from "./api";
import { gameOver } from "./gameOver";
import { getPlayersCards } from "./getPlayersCards";

export async function startGame() {
        
    const deck = await createDeckAndDraw();
    deck.forEach((card, i) => {
        document.getElementById(`card${i+1}`).src = deck[i].image;
    })

    PlayersCards(deck);

    let cards = Array.from(document.getElementsByClassName('card'));
    
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('visible')
        }, i * 500)
    })

    let playerCards = Array.from(document.getElementsByClassName('player-card'));
    
    playerCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('show')
        })
    })
}

function PlayersCards(deck) {
    const playersCards = getPlayersCards(deck);
    return playersCards;
}

export function showDealersCards(deck) {
    let dealerCards = Array.from(document.getElementsByClassName('dealer-card'));
    dealerCards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('show')
        }, i * 500)
    })

    let playerCards = Array.from(document.getElementsByClassName('player-card'));
    playerCards.forEach(card => {
        setTimeout(() => {
            card.classList.add('show')
        }, 1500)
    })
    
    // function to calculate results of hand, show winnings/losings   
    
    // add an overlay to call gameOver() to start a new game

    Result('true');

    // let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    // overlays.forEach(overlay => {
    //     setTimeout(() => {
    //         overlay.classList.add('visible')
    //     }, 5000)
    // })
    
    // overlays.forEach(overlay => {
    //     overlay.addEventListener('click', () => {
    //         overlay.classList.remove('visible');
    //         gameOver();
    //     })
    // })
}

function Result(e) {

    const win = e;
    console.log(win);
    if ( win === true ) {
        return (
            <div id="result" className="results visible">
                <h2>Congratulations</h2>
                <h2>You won: </h2>
            </div>
        )
    } else {
        return (
            <div id="result" className="results visible">
                <h2>Sorry</h2>
                <h2>You lost: </h2>
            </div>
        )
    }

}

export default Result;