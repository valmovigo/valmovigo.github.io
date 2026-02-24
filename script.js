document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements marked for reveal
    document.querySelectorAll('.reveal-element').forEach(element => {
        observer.observe(element);
    });
});
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

// Open Menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Stop scrolling when menu is open
});

// Close Menu
const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
};

closeBtn.addEventListener('click', closeMenu);

// Close menu when a link is clicked (important for the #contact anchor)
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
