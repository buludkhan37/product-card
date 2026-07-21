// Задание 3. Создайте объект на основе ваших данных.

const person = {
    firstName: 'Buludkhan',
    lastName: 'Kyulmamedov',
    age: 30,
    email: 'kulmamedoff2015@yandex.ru',
    adress: {
        country: 'Russia',
        town: 'Kazan',
        street: 'Chapayeva'
    },
    job: {
        company: 'online school Umclass',
        profession: 'teacher',
    },
    maritalStatus: 'married',
    hasChildren: true
}

// Задание 4. Создайте объект, который будет хранить данные об авто

const car = {
    brand: 'Opel',
    model: 'Astra J',
    bodyType: 'stationWagon',
    year: 2011,
    color: 'black',
    transmission: 'automatic',
}

car.owner = { ...person };
console.log(car);

// Задание 5. Написать функцию, которая проверяет наличие макс. скорости, или добавляет ее

function checkMaxCarSpeed(obj) {
    if (obj.hasOwnProperty('maxSpeed')) {
        return;
    } else {
        obj.maxSpeed = 200;
    }
}

checkMaxCarSpeed(car);

// Задание 6. Написать функцию, принимает объект и его аргумент, и выводит этот аргумент

function getPropertyValue(obj, prop) {
    return obj[prop];
}

console.log(getPropertyValue(car, 'brand'));

// Задание 7. Создать массив, который содержит названия продуктов

const products = ['Apple', 'Orange', 'Milk', 'Bread', 'Meat', 'Solt'];

// Задание 8. Создать массив, состоящий из объектов книг

const books = [
    {
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        year: '1967',
        coverColor: 'black',
        genre: 'novel'
    },
    {
        title: 'Преступление и наказание',
        author: 'Федор Достоевский',
        year: '1866',
        coverColor: 'red',
        genre: 'drama'
    },
    {
        title: 'Война и мир',
        author: 'Лев Толстой',
        year: '1873',
        coverColor: 'white',
        genre: 'novel'
    },
    {
        title: 'Алые Паруса',
        author: 'Александр Грин',
        year: '1923',
        coverColor: 'orange',
        genre: 'story'
    },
    {
        title: 'Скорбь сатаны',
        author: 'Мария Корелли',
        year: '1895',
        coverColor: 'black',
        genre: 'novel'
    },
];

books.push(
    {
        title: 'Цветы для Элджернона',
        author: 'Дэниел Киз',
        year: '1959',
        coverColor: 'white',
        genre: 'novel'
    },
);

console.log(books);

// Задание 9. Создать еще один массив, состоящих из тех же книг, и соединить их в один массив

const marvelBooks = [
    {
        title: 'Spider-Man',
        author: 'Stan Lee',
        year: '1962',
        coverColor: 'red',
        genre: 'superhero'
    },
    {
        title: 'Iorn Man',
        author: 'Stane Lee',
        year: '1963',
        coverColor: 'gold',
        genre: 'superhero'
    },
]

const booksList = [...books, ...marvelBooks];
console.log(booksList);

// Задание 10. Задание про map

function  markRareBooks(books) {
    return books.map(book => [{...book, isRare: book.year > 2000 ? true : false}]);
}

console.log(markRareBooks(booksList));