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

// 7.Write a function which returns a Promise object that is resolved with the string 'Hooray!!!
// She said "Yes"!', if true is passed, resolved with the string 'Oh no, she said
// "No".' if false is passed, and rejected with an error 'Wrong parameter is
// passed! Ask her again.', if the passed value type is not boolean.

function askHer(param) {
  return new Promise(function(resolve, reject) {
    if (param === true) {
      resolve('Hooray!!! She said "Yes"!')
    }
    if (param === false) {
      resolve('Oh no, she said "No".')
    }
    if (typeOf(param) != "boolean") {
      reject(new Error('Wrong parameter is passed! Ask her again.'))
    }
  })
}

const res= askHer(true)

res.then(function(result) {
  console.log (result)
})

const res1 = askHer (false)
undefined

res1.then (function(result) {
    console.log (result)
})


// 8.First research some info about fetch API. After it write a program to fetch the posts data
// from the following URL https://jsonplaceholder.typicode.com/users, and show it to the
// document.

//html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
    <script src="./script.js"></script>
</html>

//script file
function fetchData(){
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then (response=>{
      if(!response.ok){
        throw Error ("ERROR"); 
      }
       return response.json();
    })
    .then(data => {
       console.log (data);
       const html = data.map(user =>{
          return`
          <div class="user">
            <p>name:${user.name}</p>
            <p>username:${user.username}</p>
            <p>email:${user.email}</p>
            <p>address:${user.address.street}</p>
            <p>company:${user.company.name}</p>
          </div>
          `
       }).join ("");
       console.log(html);
       document
         .querySelector("#app")
         .insertAdjacentHTML ("afterbegin", html)
    })
    .catch(error => {
      console.log (error)
    });
  }
  
  fetchData()
