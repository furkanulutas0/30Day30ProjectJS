const cards = document.querySelectorAll(".panel");

cards.forEach(card => card.addEventListener('click',function() {
    setTimeout(() => this.classList.toggle('open'), 200);
}));

cards.forEach(openCard => openCard.addEventListener('transitionend',function(e) {
    if (e.propertyName.includes('flex')) {
        setTimeout(() => this.classList.toggle('open-active'), 200);
    }
}));
