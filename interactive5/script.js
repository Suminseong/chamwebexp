document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('box');
    const trigger = document.getElementById('scroll-trigger');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const triggerPosition = trigger.getBoundingClientRect().top + window.scrollY;

        // 특정 위치에 도달했을 때 배경 색상 변경
        if (scrollPosition > triggerPosition) {
            document.body.style.backgroundColor = 'lightblue';
            box.classList.add('visible');
        } else {
            document.body.style.backgroundColor = '';
            box.classList.remove('visible');
        }
    });
});
