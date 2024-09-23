function animateCards(cards) {
    cards.forEach(card => {
        gsap.to(card, {
            scale: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: card,
                start: 'top 15%',
                end: 'bottom 15%',
                scrub: true,
            },
        });
    });
}

const cards = ['.card1', '.card2', '.card3', '.card4', '.card5', '.card6', '.card7', '.card8'];
animateCards(cards);