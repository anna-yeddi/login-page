function userUid() {
    let checkbox = document.getElementById('remember'),
        checkNext = true;

    if(localStorage.getItem('rememberUid') === 'true') {
        checkbox.checked = true;
    }
        
    checkbox.addEventListener('click', () => {
        localStorage.setItem('rememberUid', checkNext);
        checkNext = !checkNext;
    });
}

module.exports = userUid;