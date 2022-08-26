1. /*CarConstructor creates cars but what if someone decides to call it without new keyword,
write a logic inside the CarConstructor function so it checks if the CarConstructor is
called without new keyword it logs "please call me with new keyword" if not it
creates a car.*/

function CarConstructor(year, model) {
 if (!new.target) {
   alert ("please call me with new keyword")
 }
  this.year = year
  this.model = model
}

let car= CarConstructor (2010, 'BMW')
let car1= new CarConstructor (2010, 'BMW')

// 4. Abstract classes are base classes from which other classes may be derived. In other
// words, you can’t create an instance with that class, you can only extend from it.
// Create a class, which will throw an error if you try to create an instance with it, but you can
// extend from it. 

class Car {
  constructor(name) {
     this.name=name;
    if (this.constructor === Car) {
    throw new Error('Cannot create an instance of the abstract class IList')
    }
  }
  run (speed){
    this.speed = speed;
    alert(`${this.name} runs with the speed of ${this.speed}.`);
  }
}

let car= new Car ("Mercedes")

class Car1 extends Car {
  run (speed){
  this.speed = speed;
  alert(`${this.name} runs with the speed of ${this.speed}.`);
  }
}
let car= new Car1("Mercedes")
car.name
car.run (5) 
