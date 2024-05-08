const progressBar = document.querySelector('.progress-bar');
const bodyTag = document.querySelector('body');

document.addEventListener('scroll', function(){
    const bodyHeight = bodyTag.getBoundingClientRect().height;
    let scrollableHeight = bodyHeight - window.innerHeight;

    let scrollWidth = window.scrollY / scrollableHeight * window.innerWidth;

    progressBar.style.width = scrollWidth + 'px';
})