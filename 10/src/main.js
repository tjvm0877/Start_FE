import sum from './sum.js';
import avr from './avr.js';
import random from './rand.js';

document.getElementById('sum').innerHTML = sum(1, 2);
document.getElementById('avr').innerHTML = avr([1, 2, 'a', 3]);
document.getElementById('rand').innerHTML = random(100, 200);
