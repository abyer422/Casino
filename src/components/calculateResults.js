var poker = require('poker-hands');

export function calculateResults(playersCards) {
    poker.hasPair(playersCards);
    console.log(playersCards);
}