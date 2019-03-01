import '../css/style.css';
import Icon from '../img/golden-34520_960_720.png';
import Data from '../data.xml';

window.addEventListener('DOMContentLoaded', () => {
   
   'use strict';

   // Add mode switch and saved user login data:
   let userUid = require('./modules/userUid.js'),
      userData = require('./modules/userData.js'),
      mode = require('./modules/mode.js');

   userUid();
   userData();
   mode();

   // Add the main icon to existing <link>:
   let shortcut = document.querySelector('link#shortcut');

   shortcut.href = Icon;
   return shortcut; 
});

// Add data:
console.log(Data);


// tests:
import {one, two, sayHello} from './script';

console.log(`${one} and ${two}`);
sayHello('Anna');