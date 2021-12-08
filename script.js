class Vegetable {
    constructor(name) {
        this.name = name;
    }
};

class Animal {
    constructor(legs) {
        this.legs = legs;
        this.stomach = [];
    }

    eat(food) {
        this.stomach.push(food);
    }
}

class Rabbit extends Animal {
    constructor(breed) {
        super(4);
        this.breed = breed;
    }

    jump() {
        console.log('Rabbit jump..');
    }

    eat(food) {
        if (!(food instanceof Vegetable)) {
            throw new Error("Ooops");
        }
        super.eat(food);
    }

}

class Snake extends Animal {
    constructor(isPoisonous) {
        super(0);

        this.isPoisonous = isPoisonous;
    }

    crawl() {
        alert('Snake crawl..');
    }

    eat(food) {
        if (!(food instanceof Rabbit)) {
            throw new Error("Змея может есть только кроликов!");
        }
        super.eat(food);
    }

}

class Human extends Animal {
    constructor(firstName, lastName) {
        super(2);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    walk() {
        alert('Я умею ходить');
    }

    greet() {
        alert('Приветствую!!!');
    }

    eat(food) {
        if (food instanceof Human) {
            throw new Error("Ooops");
        }
        super.eat(food);
    }
}



