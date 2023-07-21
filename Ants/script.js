document.getElementById('enter-link').addEventListener('click', function() {
    document.getElementById('modal-registration').style.visibility = 'hidden';
    document.getElementById('confirm').style.visibility = 'hidden';
    document.getElementById('for-confirm').style.visibility = 'hidden';
    document.getElementById('modal-enter').style.visibility = 'visible';
});

document.getElementById('registration-link').addEventListener('click', function() {
    document.getElementById('modal-enter').style.visibility = 'hidden';
    document.getElementById('confirm').style.visibility = 'visible';
    document.getElementById('for-confirm').style.visibility = 'visible';
    document.getElementById('modal-registration').style.visibility = 'visible';
});