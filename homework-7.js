const SPEED_OF_LIGHT = 299792458;

function showTemp(country, temp) {
    console.log(`Сейчас в ${country} температура - ${temp} градусов по Цельсию`);
}

showTemp('Barcelona', 32);

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log('Сверхсветовая скорость');
    }  else if (speed < SPEED_OF_LIGHT) {
        console.log('Субсветовая скорость');
    } else {
        console.log('Скорость света');
    }
}

checkSpeed(2997924587);

let productName = 'IPhone 17 Pro MAX';
let productPrice = 1500;

function purchaseProduct(currentBudget) {
    currentBudget > productPrice 
    ? console.log(`${productName} приобретен. Спасибо за покупку!`) 
    : console.log(`Вам не хватает ${productPrice - currentBudget}$, пополните баланс`);
}

purchaseProduct(1400);

function getUserAge(userAge) {
    console.log(`Возраст пользователя - ${userAge} года`);
}

getUserAge(33);

let userName = 'Alan';
const EARTH_MASS = 5972000000000000000000000n; // Масса земли
let bookAuthor = 'Tolstoy';