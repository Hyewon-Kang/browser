'use strict';

import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
    .gameDuration(20)
    .carrotCount(20)
    .bugCount(20)
    .build();
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