'use strict'

console.log(window.screen);

const windowWidth = window.screen.width;
const windowHeight = window.screen.height;
let screen = document.querySelector('.screen');
let outer = document.querySelector('.outer');
let inner = document.querySelector('.inner');
let documentElement = document.querySelector('.documentElement');

window.addEventListener('resize', () => {
    let outerWidth = window.outerWidth;
    let outerHeight = window.outerHeight;
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    let clientWidth = window.document.documentElement.clientWidth;
    let clientHeight = window.document.documentElement.clientHeight;

    screen.innerHTML = `${windowWidth}, ${windowHeight}`;
    outer.innerHTML = `${outerWidth}, ${outerHeight}`;
    inner.innerHTML = `${innerWidth}, ${innerHeight}`;
    documentElement.innerHTML = `${clientWidth}, ${clientHeight}`;
});