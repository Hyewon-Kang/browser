'use strict';

import * as sound from "./sound.js";
import Field from "./field.js";

// Builder Pattern
// 오브젝트를 만들 때, Builder Pattern을 이용해서 오브젝트를 간단명료하게, 가독성 좋게 만들 수 있음. 
export default class GameBuilder {
    gameDuration(duration) {
        this.gameDuration = duration;
        return this;
    }

    carrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    bugCount(num) {
        this.bugCount = num;
        return this;
    }

    build() {
        return new Game(this.gameDuration,
            this.carrotCount,
            this.bugCount)
    }
}

class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameTimer = document.querySelector('.game_timer');
        this.gameScore = document.querySelector('.game_score');
        this.gameBtn = document.querySelector('.game_button');
        this.gameBtn.addEventListener('click', () => {
            if (this.started) {
                this.stop();
            } else {
                this.start();
            }
        })

        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    onItemClick = (item) => {
        if (!this.started) {
            return;
        }
        if (item === 'carrot') {
            this.score++;
            this.updateScoreBoard(this.score);
            if (this.score === this.carrotCount) {
                this.finish(true);
            }
        } else if (item === 'bug') {
            this.finish(false);
        }
    }

    init() {
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
    }

    start() {
        this.started = true;
        this.init();
        this.showStopButton();
        this.showTimerAndScore();
        this.startTimer();
        sound.playBackground();
    }

    stop() {
        this.started = false;
        this.stopTimer();
        this.hideGameButton();
        sound.playAlert();
        sound.stopBackground();
        this.onGameStop && this.onGameStop('cancel');
    }

    finish(win) {
        this.started = false;
        this.hideGameButton();
        if (win) {
            sound.playWin();
        } else {
            sound.playBug();
        }
        this.stopTimer();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(win ? 'win' : 'lose');
    }

    showStopButton() {
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }

    showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }

    startTimer() {
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(() => {
            if (remainingTimeSec <= 0) {
                clearInterval(this.timer);
                this.finish(this.carrotCount === this.score);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    updateScoreBoard() {
        this.gameScore.innerText = this.carrotCount - this.score;
    }

    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
    }
}