const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate hamburger to X
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navLinks.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -8px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
}

function toggleModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.toggle('active');
}

// Close the modal if the user clicks anywhere outside of the content box
window.onclick = function (event) {
    const modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        modal.classList.remove('active');
    }
}