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
 