const GOOGLE_URL = 'https://google.com';
const changeFirstCardColorBtn = document.getElementById('change-first-card-color');
const firstProductCard = document.querySelector('.product-card');

changeFirstCardColorBtn.addEventListener('click', () => {
    firstProductCard.classList.toggle('product-card--blue');
});


const changeAllCardsColorBtn = document.getElementById('change-all-cards-color');
const allProductCards = document.querySelectorAll('.product-card');

changeAllCardsColorBtn.addEventListener('click', () => {
    allProductCards.forEach((card) => card.classList.toggle('product-card--green'));
});


const openGooglePageBtn = document.getElementById('open-google-page');
openGooglePageBtn.addEventListener('click', () => openGoogle());

function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google?');

    if (answer) {
        window.open(GOOGLE_URL);
    } else {
        console.log('Пользователь отменил действие!');
    }
}


const showLogMessageBtn = document.getElementById('log-message');
showLogMessageBtn.addEventListener('click', () => showConsoleMessage('ДЗ №6'));

function showConsoleMessage(message) {
    alert(message);
    console.log(message);
}

const mainTitle = document.querySelector('.title');
mainTitle.addEventListener('mouseenter', () => {
    console.log(mainTitle.textContent);
});


const chgColorBtns = document.querySelectorAll('.actions__button-change-color');
chgColorBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        allProductCards[index].classList.toggle('product-card--active')
    })
});