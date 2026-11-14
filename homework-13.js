// 3. Реализовать абстрактный класс Drink

class Drink {
    #temp;

    constructor(name, size, price, temp) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temp = temp;
    }

    getInfo() {
        return `Напиток ${this.name} имеет размер ${this.size}, цена ${this.price} ₽.`
    }

    getTemp() {
        return this.#temp;
    }

    setTemp(newTemp) {
        this.#temp = newTemp;
        console.log(`Установлена новая температура напитка ${this.#temp} °C`);
    }

    #prepareDrink() {
        return `напиток ${this.name} готов!`;
    }

    serveDrink() {
        console.log(`Пожалуйста, Ваш ${this.#prepareDrink()} Хорошего дня!`)
    }
}

// Реализован наследник Лимонад

class Lemonade extends Drink {
    constructor(name, size, price, temp, ice, flavor) {
        super(name, size, price, temp)
        this.ice = ice;
        this.flavor = flavor;
    }

    getInfo() {
        const defaultInfo = super.getInfo();
        return `
            ${defaultInfo}.
            Вкус ${this.flavor}, лед: ${this.ice}
        `
    }
}

// Реализован наследник Чай

class Tea extends Drink {
    constructor(name, size, price, temp, teaType, sugar, isLimon) {
        super(name, size, price, temp)
        this.teaType = teaType;
        this.sugar = sugar;
        this.isLimon = isLimon;
    }

    getInfo() {
        const defaultInfo = super.getInfo();
        return `
            ${defaultInfo}.
            Чай ${this.teaType}, сахар: ${this.sugar}, лимон: ${this.isLimon}
        `
    }
}

// Реализован наследник Кофе

class Coffee extends Drink {
    constructor(name, size, price, temp, beansType, milkType, syrup) {
        super(name, size, price, temp)
        this.beansType = beansType;
        this.milkType = milkType;
        this.syrup = syrup;
    }

    getInfo() {
        const defaultInfo = super.getInfo();
        return `${defaultInfo}. Зерна: ${this.beansType}, молоко: ${this.milkType}, сироп: ${this.syrup}`
    }
}

// Реализован наследник Безалкогольный коктейль

class Mocktail extends Drink {
    constructor(name, size, price, temp, iceCream, milk, syrup, fruit) {
        super(name, size, price, temp)
        this.iceCream = iceCream;
        this.milk = milk;
        this.syrup = syrup;
        this.fruit = fruit;
    }

    getInfo() {
        const defaultInfo = super.getInfo();
        return `
            ${defaultInfo}.
            Добавлено - мороженое: ${this.iceCream}, 
            молоко: ${this.milk}, 
            сироп: ${this.syrup}, 
            фрукт: ${this.fruit}
        `
    }
}

// 4. Реализовать класс "Кафе"

class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        return `Кафе ${this.name} находится по адресу: ${this.location}.`;
    }

    orderDrink(drink) {
        console.log(`Заказан напиток: ${drink.getInfo()}`)
        drink.serveDrink();
    }
}

const tea = new Tea('Чай', 'большой', 120, 40, 'Черный чай', '2 ложки', '1 кусок');
const cafe = new Cafe('Бриз', 'Улица Баумана 100')


console.log(tea)
console.log(cafe)

console.log(cafe.getInfo())
cafe.orderDrink(tea)
