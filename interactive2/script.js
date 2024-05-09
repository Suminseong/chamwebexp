const majorArcana = [
    { number: 0, name: "The Fool", keyword: "beginnings", imageLink: "https://i.postimg.cc/cHXdnnms/0.png", description: "새로운 시작과 무모함을 상징하며, 앞으로의 미지의 길을 나타냅니다. 이 카드는 미래를 채우지 않은 상태에서 자유롭게 앞으로 나아가는 용기를 부여합니다." },
    { number: 1, name: "The Magician", keyword: "manifestation", imageLink: "https://i.postimg.cc/j5ss2Xyg/1.png", description: "창조와 역량을 상징하며, 당신의 내면에 숨어있는 능력과 통찰력을 활용한다면 뜻밖의 좋은 결과를 얻을 수 있을지도 모릅니다." },
    { number: 2, name: "The High Priestess", keyword: "intuition", imageLink: "https://i.postimg.cc/bv0yqMSS/2.png", description: "직감과 숨겨진 지식을 상징하며, 깊은 내면의 현명함과 영적인 통찰력을 나타냅니다. 좋은 일이 있을지도 모르겠네요." },
    { number: 3, name: "The Empress", keyword: "nurturing", imageLink: "https://i.postimg.cc/YCW2sjp3/3.png", description: "자연과 풍요로움을 상징하며, 보살핌과 창조적인 힘으로 가득찬 모성의 상징입니다. 누군가를 도우는 일이 있을지도 모르겠어요." },
    { number: 4, name: "The Emperor", keyword: "authority", imageLink: "https://i.postimg.cc/pdMVbxrt/4.png", description: "권위와 안정을 상징하며, 지혜롭고 통찰력 있는 리더십의 표상입니다.팀프로젝트나 졸업작품을 앞두고 있다면... 힘내시기 바랍니다. 그래도 잘 해낼 수 있을겁니다." },
    { number: 5, name: "The Hierophant", keyword: "tradition", imageLink: "https://i.postimg.cc/qMYMw2dq/5.png", description: "전통과 지혜를 상징하며, 교육과 정신적인 지도를 받는 과정을 나타냅니다. 지식이나 내면의 양식이 크게 성장 할 기회네요." },
    { number: 6, name: "The Lovers", keyword: "relationships", imageLink: "https://i.postimg.cc/Gh9mvqV6/6.png", description: "사랑과 선택의 상징이며, 결합과 조화를 통해 인간관계의 본질을 나타냅니다. 어쩌면 쾌락을 의미할지도 모르는데... 혹시 솔로셨다면 좋은 인연이 있을수도 있겠네요." },
    { number: 7, name: "The Chariot", keyword: "willpower", imageLink: "https://i.postimg.cc/Wp54DQWM/7.png", description: "의지력과 승리의 상징이며, 힘든 여정에서도 목표를 향해 나아가는 결연한 의지를 나타냅니다. 굉장한 행동력과 목적의식으로 뭉친 당신은 사망년도 잘 해쳐나갈거에요." },
    { number: 8, name: "Strength", keyword: "courage", imageLink: "https://i.postimg.cc/brVYKtD6/8.png", description: "용기와 인내를 상징하며, 내면의 힘과 균형을 찾아내는 데 필요한 힘을 나타냅니다. 굳건한 의지와 용기로 강해진 당신은 때로는 자신을 조절할 줄도 알아야겠습니다." },
    { number: 9, name: "The Hermit", keyword: "introspection", imageLink: "https://i.postimg.cc/tJ4CS5TZ/9.png", description: "내면 탐구와 고요함을 상징하며, 외부의 소음 속에서 내면의 진실을 발견하는 과정을 나타냅니다. 혼자 상념에 빠지고, 내면을 돌아보는 휴식을 가지는게 좋아보입니다." },
    { number: 10, name: "Wheel of Fortune", keyword: "destiny", imageLink: "https://i.postimg.cc/B6gnByqf/10.png", description: "운명의 바퀴를 상징하며, 인생의 변화와 순환성을 나타내며, 당신은 현재 운명의 전환점에 놓여있습니다. 그것이 좋은것이든, 나쁜것이든 겸허히 받아들이시길." },
    { number: 11, name: "Justice", keyword: "balance", imageLink: "https://i.postimg.cc/rmcpWc29/11.png", description: "Justice 카드는 균형과 공정을 상징하며, 행동의 결과에 대한 책임과균형을 유지할 준비를 하셔야합니다. 결정적인 선택의 순간이 올 때, 최선의 선택을 할 수 있기를." },
    { number: 12, name: "The Hanged Man", keyword: "sacrifice", imageLink: "https://i.postimg.cc/vTYcRyPm/12.png", description: "포기와 희생을 상징하며, 새로운 시각과 깨달음을 얻기 위해 자아를 포기하는 과정을 나타냅니다. 가끔은 멈춰서 문제를 다시 돌아보는것도 좋은 선택이에요." },
    { number: 13, name: "Death", keyword: "transformation", imageLink: "https://i.postimg.cc/q72RzqSR/13.png", description: "변화와 새로운 시작을 상징하며, 당신은 과거의 것을 버리고 새로운 시작을 할 기회가 찾아올 것입니다. 그리고, 그 기회는 고통스러운 결정을 강요할 수도 있지만요." },
    { number: 14, name: "Temperance", keyword: "moderation", imageLink: "https://i.postimg.cc/L8YhFNVj/14.png", description: "절제와 균형을 상징하며, 갈등과 불안끝에 신념과 욕망 사이에서 당신은 인내를 시험받게 될거에요. 이전의 결정, 현재의 상황을 다시 돌아보세요." },
    { number: 15, name: "The Devil", keyword: "bondage", imageLink: "https://i.postimg.cc/HsPjNfbp/15.png", description: "구속과 유혹을 상징하며, 자유억제와 욕망, 그리고 불안을 의미합니다. 배덕과 쾌락, 욕망을 경계하고 나의 본성에 대해 다시 돌아보는 성찰의 시간을 가져보세요." },
    { number: 16, name: "The Tower", keyword: "disaster", imageLink: "https://i.postimg.cc/HkqnYXSR/16.png", description: "파괴와 변화를 상징하며, 갑작스러운 큰 변화와 파괴, 충격을 의미합니다. 이것은 새로운 가능성으로의 길과 무모한 만용의 길 모두를 의미하니, 신중한 선택을 준비하세요." },
    { number: 17, name: "The Star", keyword: "hope", imageLink: "https://i.postimg.cc/2y03rtJ7/17.png", description: "희망과 영감을 상징하며, 어둠 속에서 빛을 찾아 앞날에 대한 희망을 불러일으킵니다. 희망과 기대를 가지고 나아가야 할 목표를 상기하세요. 분명 성공하게 될 것입니다." },
    { number: 18, name: "The Moon", keyword: "illusion", imageLink: "https://i.ibb.co/qn8vt16/18.png", description: "환상과 혼란을 상징하며, 당신의 무의식에 직면하고, 불확실과 혼돈으로부터 싸워야 할지도 모르겠네요. 하지만, 두려움에 빠지지 않고 정진한다면 새로운 기회가 될 수 있습니다." },
    { number: 19, name: "The Sun", keyword: "happiness", imageLink: "https://i.postimg.cc/c4JrXsg9/19.png", description: "행복과 밝음을 상징하며, 내적인 만족과 완성된 상태를 경험하는 과정을 나타냅니다. 아주 역동적이고 순수한, 그리고 끝없이 앞으로 나아가며 즐거워하는 당신이 보이네요." },
    { number: 20, name: "Judgement", keyword: "rebirth", imageLink: "https://i.postimg.cc/Kcf1PKz3/20.png", description: "새로운 시작과 재탄생을 상징하며, 과거의 결정에 대한 책임을 인식하고 새로운 길을 선택하는 과정을 나타냅니다. 어떤 선택을 하든, 그 대가는 반드시 돌아오게 됩니다." },
    { number: 21, name: "The World", keyword: "fulfillment", imageLink: "https://i.postimg.cc/PxkC4YYY/21.png", description: "완성과 성취를 상징하며, 내적인 조화와 성취를 통해 세계를 꿈꾸고 창조하는 과정을 나타냅니다. 대유쾌 마운틴, 아주 성공적이고 최종적인 목표 달성을 의미합니다. 졸...업?" }
];

const witchText = [
    {saying1 : "당신을 위해 6장의 메이저 아르카나를 준비했습니다.", saying2 : "당신은 이제까지 어떤 사람이었나요? <br>당신은 지금 어떤 사람인가요? <br>당신은 먼 훗날 어떤 사람으로 남을까요? <br>궁금하지 않다구요? 그러면 왜 오셨나요...", saying3 : "당신의 손에 잡힌 카드들이 부디 옳은 미래를 보여줄 수 있기를." },
    {saying1 : "카드를 확인해볼까요...", saying2 : "사실 타로는 뒤집어진 카드도 해석이 있지만, 사악한 개발자가 역아르카나 구현 코드를 날려버려서 사라진 기능이라고 하네요. 이러면 제대로 못보는데...", saying3 : "점쟁이한테 허접스러운 이름을 지어준 개발자가 더 고생하기를." },
    {saying1 : "좋아요. 카드를 눌러보시면 크게 볼 수 있습니다.", saying2 : "저는 비록 Ai가 찌끄린 유사 점쟁이에 불과하지만, 그 카드에 대한 정보는 알려드릴 수 있습니다. 이름과 어떻게 해석을 할 수 있는지 말이죠.", saying3 : "카드를 뽑을 때 마다 다른 카드가 나오는 건 수학적인 이슈입니다." },
    {saying1 : "이 카드는...", saying2 : "", saying3 : "다른 카드도 살펴볼까요? 마음에 안 든다면 다시 해보셔도 좋습니다. 타로는 카드가 당신을 선택하는게 아니니까요." },
]

/*GPT님 단순 노동을 도와줘서 감사합니다...*/
const menuTag = document.querySelector('.open-menu');
const xTag = document.querySelector('.close-menu');
const asideTag = document.querySelector('aside');
const pTags = document.querySelectorAll('aside p');
const playboard = document.querySelector('.playboard');
const cards = document.querySelectorAll('.card');
const cardPaint = document.querySelectorAll('.card-back');

const leaderSayArray = document.querySelectorAll('.leader-talk');

const typing1 = document.querySelector('.talkbox1');
const typing2 = document.querySelector('.talkbox2');
const typing3 = document.querySelector('.talkbox3');

let drawCards = []; //드로우 된 카드를 기록합니다

menuTag.addEventListener("click", function () { //네비게이션 햄버거를 누르면 네비가 튀어나옵니다. 토글 대신 add remove를 썼습니다.
    asideTag.classList.add('visible');
    asideTag.classList.remove('invisible');
    asideTag.style.transform = 'translateX(' + 0 + 'px)';
    pTags.forEach(pTag => {
        pTag.classList.add('visible');
        pTag.classList.remove('invisible');
    });
    xTag.classList.add('visible');
    xTag.classList.remove('invisible');
});

xTag.addEventListener("click", function () { //X를 누르면 네비가 들어갑니니다. 토글 대신 add remove를 이하생략.
    asideTag.style.transform = 'translateX(' + -240 + 'px)';
    pTags.forEach(pTag => {
        pTag.classList.remove('visible');
        pTag.classList.add('invisible');
    });
    xTag.classList.add('invisible');
    xTag.classList.remove('visible');
});

let randomCard;

function getRandomCard() { //랜덤한 카드를 뽑습니다. 중복되지 않게 조심해서!
    for (let i = 0; i < majorArcana.length; i++) {
        const randomIndex = Math.floor(Math.random() * majorArcana.length);
        randomCard = majorArcana[randomIndex];
        if (!drawCards.includes(randomCard)) { //임의로 뽑은 카드가 기존 카드와 일치하지 않으면?
            drawCards.push(randomCard); //카드를 배열로 넣어줍니다
            return randomCard;
        }
    }
}

let cardX;
let allCardsDrawn = false;

function checkAllCardsDrawn() { // 모든 카드가 뒤집어졌는지 확인하는 함수입니다.
    return Array.from(cards).every(card => card.classList.contains('drawed'));
}

function moveToLeft() { // 카드들을 완쪽으로 이동시킵니다.
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = 'transform 0.5s ease'; // 움직임이 자연스럽게 보이도록 transition 추가
            if (index > 2) {
                cardX = ((index + 1) * 110) - 950;
                card.style.transform = `translate(${cardX}% , 130%)`; // 카드가 아랫줄로
            }
            else {
                cardX = ((index - 2) * 110) - 290;
                card.style.transform = `translate(${cardX}% , 0%)`; // 카드가 윗줄로
            }
        }, index * 100); // 각 카드마다 0.1초씩 지연시간 추가하여 순차적으로 이동
    });
}
let cardSaying = [];

function enlargeCard(card) { //카드를 크게 보여줍니다. 
    card.style.transition = 'all 0.5s ease'; // 움직임이 자연스럽게 보이도록 transition
    card.style.transform = 'scale(2)'; //배율은 여기 입력합니다.
    card.classList.add('enlarged-card');
    card.style.left = '50vw';
}
let t;

function onetimeSaying(t) { //타이핑 없이 입력
    leaderSayArray.forEach((leaderTalk) => {
        const pWitch = witchText[t];
        leaderTalk.querySelector('.talkbox1').innerHTML = pWitch.saying1;
        leaderTalk.querySelector('.talkbox2').innerHTML = pWitch.saying2;
        leaderTalk.querySelector('.talkbox3').innerHTML = pWitch.saying3;
    });
}

let isTyping = false; // 타이핑이 진행 중인지 여부를 추적하는 상태 변수

function clearAllTextboxes() {
    typing1.innerHTML = '';
    typing2.innerHTML = '';
    typing3.innerHTML = '';
}

// 타이핑 효과를 적용하는 함수
function typeText(element, text, onFinish) {
    if (isTyping) return; // 타이핑이 진행 중이면 함수를 종료
    isTyping = true; // 타이핑이 시작됨을 표시
    let i = 0;
    const interval = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text[i++];
        } else {
            clearInterval(interval);
            isTyping = false; // 타이핑이 종료됨을 표시
            if (onFinish) onFinish(); // onFinish 함수가 주어진 경우 호출
        }
    }, 40); // 한 글자씩 출력하는 간격 (40ms로 설정)
}

// foldSaying 함수 수정
function foldSaying(t) {
    clearAllTextboxes();
    leaderSayArray.forEach((leaderTalk) => {
        const pWitch = witchText[t];
        // 타이핑 효과 적용
        typeText(leaderTalk.querySelector('.talkbox1'), pWitch.saying1, function() {
            typeText(leaderTalk.querySelector('.talkbox2'), pWitch.saying2, function() {
                typeText(leaderTalk.querySelector('.talkbox3'), pWitch.saying3);
            });
        });
    });
}

// openSaying 함수 수정
function openSaying(index) {
    clearAllTextboxes();
    leaderSayArray.forEach((leaderTalk) => {
        let cardNum = cardSaying[index]; //카드 인덱스에 의해 카드의 정보를 읽어옵니다.
        const pWitch = witchText[3];
        const talkbox1 = leaderTalk.querySelector('.talkbox1');
        const talkbox2 = leaderTalk.querySelector('.talkbox2');
        const talkbox3 = leaderTalk.querySelector('.talkbox3');

        // 타이핑 효과 적용
        typeText(talkbox1, `이 카드는... ${majorArcana[cardNum].name}이군요. 키워드는 '${majorArcana[cardNum].keyword}'입니다.`, function() {
            typeText(talkbox2, majorArcana[cardNum].description, function() {
                typeText(talkbox3, pWitch.saying3);
            });
        });
    });
}


function ensmallCard(card) {
    card.style.transform = 'scale(1)'; //배율은 여기 입력합니다.
    card.classList.remove('enlarged-card');
    foldSaying(1)
}

cards.forEach((card, index) => { //카드 객체 전체에 대해...

    card.addEventListener('click', () => { // 객채가 draw 되었을때는 클릭하면 Flip
        if (allCardsDrawn) {
            if (card.classList.contains('enlarged-card')){ //카드가 커졌는지?
                ensmallCard(card); //카드 줄이기
                if (index > 2) {
                    cardX = ((index + 1) * 110) - 950;
                    card.style.left = '';
                    card.style.transform = `translate(${cardX}% , 130%)`; // 카드가 아랫줄로 원위치
                    console.log(`now transform is ${cardX}% and this card index is ${index+1}`)
                }
                else {
                    cardX = ((index - 2) * 110) - 290;
                    card.style.left = '';
                    card.style.transform = `translate(${cardX}% , 0%)`; // 카드가 윗줄로 원위치
                    console.log(`now transform is ${cardX}% and this card index is ${index+1}`)
                }
            }
            else{
                enlargeCard(card);
                openSaying(index);
            }
        }
        else {
            if (!card.classList.contains('drawed')) { // drawed 클래스를 가지고 있지 않다면?

                const randomCard = getRandomCard();
                cardSaying.unshift(randomCard.number); //push와는 반대로, 맨 뒤부터 배열에 정보를 넣어줍니다.
                console.log(`now card says ${cardSaying}`)
                const cardBack = card.querySelector('.card-back');
                cardBack.style.backgroundImage = `url('${randomCard.imageLink}')`;
                card.classList.add('drawed');
                card.classList.add('flip');
                // const drawingBoard = document.querySelector('.board-drawing');
                // drawingBoard.appendChild(card); //눌린 카드는 drawingboard로 이동
                //그리드 활용해서 카드를 옮겨보려 했지만 애니메이션을 넣을 방법이 없어서 실패

                if (checkAllCardsDrawn()) { // 모든 카드가 뒤집혔는지 확인
                    setTimeout(() => {
                        moveToLeft(); // 1초 후에 모든 카드를 왼쪽으로 이동
                        foldSaying(2)
                        allCardsDrawn = true;
                    }, 1000);
                }

                if (index > 2) {
                    card.style.left = '';
                    cardX = ((index + 1) * 120) - 910;
                    card.style.transform = `translate(${cardX}% , 130%)`; // 카드가 아랫줄로
                    // card.classList.
                }
                else {
                    card.style.left = '';
                    cardX = ((index - 2) * 120) - 190;
                    card.style.transform = `translate(${cardX}% , 0%)`; // 카드가 윗줄로
                }
            }
        }
    });

    card.addEventListener('mouseover', () => { // 객채가 mouseover 되었을때는 샤라락 펼쳐집니다.
        cards.forEach((card, index) => {
            if (!card.classList.contains('moved') && !card.classList.contains('drawed')) { //!는 부정연산자입니다. 카드가 이동한게 거짓인지를 검사한다는 뜻입니다.  
                card.style.left = 80 - (index * 0.5) + '%';
                card.style.transform = `rotate( ${index * -1.5}deg )`;
                card.classList.add('moved');
            }
        });
    });

    card.addEventListener('mouseout', () => {// 객채가 mouseout 되었을때는 샤라락 접힙니다.
        cards.forEach((card) => {
            if (card.classList.contains('moved') && !card.classList.contains('drawed')) {
                card.style.transform = `rotate( ${0}deg )`;
                card.style.left = 80 + '%';
                card.classList.remove('moved');
            }
        })
    })
});

const resetButton = document.querySelector('.resetButton'); // 버튼 요소 가져오기

function resetCards() {
    drawCards = []; // drawCards 배열 초기화
    cards.forEach((card) => {
        allCardsDrawn = false;
        card.classList.remove('drawed');
        card.classList.remove('flip');
        card.classList.remove('enlarged-card');
        card.style.transition = '';
        card.style.transform = '';
        card.style.top = '';
        card.style.left = ''; // 카드의 속성들 초기화
        card.querySelector('.card-back').style.backgroundImage = ''; // 카드 뒷면 이미지 초기화
        onetimeSaying(0);
    });
}

resetButton.addEventListener('click', () => {
    resetCards(); // 리셋 과정 실행
    resetButton.classList.add('active');
    setTimeout(() => {
        resetButton.classList.remove('active');
    }, 300); // 100ms 딜레이 후에 실행
});

window.addEventListener('load', function() {
    document.getElementById('loading-screen').style.display = 'none';
});