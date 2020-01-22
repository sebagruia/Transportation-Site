
document.addEventListener('DOMContentLoaded', () => {
    
    // Background Parallax 

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


    // Selects a different Header according to window width

    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    const headerElement = document.getElementById('header');
    const headerElementHtml = `
                                    <div class="container-fluid">
                                        <div class="row info-row">
                                            <!--end col-sm-6-->
                                            <div class="col-12">
                                            <div class="info-container text-center m-auto">
                                                <h3>NON STOP <i class="fas fa-headset"></i></h3>
                                                <hr class="info-hr">
                                                <h5>SUNA ACUM | <span class="phone">Tel: +40785911911</span></h5>
                                            </div>
                                        </div>
                                        <!--end col-sm-6-->
                                        </div>
                                        <!--end row-->
                                    <!--end row-->
                                    </div>
                                    <!--end container-->


                                    <!-- #############################
                                    NAVBAR 
                                    ##################################-->
                                    <nav class="navbar navbar-expand-lg navbar-light">
                                    <div class="container-fluid ">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="sr-only">Toggle Navigation</span>
                                        <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                                        <ul class="navbar-nav text-center">
                                            <li class="nav-item">
                                            <a class="nav-link" href="index.html">Despre Noi <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="blog.html">Tractari Auto</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="resources.html">Tarife Tractari</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="contact.html">Blog</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="contact.html">Contact</a>
                                            </li>
                                            <li>
                                            <div class="social-icons">
                                                <a href="#" class="badge social facebook" target="_blank"><i class="fab fa-facebook"></i></a>
                                                <a href="#" class="badge social google-plus" target="_blank"><i class="fab fa-google-plus"></i></a>
                                                <a href="#" class="badge social twitter" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                            </div>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </nav>
                                    <!--end nav-->  `;
    if(windowWidth<576){
        headerElement.innerHTML = headerElementHtml;
    }


});

const windowWidth = window.innerHeight;
    console.log(windowWidth);