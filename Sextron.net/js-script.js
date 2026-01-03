document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    
    menuBtn.addEventListener('click', (e) => {
        sidebar.classList.toggle('open');
        e.stopPropagation();
    });

   
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
});

function showSlide(slideId) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    const target = document.getElementById(slideId);
    if (target) target.classList.add('active');
    
    document.getElementById('sidebar').classList.remove('open');
}