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

    if (document.body.clientWidth <= 420) {
        var slider = tns({
            "container": ".wrapper-ground",
            "items": 1,
            "slideBy": "page",
            "mouseDrag": true,
            "swipeAngle": false,
            "speed": 400,
            "gutter": 15,
            "slideBy": 1,
            "controlsContainer": document.querySelector('.nav-blog')
        });
    } else {
        var slider = tns({
            "container": ".wrapper-ground",
            "items": 3,
            "slideBy": "page",
            "mouseDrag": true,
            "swipeAngle": false,
            "speed": 400,
            "gutter": 15,
            "slideBy": 1,
            "controlsContainer": document.querySelector('.nav-blog')
        });
    }

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading',
        success: 'success',
        failure: 'Something went wrong...'
    }

    forms.forEach(form => {
        postData(form);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            /* const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage); */

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            /* request.setRequestHeader('Content-type', 'multipart/form-data'); */
            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    /* statusMessage.textContent = message.success; */
                } else {
                    /* statusMessage.textContent = message.failure; */
                }

            });
        });
    }


});