document.addEventListener('DOMContentLoaded', () => {


    //  Scroll on buttons using Jquery

    $('.scroll-to-home').click(function () {
        $('html, body').animate({
            scrollTop: $('#hero').offset().top
        }, 1000);
    });
    $('.scroll-to-despre-noi').click(function () {
        $('html, body').animate({
            scrollTop: $('.despre-noi').offset().top - 100
        }, 1000);
    });


    $('.scroll-to-tractari-auto').click(function () {
        $('html, body').animate({
            scrollTop: $('.tractari-auto-title').offset().top - 140
        }, 1000);
    });

    $('.scroll-to-tarife-tractari').click(function () {
        $('html, body').animate({
            scrollTop: $('.tarife-tractari-title').offset().top - 90
        }, 1000);
    });
    $('.scroll-to-contact').click(function () {
        $('html, body').animate({
            scrollTop: $('.suntem-aici-title-wraper').offset().top - 60
        }, 1000);
    });


    // Adding Background Parallax to devices with width > 576px
    const width = window.innerWidth;
    if (width > 576) {
        const hero = document.getElementById('hero');
        window.addEventListener('scroll', (e) => {
            if (hero.getAttribute("data-type") === 'background') {
                const test = hero.getAttribute('data-speed');
                let yPos = -(window.pageYOffset / parseInt(test));
                // Put together our final background position
                let coords = `50% ${yPos}px`;
                // Move the background
                hero.setAttribute("style", `background-position: ${coords};`);
            }
        });
    }

    // Removing navbar-brand text for devices with width > 992px
    if (width >= 992) {
        const navbarBrandText = document.querySelector('.navbar-brand-text');
        navbarBrandText.innerText = '';
    }


    // Hamburger and Navbar-collapse Functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle('is-active');
    });

    navLinks.forEach((navLink) => {
        if (width <= 992) {
            navLink.addEventListener('click', () => {
                navbarToggler.classList.toggle('is-active');
                navbarToggler.classList.toggle('collapsed');
                navbarCollapse.classList.toggle('show');

            });
        }

    });

    // Slide out effect when the "Despre Noi" section is in the center of the viewport
    window.onscroll =() => {
        const yOffset = window.pageYOffset;
        const despreNoiHeight = document.querySelector('.despre-noi');
        const elementTop = despreNoiHeight.offsetTop - 300;
        if (yOffset >= elementTop) {
            document.querySelector('.curtain').classList.add('curtain-off');
        }
    };
});
