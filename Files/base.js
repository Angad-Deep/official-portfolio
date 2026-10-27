//Mobile Menu Insertion
document.addEventListener('DOMContentLoaded', function () {
    console.log('Footer script loaded');
    
    function loadExternalHTML() {
        fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('mob-menu').innerHTML = data;
            })
            .catch(error => console.error('Error loading external HTML:', error));
    }

    loadExternalHTML();
});


//Mobile Menu Operations
function toggleMenu() {
    var menu = document.getElementById("menu");
    var icon = document.querySelector(".menu-icon");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        icon.classList.remove("active");
    } else {
        menu.style.display = "block";
        icon.classList.add("active");
    }
}


// Footer Insertion
document.addEventListener('DOMContentLoaded', function () {
    console.log('Footer script loaded');
    
    function loadExternalHTML() {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            })
            .catch(error => console.error('Error loading external HTML:', error));
    }

    loadExternalHTML();
});


// Header Insertion + Theme Operations
document.addEventListener('DOMContentLoaded', function () {

    fetch("header.html")
        .then(response => response.text())
        .then(data => {

            // Insert header first
            document.getElementById("header").innerHTML = data;

            // Header elements now exist
            const darkThemeImg = document.getElementById('dark-theme');
            const lightThemeImg = document.getElementById('light-theme');
            const header = document.querySelector('.header');
            const hlinks = document.querySelectorAll('.header a');

            // Initial / Preserved Theme
            let theme = localStorage.getItem('theme') || 'light';

            // Other page elements
            const line = document.querySelector('.pg-title');
            const footer = document.querySelector('footer');
            const links = document.querySelectorAll('a');
            const headings = document.querySelectorAll('h2');
            const boldElements = document.querySelectorAll('b');
            const btns = document.querySelectorAll('.button');
            const my = document.querySelector('.me');
            const achievements = document.querySelector('.achievements');
            const project = document.querySelectorAll('.project');
            const ec = document.querySelectorAll('.section');
            const ecAct = document.querySelectorAll('.activity b');


            function applyTheme() {

                if (theme === 'dark') {

                    document.body.style.backgroundColor = '';
                    document.body.style.color = 'ghostwhite';
                    document.body.style.backgroundImage = 'url("../Images/Background.jpg")';

                    if (header) {
                        header.style.backgroundColor = 'black';
                        header.style.boxShadow = 'none';
                        header.style.color = 'ghostwhite';
                    }

                    if (line) {
                        line.style.backgroundColor = 'black';
                        line.style.color = 'ghostwhite';
                        line.style.borderColor = 'white';
                        const title = line.querySelector('h1');
                            if (title) {
                                title.style.color = 'ghostwhite';
                    }
                    }

                    if (footer) {
                        footer.style.backgroundColor = 'black';
                        footer.style.color = 'ghostwhite';
                    }

                    btns.forEach(btn => {
                        btn.style.borderColor = 'white';
                    });

                    if (my) {
                        my.style.borderColor = 'white';
                        my.style.boxShadow = '2px 3px 4px 5px rgb(251, 255, 0)';
                    }

                    if (achievements) achievements.style.borderColor = 'white';
                    if (achievements) achievements.style.backgroundColor = 'black';
                    if (achievements) achievements.style.color = 'white';

                    links.forEach(link => {
                        link.style.backgroundColor = 'none';
                        link.style.color = 'whitesmoke';
                    });

                    headings.forEach(h2 => {
                        h2.style.textDecoration = 'white underline';
                        h2.style.textUnderlineOffset = '5px';
                    });

                    hlinks.forEach(hlink => {

                        hlink.style.color = "";
                        hlink.style.backgroundImage = "";
                        hlink.style.backgroundClip = "";
                        hlink.style.webkitBackgroundClip = "";
                        hlink.style.color = "";

                        hlink.addEventListener('mouseenter', () => {
                            hlink.style.backgroundImage = "linear-gradient(135deg, #00f260, #00ffee)";
                            hlink.style.webkitBackgroundClip = "text";
                            hlink.style.color = "transparent";
                        });

                        hlink.addEventListener('mouseleave', () => {
                            hlink.style.backgroundImage = "";
                            hlink.style.color = "";
                        });

                    });


                    boldElements.forEach(b => {
                        b.style.color = 'ghostwhite';
                    });

                    ec.forEach(ec => {
                        ec.style.backgroundColor = "black";
                        ec.style.boxShadow = "2px 3px 10px 6px";
                        ec.classList.remove('gradient-shadow');
                        ec.classList.add('gradient-shadow');
                    });

                    project.forEach(project => {
                        project.style.backgroundColor = "ghostwhite";
                        project.style.filter = "brightness(80%)";

                        project.addEventListener('mouseenter', () => {
                            project.style.filter = "brightness(90%)";
                        });

                        project.addEventListener('mouseleave', () => {
                            project.style.filter = "brightness(80%)";
                        });

                    });


                    // Show dark-theme button
                    if (darkThemeImg) darkThemeImg.classList.remove('hidden');
                    if (lightThemeImg) lightThemeImg.classList.add('hidden');


                } else {

                    document.body.style.background = "linear-gradient(135deg, #00f260, #00ffee, #fcff5f)";
                    document.body.style.color = 'black';

                    if (header) {
                        header.style.backgroundColor = 'white';
                        header.style.boxShadow = '2vw 3vw 1vw -4.5vh whitesmoke';
                    }

                    if (line) {
                        line.style.backgroundColor = 'white';
                        line.style.color = 'black';
                        line.style.borderColor = 'black';
                        const title = line.querySelector('h1');
                        if (title) {
                            title.style.color = 'black';
                        }
                    }

                    if (footer) {
                        footer.style.backgroundColor = 'white';
                        footer.style.color = 'black';
                    }

                    btns.forEach(btn => {
                        btn.style.borderColor = 'black';
                    });

                    if (my) {
                        my.style.borderColor = 'black';
                        my.style.boxShadow = '2px 3px 4px 5px rgba(0, 204, 204, 0.4)';
                    }

                    if (achievements) achievements.style.borderColor = 'black';
                    if (achievements) achievements.style.backgroundColor = 'white';
                    if (achievements) achievements.style.color = 'black';

                    links.forEach(link => {
                        link.style.color = 'black';
                        link.style.textDecoration = 'none';
                    });

                    headings.forEach(h2 => {
                        h2.style.textDecoration = 'black underline';
                        h2.style.textUnderlineOffset = '5px';
                    });

                    hlinks.forEach(hlink => {

                        hlink.style.color = "black";
                        hlink.style.backgroundImage = "";
                        hlink.style.backgroundClip = "";
                        hlink.style.webkitBackgroundClip = "";

                        hlink.addEventListener('mouseenter', () => {
                            hlink.style.backgroundImage = "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)";
                            hlink.style.webkitBackgroundClip = "text";
                            hlink.style.color = "transparent";
                        });

                        hlink.addEventListener('mouseleave', () => {
                            hlink.style.backgroundImage = "";
                            hlink.style.color = "black";
                        });

                    });


                    boldElements.forEach(b => {
                        b.style.color = 'black';
                    });

                    ec.forEach(ec => {
                        ec.style.backgroundColor = "";
                        ec.style.boxShadow = "";
                        ec.classList.add('gradient-shadow');
                    });

                    project.forEach(project => {
                        project.style.backgroundColor = "";
                        project.style.filter = "";

                        project.addEventListener('mouseenter', () => {
                            project.style.filter = "";
                        });

                        project.addEventListener('mouseleave', () => {
                            project.style.filter = "";
                        });

                    });


                    // Show light-theme button
                    if (lightThemeImg) lightThemeImg.classList.remove('hidden');
                    if (darkThemeImg) darkThemeImg.classList.add('hidden');

                }
            }


            // Apply saved theme AFTER header has loaded
            applyTheme();


            // Dark theme button -> switch to light
            if (darkThemeImg) {
                darkThemeImg.addEventListener('click', function () {
                    theme = 'light';
                    localStorage.setItem('theme', theme);
                    applyTheme();
                });
            }


            // Light theme button -> switch to dark
            if (lightThemeImg) {
                lightThemeImg.addEventListener('click', function () {
                    theme = 'dark';
                    localStorage.setItem('theme', theme);
                    applyTheme();
                });
            }

        })
        .catch(error => console.error('Error loading header:', error));

});


function logWindowSize() {
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
}

logWindowSize();

window.addEventListener('resize', logWindowSize);