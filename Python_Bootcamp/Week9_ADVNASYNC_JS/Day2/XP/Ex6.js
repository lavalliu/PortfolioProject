// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// Answer : false
// {} === {}
// Answer : false

// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// Answer : 4
// console.log(object3.number)
// Answer : 4
// console.log(object4.number)
// Answer : 5

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    } 
}

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name, color) {
        super(name,"mammal", color);
    }

    Sound(cry) {
        console.log("sound");
        console.log(`This animal is a ${this.type}. Its name is ${this.name}, its color is ${this.color} and the sound it makes is ${cry}`);
    }
}


const myMammal = new Mammal("Sam", "Brown");
console.log("Mammal : ", myMammal);
myMammal.Sound("miaooo");
// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mammal("Lily", "Brown and White");
console.log("farmerCow : ", farmerCow);
farmerCow.Sound("bloewwwww");

