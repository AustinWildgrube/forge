const mouseOverVideo = (video) => {
    video.play();
}

const mouseOutVideo = (video) => {
    video.pause();
    video.currentTime = 0;
    video.load();
}

const monitorNavbar = () => {
    const navbar = document.querySelector('.nav__background');
    const ham = document.querySelector('.ham');

    window.onscroll = function () {
        "use strict";
        if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
            navbar.classList.add('nav--scroll');

            if (/^https?:\/\/(?:[^\/]+\.)?theforge-media\.com(?:\/(?:\?.*)?)?$/.test(window.location.href)) {
                ham.classList.add('ham--black');
            }
        } else {
            navbar.classList.remove('nav--scroll');

            if (/^https?:\/\/(?:[^\/]+\.)?theforge-media\.com(?:\/(?:\?.*)?)?$/.test(window.location.href)) {
                ham.classList.remove('ham--black');
            }
        }
    };
}

const mobileNavbar = () => {
    const navbar = document.querySelector('.nav__background');
    navbar.classList.remove('nav--scroll');

    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('mobile-nav--open');

    const bodyOverflow = document.querySelector('body');
    bodyOverflow.classList.toggle('body--no-overflow');

    const ham = document.querySelector('.ham');
    ham.classList.toggle('active');
}

const checkYear = () => {
    document.getElementById('year').innerHTML = new Date().getFullYear().toString();
}

// Slide up
ScrollReveal().reveal('.previews__video', {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    delay: 500
});

ScrollReveal().reveal('.work__project', {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    delay: 500
});

// Fade
ScrollReveal().reveal('.about__title', {
    distance: '0px',
    opacity: 0.1,
    delay: 500
});

ScrollReveal().reveal('.about__text', {
    distance: '0px',
    opacity: 0.1,
    delay: 500
});

ScrollReveal().reveal('.about__logo', {
    distance: '0px',
    opacity: 0.1,
    delay: 500
});

// Ease in
ScrollReveal().reveal('.quote', {
    origin : 'right',
    delay    : 200,
    distance : '120px',
    easing   : 'ease-in-out',
});


ScrollReveal().reveal('.contact', {
    origin : 'left',
    delay    : 200,
    distance : '120px',
    easing   : 'ease-in-out',
});


ScrollReveal().reveal('.team-intro__text', {
    distance: '150%',
    origin: 'left',
    opacity: null,
    delay: 500
});

ScrollReveal().reveal('.team-intro__video', {
    distance: '150%',
    origin: 'right',
    opacity: null,
    delay: 500
});

ScrollReveal().reveal('.team__person', {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    delay: 500
});

ScrollReveal().reveal('.work-intro__text', {
    distance: '150%',
    origin: 'left',
    opacity: null,
    delay: 500
});

monitorNavbar();
checkYear();
