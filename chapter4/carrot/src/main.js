'use strict';

import PopUp from './popup.js';
import Game from './game.js';

const gameFinishBanner = new PopUp();
const game = new Game(20, 20, 20);
game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch (reason) {
        case 'cancel':
            messge = 'Replay?';
            break;
        case 'win':
            message = 'YOU WON!';
            break;
        case 'lose':
            message = 'YOU LOST!';
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
    game.start();
});