const headTag = document.querySelector('header');
const section0 = document.querySelector('.section0');
const section1 = document.querySelector('.section1');
const introContainer = document.querySelector('.intro-container');
const movableLogo = document.querySelector('.logo-symbol');
const logo = document.querySelector('.logo-text')
const cards = document.querySelectorAll('.card');
const containers = document.querySelectorAll('.contents-container');
const btnY = document.querySelector('.btn-y');
const btnN = document.querySelector('.btn-n');

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

//스크롤시 수직 무브
document.addEventListener('DOMContentLoaded', function () { //컨텐츠 존재하는지 확인
  function checkCards() {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.style.transitionDelay = `${index * 0.2}s`; // 각 카드에 대해 딜레이가 늘어나게함
        card.classList.add('show');
      }
      else {
        card.classList.remove('show');
        card.style.transitionDelay = '0s'; // 뷰포트 밖으로 나갔을 때 딜레이 리셋
      }
    });

    containers.forEach((container, index) => {
      const contentTop = container.getBoundingClientRect().top;

      if (contentTop < triggerBottom) {
        container.classList.add('show');
        container.classList.remove('invisible');
        if (index === 0) {
          container.classList.add('animR');
        }
        else {
          container.classList.add('animL');
        }
      }
      else {
        container.classList.remove('show');
        container.classList.add('invisible');
        if (index === 0) {
          container.classList.remove('animR');
        }
        else {
          container.classList.remove('animL');
        }
      }
    })
  }

  // 이미지에 클릭 이벤트 추가
  const images = document.querySelectorAll('.card img');
  images.forEach(image => {
    image.addEventListener('click', function () {
      // 애니메이션 클래스를 추가하여 회전시키고, 애니메이션이 끝난 후 클래스를 제거하여 다시 클릭할 때 회전할 수 있게 함
      image.classList.add('rotate');
      image.addEventListener('animationend', function () {
        image.classList.remove('rotate');
      }, { once: true });
    });
  });

  window.addEventListener('scroll', checkCards);
  checkCards(); // Initial check on page load
});

//버튼 클릭시 이상한 창을 띄우기
document.addEventListener('DOMContentLoaded', function () {
  btnY.addEventListener('click', function () {
    alert('정말고마워요!');
  });
  btnN.addEventListener('click', function () {
    alert('정말너무하시네!');
  });
});

logo.addEventListener('click', () => {
  // 이동할 URL을 지정합니다.
  const url = '/index.html';

  // 링크로 이동합니다.
  window.location.href = url;
});