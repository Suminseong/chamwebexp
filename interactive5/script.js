const headTag = document.querySelector('header');
const section0 = document.querySelector('.section0');
const section1 = document.querySelector('.section1');
const introContainer = document.querySelector('.intro-container');
const movableLogo = document.querySelector('.logo-symbol');

let firstScroll = true; // 최상단에서의 첫 스크롤을 감지하기 위한 플래그
let throttleTimeout = null; // 스로틀링을 위한 타임아웃 변수

document.addEventListener('scroll', function () {
  if (firstScroll && !throttleTimeout) {
    document.body.style.position = 'fixed'; // 스크롤 고정
    document.body.style.width = '100%'; // 고정 시 너비 조절

    section0.classList.add('moved');
    headTag.classList.add('header-moved');
    movableLogo.classList.add('no-display');

    section0.classList.remove('not-scrolled');
    headTag.classList.remove('header-long');
    movableLogo.classList.remove('yes-display');

    firstScroll = false; // 첫 스크롤이 처리되었으므로 false로 설정

    throttleTimeout = setTimeout(() => {
      document.body.style.position = ''; // 스크롤 고정 해제
      document.body.style.width = ''; // 너비 조절 해제
      throttleTimeout = null; // 1초 후 타임아웃 해제
      introContainer.style.display = 'none';
      section0.style.zIndex = -10000;
    }, 1000); // 1초 동안 스크롤 이벤트 무시
  }
});
