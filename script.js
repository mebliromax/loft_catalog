// Просто плавна прокрутка при кліку на посилання
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', function() {
    const backBtn = document.querySelector('.back-to-index-btn');
    const page3 = document.getElementById('page-3');

    // Якщо ми проскролили нижче середини 3-ї сторінки
    if (window.scrollY > page3.offsetTop + (page3.offsetHeight / 2)) {
        backBtn.classList.add('visible');
    } else {
        backBtn.classList.remove('visible');
    }
});

// Плавна прокрутка для всіх посилань (якщо ти ще не додавала)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});