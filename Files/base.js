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
    let theme = 'dark'; // Initialize theme as 'dark'
    const darkThemeImg = document.getElementById('dark-theme');
    const lightThemeImg = document.getElementById('light-theme');
    const header = document.querySelector('.box');
    const line = document.querySelector('.header');
    const footer = document.querySelector('footer');
    const links = document.querySelectorAll('a');
    const headings = document.querySelectorAll('h2');
    const boldElements = document.querySelectorAll('b');
    const btns = document.querySelectorAll('.button'); // Ensure this selects all buttons
    const my = document.querySelector('.me');
    const achievements = document.querySelector('.achievements');

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

            if (my) my.style.borderColor = 'white';
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

            boldElements.forEach(b => {
                b.style.color = 'ghostwhite';
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

            if (my) my.style.borderColor = 'black';
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

            boldElements.forEach(b => {
                b.style.color = 'black';
            });

            if (lightThemeImg) lightThemeImg.classList.remove('hidden');
            if (darkThemeImg) darkThemeImg.classList.add('hidden');
        }
    }

    applyTheme(); // Apply theme on initial load

    if (darkThemeImg) {
        darkThemeImg.addEventListener('click', function () {
            theme = 'light'; // Switch to light theme
            applyTheme();
        });
    }

    if (lightThemeImg) {
        lightThemeImg.addEventListener('click', function () {
            theme = 'dark'; // Switch to dark theme
            applyTheme();
        });
    }
});

