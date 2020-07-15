import cow from './cow';
import './scss/main.scss';

const box = document.querySelector('#box');
const message = 'is great';

box.innerText = cow.say(`Webpack with Babel ${message}!`);