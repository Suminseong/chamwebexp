const divMain = document.getElementsByClassName('main')[0];
const divSection = document.getElementsByClassName('wrap-section');
const navBall = document.querySelectorAll('.dot');

let page = 0;
const endPage = divSection.length - 1;

function scrolly(i) { //스크롤시 Div가 하나씩 넘어가는 효과
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
    else if (page > endPage) { //마지막 페이지 도달시
        page = endPage;
    }
    divMain.style.top = page * -100 + 'vh';
    navDotManage(page);
}

function navDotManage(pageIndex) {  // 네비게이션 점 제어부
    navBall.forEach(dot => dot.classList.remove('now-index'));
    navBall[pageIndex].classList.add('now-index');
}

navBall.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // 클릭된 점의 인덱스에 해당하는 페이지로 날아갑니다
        scrollToPage(index);
    });
});

// 특정 페이지로 이동하는 함수
function scrollToPage(index) {
    // 인덱스가 페이지 범위 내에 있는지?
    if (index >= 0 && index <= endPage) {// 해당 페이지로 이동.
        page = index;
        divMain.style.top = page * -100 + 'vh';// 네비게이션 점도 업데이트
        navDotManage(page);
    }
}

//로딩탭입니다. 이미지, 페이지 등 뭔가 로딩중이라면 띄웁니다.
window.addEventListener('load', function () {
    document.getElementById('loading-screen').style.display = 'none';
});

//쓰로틀링, 연속 이벤트의 첫번째만 받으면 일정 시간동안 입력을 처리 하지 않습니다.
//여기서는 Timer가 없는지 검사하고, 존재한다면 이벤트를 취소하빈다. 존재하지 않는다면 새로운 timer를 생성하고, 이벤트는 실행됩니다.
let timer;
window.addEventListener('wheel', (i) => {
    if (!timer) {
        scrolly(i);
        timer = setTimeout(() => {
            timer = null;
        }, 1500); //1.5초 쓰로틀링
    }
}, { passive: false });