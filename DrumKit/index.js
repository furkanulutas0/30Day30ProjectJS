window.addEventListener('keydown', function(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!sound) return;
    
    key.classList.add('playing');
    sound.currentTime = 0;
    sound.play();

});

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', function(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');   
}));