const star = document.querySelectorAll('.estrella');

anime({
    targets: star,
    scale: .1,
    duration: 7000,
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(100)
})

// anime({
//     targets: '.estrella',
//     scale: .02,
//     rotate: '1turn',
//     translateX: [10, 25],
//     direction: 'alternate',
//     loop: true,
//     easing: 'linear',
//     duration: 1000,
// })

