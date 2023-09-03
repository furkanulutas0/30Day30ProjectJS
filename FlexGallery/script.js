const cards = document.querySelectorAll(".panel");

cards.forEach(card => card.addEventListener('click',function() {
    this.classList.toggle('open');
}));

cards.forEach(openCard => openCard.addEventListener('transitionend',function(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}));
