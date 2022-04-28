import React from "react";
import "../styles/CardGameBoard.css";
import backOfCard from "../assets/back of card.jpg";
import pokerChip from "../assets/poker chip.png";
import { foldHand } from "../components/foldHand";
import { showDealersCards } from "../components/startGame";
import Result, { startGame } from "../components/startGame";

function ThreeCardPoker() {  
    
    function betPairPlus() {
        let bet = document.getElementById('pair-plus');
        let bet2 = document.getElementById('pair-plus2');
        let bet3 = document.getElementById('pair-plus3');
        let bet4 = document.getElementById('pair-plus4');
        let betAmount = document.getElementById('pair-plus-bet-amount').innerHTML;
        if (betAmount === "$0 Bet") {
            bet.src = pokerChip;
            bet.classList.add('visible');
            document.getElementById('pair-plus-bet-amount').innerHTML = "$5 Bet";
        } else if (betAmount === "$5 Bet") {
            bet2.src = pokerChip;
            bet2.classList.add('visible');
            document.getElementById('pair-plus-bet-amount').innerHTML = "$10 Bet";
        } else if (betAmount === "$10 Bet") {
            bet3.src = pokerChip;
            bet3.classList.add('visible');
            document.getElementById('pair-plus-bet-amount').innerHTML = "$15 Bet";
        } else if (betAmount === "$15 Bet") {
            bet4.src = pokerChip;
            bet4.classList.add('visible');
            document.getElementById('pair-plus-bet-amount').innerHTML = "$20 Bet";
        } else {
            bet.src = "";
            bet2.src = "";
            bet3.src = "";
            bet4.src = "";
            bet.classList.remove('visible');
            bet2.classList.remove('visible');
            bet3.classList.remove('visible');
            bet4.classList.remove('visible');
            document.getElementById('pair-plus-bet-amount').innerHTML = "$0 Bet";
        }
    }

    function betAnte() {
        let bet = document.getElementById('ante');
        let bet2 = document.getElementById('ante2');
        let bet3 = document.getElementById('ante3');
        let bet4 = document.getElementById('ante4');
        let betAmount = document.getElementById('ante-bet-amount').innerHTML;
        if (betAmount === "$0 Bet") {
            bet.src = pokerChip;
            bet.classList.add('visible');
            document.getElementById('ante-bet-amount').innerHTML = "$5 Bet";
        } else if (betAmount === "$5 Bet") {
            bet2.src = pokerChip;
            bet2.classList.add('visible');
            document.getElementById('ante-bet-amount').innerHTML = "$10 Bet";
        } else if (betAmount === "$10 Bet") {
            bet3.src = pokerChip;
            bet3.classList.add('visible');
            document.getElementById('ante-bet-amount').innerHTML = "$15 Bet";
        } else if (betAmount === "$15 Bet") {
            bet4.src = pokerChip;
            bet4.classList.add('visible');
            document.getElementById('ante-bet-amount').innerHTML = "$20 Bet";
        } else {
            bet.src = "";
            bet2.src = "";
            bet3.src = "";
            bet4.src = "";
            bet.classList.remove('visible');
            bet2.classList.remove('visible');
            bet3.classList.remove('visible');
            bet4.classList.remove('visible');
            document.getElementById('ante-bet-amount').innerHTML = "$0 Bet";
        }
    }

    function betPlay() {
        let bet = document.getElementById('play');
        let bet2 = document.getElementById('play2');
        let bet3 = document.getElementById('play3');
        let bet4 = document.getElementById('play4');
        let betAmount = document.getElementById('play-bet-amount').innerHTML;
        if (betAmount === "$0 Bet") {
            bet.src = pokerChip;
            bet.classList.add('visible');
            document.getElementById('play-bet-amount').innerHTML = "$5 Bet";
        } else if (betAmount === "$5 Bet") {
            bet2.src = pokerChip;
            bet2.classList.add('visible');
            document.getElementById('play-bet-amount').innerHTML = "$10 Bet";
        } else if (betAmount === "$10 Bet") {
            bet3.src = pokerChip;
            bet3.classList.add('visible');
            document.getElementById('play-bet-amount').innerHTML = "$15 Bet";
        } else if (betAmount === "$15 Bet") {
            bet4.src = pokerChip;
            bet4.classList.add('visible');
            document.getElementById('play-bet-amount').innerHTML = "$20 Bet";
        } else {
            bet.src = "";
            bet2.src = "";
            bet3.src = "";
            bet4.src = "";
            bet.classList.remove('visible');
            bet2.classList.remove('visible');
            bet3.classList.remove('visible');
            bet4.classList.remove('visible');
            document.getElementById('play-bet-amount').innerHTML = "$0 Bet";
        }
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
                        <img id="pair-plus" className="chip" src="" alt="" />
                        <img id="pair-plus2" className="chip two" src="" alt="" />
                        <img id="pair-plus3" className="chip three" src="" alt="" />
                        <img id="pair-plus4" className="chip four" src="" alt="" />
                    </button>
                    <small id="pair-plus-bet-amount">$0 Bet</small>
                    <button onClick={betAnte} className="span-1 bet button">Ante
                        <img id="ante" className="chip" src="" alt="" />
                        <img id="ante2" className="chip two" src="" alt="" />
                        <img id="ante3" className="chip three" src="" alt="" />
                        <img id="ante4" className="chip four" src="" alt="" />
                    </button>
                    <small id="ante-bet-amount">$0 Bet</small>
                    <button onClick={betPlay} className="span-1 bet button">Play
                        <img id="play" className="chip" src="" alt="" />
                        <img id="play2" className="chip two" src="" alt="" />
                        <img id="play3" className="chip three" src="" alt="" />
                        <img id="play4" className="chip four" src="" alt="" />
                    </button>
                    <small id="play-bet-amount">$0 Bet</small>
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

           <Result e="false"/>
    
        </div>
    );
}

export default ThreeCardPoker