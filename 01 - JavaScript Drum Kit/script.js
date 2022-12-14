window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.code}`);
    const key = this.document.querySelector(`.key[data-key=${e.code}]`);
    if (!audio) return; // stops function from running if incorrect key is hit
    audio.currentTime = 0;  // allows audio to be played multiple times if key is hit again
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));