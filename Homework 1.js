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

2. 