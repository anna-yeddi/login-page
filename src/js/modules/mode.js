function mode() {
    let changeMode = document.querySelector('#modeSwitch'),
    body = document.querySelector('body'),
    box = document.querySelector('.box'),
    modeNight = false;
   
    if(localStorage.getItem('modeNight') === 'true') {
        modeNight = true;
        body.style.background = 'linear-gradient(var(--primary) 60%, var(--info))';
        box.style.background = 'var(--light)';     
    }
    
    changeMode.addEventListener('click', () => {
        modeNight = !modeNight;
        localStorage.setItem('modeNight', modeNight);
        if (modeNight === true) {
            body.style.background = 'linear-gradient(var(--primary) 60%, var(--info))';
            box.style.background = 'var(--light)';
        } else {
            body.style.background = 'linear-gradient(var(--light) 80%, var(--offwhite))';
            box.style.background = 'var(--offwhite)';
        }
    });
};

module.exports = mode;