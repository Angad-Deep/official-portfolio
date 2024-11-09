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

document.addEventListener('DOMContentLoaded', function () {
    let theme = localStorage.getItem('theme') || 'light'; // Initial/Preserved Theme
    
    const darkThemeImg = document.getElementById('dark-theme');
    const lightThemeImg = document.getElementById('light-theme');
    const header = document.querySelector('.header');
    const line = document.querySelector('.pg-title');
    const footer = document.querySelector('footer');
    const links = document.querySelectorAll('a');
    const headings = document.querySelectorAll('h2');
    const boldElements = document.querySelectorAll('b');
    const btns = document.querySelectorAll('.button'); // Ensure this selects all buttons
    const my = document.querySelector('.me');
    const achievements = document.querySelector('.achievements');
    const project = document.querySelectorAll('.project');
    const hlinks = document.querySelectorAll('.header a');

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
            }

            if (footer) {
                footer.style.backgroundColor = 'black';
                footer.style.color = 'ghostwhite';
            }

            btns.forEach(btn => {
                btn.style.borderColor = 'white'; // Change border color to white for dark theme
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

            hlinks.forEach(hlinks => {
                hlinks.style.color = "";
                hlinks.addEventListener('mouseenter', () => {
                    hlinks.style.color = "rgb(255,255,0)";
                });
                hlinks.addEventListener('mouseleave', () => {
                    hlinks.style.color = "";
                });  
            });

            boldElements.forEach(b => {
                b.style.color = 'ghostwhite';
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

            if (darkThemeImg) darkThemeImg.classList.remove('hidden');
            if (lightThemeImg) lightThemeImg.classList.add('hidden');
        } else {
            document.body.style.backgroundColor = 'whitesmoke';
            document.body.style.color = 'black';
            document.body.style.backgroundImage = 'none';

            if (header) {
                header.style.backgroundColor = 'white';
                header.style.boxShadow = '2vw 3vw 1vw -4.5vh whitesmoke';
            }

            if (line) {
                line.style.backgroundColor = 'white';
                line.style.color = 'black';
                line.style.borderColor = 'black';
            }

            if (footer) {
                footer.style.backgroundColor = 'white';
                footer.style.color = 'black';
            }

            btns.forEach(btn => {
                btn.style.borderColor = 'black'; // Change border color to black for light theme
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

            hlinks.forEach(hlinks => {
                hlinks.style.color = "rgb(0,0,0)";
                hlinks.addEventListener('mouseenter', () => {
                    hlinks.style.color = "rgb(0,196,196)";
                });
                hlinks.addEventListener('mouseleave', () => {
                    hlinks.style.color = "rgb(0,0,0)";
                });  
            });

            boldElements.forEach(b => {
                b.style.color = 'black';
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

            if (lightThemeImg) lightThemeImg.classList.remove('hidden');
            if (darkThemeImg) darkThemeImg.classList.add('hidden');
        }
    }

    applyTheme(); // Apply theme on initial load

    if (darkThemeImg) {
        darkThemeImg.addEventListener('click', function () {
            theme = 'light'; // Switch to light theme
            localStorage.setItem('theme', theme); // Save theme to localStorage
            applyTheme();
        });
    }

    if (lightThemeImg) {
        lightThemeImg.addEventListener('click', function () {
            theme = 'dark'; // Switch to dark theme
            localStorage.setItem('theme', theme); // Save theme to localStorage
            applyTheme();
        });
    }
});