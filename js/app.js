


document.addEventListener('DOMContentLoaded', () => {

    
    //  Scroll on buttons using Jquery

     $('.scroll-to-despre-noi').click(function () {
        $('html, body').animate({
            scrollTop: $('.despre-noi').offset().top
        }, 1000);
    });


    $('.scroll-to-tractari-auto').click(function () {
        $('html, body').animate({
            scrollTop: $('.tractari-auto').offset().top
        }, 1000);
    });

    $('.scroll-to-tarife-tractari').click(function () {
        $('html, body').animate({
            scrollTop: $('.tarife-tractari').offset().top
        }, 1000);
    });

  
            // Adding Background Parallax to devices with width > 576px
            const width = window.innerWidth;
            if(width>576){
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

            // Removing navbar-brand text for width > 992px
            if(width>=992){
                const navbarBrandText = document.querySelector('.navbar-brand-text');
                navbarBrandText.innerText = '';            
            }
            

    // Hamburger Functionality 
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });


    



});

