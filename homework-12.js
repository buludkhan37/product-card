// 3. Придумайте свою структуру и реализуйте наследуемость классов

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} кушает`);
    }
}

class Eagle extends Animal {
    eat() {
        console.log(`${this.name} охотся в небе на зайцев и других мелких животных. Кушает мясо.`);
    }
    
    fly() {
        console.log(`${this.name} летает в небе`);
    }
}

class Lion extends Animal {
    eat() {
        console.log(`${this.name} охотится на земле на разных животных. Кушает мясо`);
    }

    walk() {
        console.log(`${this.name} ходит по земле`);
    }
}

class Fish extends Animal {
    eat() {
        console.log(`${this.name} кушает планктон`);
    }

    swim() {
        console.log(`${this.name} плавает в воде`);
    }
}

const lion = new Lion('Лев');
lion.eat();