let changeMode = document.querySelector('#modeSwitch'),
   body = document.querySelector('body'),
   box = document.querySelector('.box'),
   checkbox = document.getElementById('remember'),
   checkNext = true,
   modeNight = false;

window.addEventListener('DOMContentLoaded', () => {
   rememberUser();
   setMode();

   let person = {
      name: 'Alex',
      age: 25,
      tech: ['mobile', 'notebook']
   }

   let serializedPerson = JSON.stringify(person);
   localStorage.setItem('Alex', serializedPerson);

   console.log(JSON.parse(localStorage.getItem('Alex')));
});
   
function rememberUser() {
   if(localStorage.getItem('rememberUid') === 'true') {
      checkbox.checked = true;
   }
   
   checkbox.addEventListener('click', () => {
      localStorage.setItem('rememberUid', checkNext);
      checkNext = !checkNext;
   })
}

function setMode() {
   if(localStorage.getItem('modeNight') === 'true') {
      modeNight = true;
      setModeNight();
   }
   
   changeMode.addEventListener('click', () => {
      modeNight = !modeNight;
      localStorage.setItem('modeNight', modeNight);
      if (modeNight === true) {
         setModeNight();
      } else {
         setModeDay();
      }
   })
}

function setModeNight() {
   body.style.background = 'var(--primary)';
   box.style.background = 'var(--light)';
};

function setModeDay() {
   body.style.background = 'var(--light)';
   box.style.background = 'var(--offwhite)';
}

// localStorage Methods:

// localStorage.setItem('number', 1);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();