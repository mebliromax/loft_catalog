document.querySelectorAll('.back-to-index-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#page-1');
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

    if (page1 && backBtn) {
        if (window.scrollY > page1.offsetTop + (page1.offsetHeight / 2)) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    }
});
