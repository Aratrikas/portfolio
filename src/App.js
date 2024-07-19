document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const typewriter = document.querySelector('.typewriter');
    const text = 'Your Name';
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // Intersection Observer for Animations
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            } else {
                entry.target.classList.remove('animate__animated', 'animate__fadeInUp');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive Navigation Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
