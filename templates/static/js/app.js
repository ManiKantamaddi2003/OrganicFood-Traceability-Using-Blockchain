

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarCollapse.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && window.innerWidth < 992) {
            // Check if the navbarToggler is not collapsed
            if (navbarToggler.getAttribute('aria-expanded') === 'true') {
                // Close the navbar
                navbarToggler.click();

                // Delay the following of the link to allow the menu to close
                setTimeout(function() {
                    window.location.href = event.target.href;
                }, 350); // Adjust the delay time (in ms) if needed
                event.preventDefault(); // Prevent the default action to allow our delay
            }
        }
    });
});