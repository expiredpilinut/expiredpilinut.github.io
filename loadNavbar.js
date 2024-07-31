// Function to load the navbar
function loadNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar-container').innerHTML = xhr.responseText;
            addNavbarToggle(); // Call function to add toggle event listener after loading the navbar
        }
    };
    xhr.send();
}

// Function to add the toggle event listener
function addNavbarToggle() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navbar-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Load the navbar when the document is ready
document.addEventListener('DOMContentLoaded', loadNavbar);