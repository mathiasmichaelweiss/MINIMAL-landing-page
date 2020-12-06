'use strict';

window.addEventListener('DOMContentLoaded', () => {
    console.log(document.querySelectorAll('.active'));

    function activateElem(chooseElem, activeClass) {
        const elem = document.querySelectorAll(chooseElem);

        elem.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                for (i = 0; i < elem.length; i++) {
                    if (elem[i].classList.contains(activeClass)) {
                        elem[i].classList.remove(activeClass);
                    }
                    item.classList.add(activeClass);
                }
            });
        });
    }

    activateElem('.nav_blog_circle', 'active');



    var slider = tns({
        "container": "#base",
        "items": 3,
        "slideBy": "page",
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        gutter: 15,
        slideBy: 1,
        controlsContainer: document.querySelector('.nav-blog')

    });


});