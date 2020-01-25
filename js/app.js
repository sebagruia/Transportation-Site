


document.addEventListener('DOMContentLoaded', () => {

    
     // Scroll on buttons using Jquery

    //  $('.scroll-to-despre-noi').click(function () {

    //     $('html, body').animate({
    //         scrollTop: $('.despre-noi').offset().top
    //     }, 1000);

    // });


    // $('.scroll-to-tractari-auto').click(function () {

    //     $('html, body').animate({
    //         scrollTop: $('.tractari-auto').offset().top
    //     }, 1000);

    // });

    // $('.scroll-to-tarife-tractari').click(function () {

    //     $('html, body').animate({
    //         scrollTop: $('.tarife-tractari').offset().top
    //     }, 1000);

    // });


    const move = ()=>{
        const toDespreNoi = document.querySelector('.scroll-to-despre-noi');
        const targetDespreNoi = document.querySelector('.despre-noi');
        const widthOftargetDespreNoi = targetDespreNoi.clientWidth;
        const heightOftargetDespreNoi = targetDespreNoi.clientHeight;
        toDespreNoi.addEventListener('click', ( )=>{
            window.scrollTo({
                top:heightOftargetDespreNoi,
                left:widthOftargetDespreNoi,
                behaviour:'smooth'

            });

        });
    }

    move();


    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log(`latime = ${windowWidth} si inaltime = ${windowHeight}`);
    const headerElement = document.getElementById('header');
    const headerElementHtml = `
                                    <!-- #############################
                                    NAVBAR 
                                    ##################################-->
                                  


                           

                                

                                    <nav class="navbar navbar-expand-lg navbar-light">
                                        <div class="container-fluid ">
                                            <div class="info-container text-center m-auto">
                                            <h3>NON STOP <i class="fas fa-headset"></i></h3>
                                            <hr class="info-hr">
                                            <h5>SUNA ACUM | <span class="phone">Tel: +40785911911</span></h5>
                                        </div>
                                       
                                        <button class=" navbar-toggler hamburger hamburger--spin" type="button" data-toggle="collapse" data-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="sr-only">Toggle Navigation</span>
                                            <span class="hamburger-box">
                                                <span class="hamburger-inner"></span>
                                            </span>
                                        </button>  

                                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                                            <ul class="navbar-nav text-center">
                                                <li class="nav-item">
                                                    <div class="logo-container m-auto">
                                                    <img class="logo" src="./img/PORUMBELUL TRACTARI fara telefon200x200 text inchis.png"
                                                    alt="A piggeon pulling a car icon">
                                                    </div>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link main-links" href="">Despre Noi <span class="sr-only">(current)</span></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link main-links" href="">Tractari Auto</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link main-links" href="">Tarife Tractari</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link main-links" href="">Blog</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link main-links" href="">Contact</a>
                                                </li>
                                                <li>
                                                    <div class="social-icons">
                                                        <a href="#" class="badge social facebook" target="_blank"><i class="fab fa-facebook"></i></a>
                                                        <a href="#" class="badge social google-plus" target="_blank"><i class="fab fa-google-plus"></i></a>
                                                        <a href="#" class="badge social twitter" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div><!--end collapse-> 
                                    </div><!--end container-fluid-->  
                                    </nav>
                                `;

    // ====Selects a different Header according to window Width and window Height===
    //Adding a different Nav for devices with width < 576px
   
        if (windowWidth <= 576 && windowHeight >=480 ) {
            console.log('test1');
            headerElement.innerHTML = headerElementHtml;
        }
        else{
            // Adding Background Parallax to devices with width > 576px
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

    // Hamburger Functionality 
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });


    



});

