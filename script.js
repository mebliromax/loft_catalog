document.querySelectorAll('a[href^="#"], .back-to-index-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href') || '#page-1';
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const backBtn = document.querySelector('.back-to-index-btn');
    const page1 = document.getElementById('page-1');

    if (page1) {
        if (window.scrollY > page1.offsetTop + (page1.offsetHeight / 2)) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    }
});
