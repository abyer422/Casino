import React from "react";
import "../styles/CardGameBoard.css";
import backOfCard from "../assets/back of card.jpg";
import pokerChip from "../assets/poker chip.png";
import { createDeckAndDraw } from "./api";

function ThreeCardPoker() {    
    async function createDeck() {
        const deck = await createDeckAndDraw();
        return deck;
    }
    
    async function startGame() {
        
        const deck = await createDeck();
        deck.forEach((image, i) => {
            document.getElementById(`card${i+1}`).src = deck[i].image;
        })

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
    
    function foldHand() {
        // show dealers cards for fun
        showDealersCards();

        // call function to remove bet from total money
        
        // add an overlay to call gameOver() to start new game
        let overlays = Array.from(document.getElementsByClassName('overlay-text'));
        overlays.forEach(overlay => {
            overlay.classList.add('visible')
        })
        overlays.forEach(overlay => {
            overlay.addEventListener('click', () => {
                overlay.classList.remove('visible');
                gameOver();
            })
        })
    }
    
    function gameOver() {
        let cards = Array.from(document.getElementsByClassName('card'));
        cards.forEach(card => {
            card.classList.remove('visible')
        })

        let dealerCards = Array.from(document.getElementsByClassName('dealer-card'));
        
        dealerCards.forEach(card => {
            card.classList.remove('show')
        })

        let playerCards = Array.from(document.getElementsByClassName('player-card'));
        
        playerCards.forEach(card => {
            card.classList.remove('show')
        })
    }
    
    function showDealersCards() {
        let dealerCards = Array.from(document.getElementsByClassName('dealer-card'));
        dealerCards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('show')
            }, i * 500)
        })
        
        // function to calculate results of hand, show winnings/losings
        
        // add an overlay to call gameOver() to start a new game
        let overlays = Array.from(document.getElementsByClassName('overlay-text'));
        overlays.forEach(overlay => {
            setTimeout(() => {
                overlay.classList.add('visible')
            }, 5000)
        })
        overlays.forEach(overlay => {
            overlay.addEventListener('click', () => {
                overlay.classList.remove('visible');
                gameOver();
            })
        })
    }

    function betPairPlus() {
        let bet = Array.from(document.getElementsByClassName('pair-plus'));
        bet.forEach(bet => {
            document.getElementById('pair-plus').src = pokerChip;
            bet.classList.add('visible');
        })
    }

    function betAnte() {
        let bet = Array.from(document.getElementsByClassName('ante'));
        bet.forEach(bet => {
            document.getElementById('ante').src = pokerChip;
            bet.classList.add('visible');
        })
    }

    function betPlay() {
        let bet = Array.from(document.getElementsByClassName('play'));
        bet.forEach(bet => {
            document.getElementById('play').src = pokerChip;
            bet.classList.add('visible');
        })
    }
    
    return (
        <div className="game-container">
            <div className="overlay-text">Click to start a new game</div>
            <div className="start">
                <div className="game-buttons">
                    <button className="span-1" onClick={startGame}>Deal</button>
                    <button onClick={showDealersCards}>Play</button>
                    <button onClick={foldHand}>Fold</button>
                </div>
                <div className="bet-area">
                    <button onClick={betPairPlus} className="span-1 bet button">Pair Plus
                        <img id="pair-plus" className="chip pair-plus" src="" alt="" />
                    </button>
                    <small id="pair-plus-bet-amount" value=""></small>
                    <button onClick={betAnte} className="span-1 bet button">Ante
                        <img id="ante" className="chip ante" src="" alt="" />
                    </button>
                    <small>$ Bet</small>
                    <button onClick={betPlay} className="span-1 bet button">Play
                        <img id="play" className="chip play" src="" alt="" />
                    </button>
                    <small>$ Bet</small>
                </div>
            </div>

            <div className="payout">
                <p className="title"> Pair plus payouts: </p>
                    <p> Straight Flush </p>
                        <p> 40 to 1 </p>
                    <p> Three of a Kind </p>
                        <p> 30 to 1 </p>
                    <p> Straight </p>
                        <p> 6 to 1 </p>
                    <p>Flush </p>
                        <p> 3 to 1 </p>
                    <p>Pair </p>
                        <p> 1 to 1 </p>
                    
                <p className="title"> Ante bonus payouts: </p>
                    <p> Straight Flush </p>
                        <p> 5 to 1 </p>
                    <p> Three of a Kind </p>
                        <p> 4 to 1 </p>
                    <p>Straight </p>
                        <p> 1 to 1 </p>
            </div>
            
            <div className="game-info-container-dealer">

                <div className="game-info-dealer">
                    DEALERS CARDS:
                </div>
            
                <div className="dealers-cards">
                    <div className="card dealer-card">
                        <div className="card-slot"></div>
                        <div className="card-back card-face">
                            <img className="card-face" src={backOfCard} alt="back of playing card" />
                        </div>
                        <div className="card-front card-face">
                            <img id="card1" className="card-face" src="" alt="dealer card 1" />
                        </div>
                    </div>
                    
                    <div className="card dealer-card">
                        <div className="card-slot"></div>
                        <div className="card-back card-face">
                            <img className="card-face" src={backOfCard} alt="back of playing card" />
                        </div>
                        <div className="card-front card-face">
                            <img id="card2" className="card-face" src="" alt="dealer card 2" />
                        </div>
                    </div>
                    
                    <div className="card dealer-card">
                        <div className="card-slot"></div>
                        <div className="card-back card-face">
                            <img className="card-face" src={backOfCard} alt="back of playing card" />
                        </div>
                        <div className="card-front card-face">
                            <img id="card3" className="card-face" src="" alt="dealer card 3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-info-container-player">
                <div className="game-info-player">
                    PLAYERS CARDS:
                </div>

                <div className="players-cards">
                    <div className="card player-card">
                        <div className="card-slot"></div>
                        <div className="card-back card-face">
                            <img className="card-face pc" src={backOfCard} alt="back of playing card" />
                        </div>
                        <div className="card-front card-face">
                            <img id="card4" className="card-face" src="" alt="player card 1" />
                        </div>
                    </div>
                    
                    <div className="card player-card">
                        <div className="card-slot"></div>
                        <div className="card-back card-face">
                            <img className="card-face pc" src={backOfCard} alt="back of playing card" />
                        </div>
                        <div className="card-front card-face">
                            <img id="card5" className="card-face" src="" alt="player card 2" />
                        </div>
                    </div>
                    
                    <div className="card player-card">
                        <div className="card-slot"></div>
                        <div className="card-back card-face">
                            <img className="card-face pc" src={backOfCard} alt="back of playing card" />
                        </div>
                        <div className="card-front card-face">
                            <img id="card6" className="card-face" src="" alt="player card 3" />
                        </div>
                    </div>
                </div>
                <h3>( Click each card to reveal )</h3>
                <h3>( Press play to reveal dealers cards )</h3>
            </div>
    
        </div>
    );
}

export default ThreeCardPoker