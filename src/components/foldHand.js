import { showDealersCards } from "../components/startGame";
import { gameOver } from "../components/gameOver";

export function foldHand() {
    // show dealers cards for fun
    showDealersCards();

    // call function to remove bet from total money
    
    // add an overlay to call gameOver() to start new game
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    overlays.forEach(overlay => {
        setTimeout(() => {
            overlay.classList.add('visible')
        }, 2000)
    })
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            gameOver();
        })
    })
}