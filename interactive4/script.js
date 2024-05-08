const divMain = document.getElementsByClassName('main')[0];
const divSection = document.getElementsByClassName('wrap-section');

let page = 0;
const endPage = divSection.length - 1;

function scrolly(i) {
    i.preventDefault();
    if (i.deltaY > 0) {
        page++;
    }
    else if (i.deltaY < 0) {
        page--;
    }
    if (page < 0) {
        page = 0;
    }
    else if (page > endPage) {
        page = endPage;
    }
    divMain.style.top = page * -100 + 'vh';
}

//쓰로틀링이라는 좋은 기술을 사용합니다. 연속 이벤트의 첫번째만 받으면 일정 시간동안 입력을 처리 하지 않습니다.
//여기서는 Timer가 없는지 검사하고, 존재한다면 이벤트를 취소한다. 존재하지 않는다면 새로운 timer를 생성하고, 이벤트는 실행된다.

let timer;
window.addEventListener('wheel', (i) => {
    if (!timer) {
        scrolly(i);
        timer = setTimeout(() => {
            timer = null;
        }, 1500); //1.5초 쓰로틀링
    }
}, { passive: false });