// Script for animations using Animate.css
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
