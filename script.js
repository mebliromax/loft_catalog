// Плавна прокрутка при кліку на кнопку або посилання
document.querySelectorAll('a[href^="#"], .back-to-index-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Визначаємо id (або беремо з href, або для кнопки жорстко #page-1)
        const targetId = this.getAttribute('href') || '#page-1';
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Показуємо стрілочку, коли прогорнули нижче першої сторінки
window.addEventListener('scroll', function() {
    const backBtn = document.querySelector('.back-to-index-btn');
    const page1 = document.getElementById('page-1');

    if (page1) {
        // Якщо проскролили нижче середини 1-ї сторінки — показуємо кнопку
        if (window.scrollY > page1.offsetTop + (page1.offsetHeight / 2)) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    }
});
