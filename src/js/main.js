'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const anchors = document.querySelectorAll('a[href*="#"]');
    console.log(anchors);

    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    var slider = tns({
        "container": ".wrapper-ground",
        "items": 3,
        "slideBy": "page",
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        "gutter": 15,
        "slideBy": 1,
        "controlsContainer": document.querySelector('.nav-blog'),
        "mouseDrag": true
    });


});