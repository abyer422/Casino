import React from 'react';
import '../styles/3 Card Poker.css';
import ThreeCardPoker from '../components/CardGameBoard';

function Three_Card_Poker() {
    return (
        <div className="threeCard">
            <h1>3 Card Poker</h1>
            <ThreeCardPoker />
        </div>
    )
}

export default Three_Card_Poker;