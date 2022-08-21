// toString()
// 1. Create a function that is receiving a collection of employees
// and using toString() returns a string with comma-separated full
// names

const fullNames= employees.map(item =>" "+ item.firstName +" "+item.lastName)

console.log (fullNames.toString())

// 2. Create a function that is receiving a collection of employees
// and using toString() returns a string with comma-separated
// `email: salary` with the following format
// hloyley5@uol.com.br: $1368.00, ldoige2@mashable.com: $1873.56

const res= employees.map(item =>" "+ item.email +": "+item.salary)

console.log (res.toString())

// 3. * Create a custom Array.prototype.myToString it should work
// similarly to Array.prototype.toString

function myToString(array){
    array.forEach (function(item){
      console.log (item)
    }) 
  }

console.log (myToString(array))

// join()
// 4. Create a function that is receiving a collection of employees
// and returns a string containing emails in the following format
// email1@example.com//email2@example.com//email3@example.com

const res= employees.map(item =>item.email).join("/ /")

console.log (res)

// 5. Create a function that is receiving a collection of employees
// and returns a string with comma-separated email: salary

const res= employees.map(item =>item.email + ": " + item.salary).join(", ")

console.log (res)

// 6. * Create a custom Array.prototype.myJoin should work similarly
// to Array.prototype.join


// pop()
// 7. Create a function that is receiving an array and returns
// reversed one using pop()

function reversedArray (arr) {
    const reversedArr=[];
    for (let i=0; i< arr.length; i++){
     reversedArr.push(arr.pop(arr[0]));
    }
    return reversedArr;
   }
   
   console.log (reversedArray([1,2,3,4]))
    
//    8. Create a function that is receiving a sting argument and checks
//    if it is a palindrome using pop()
   
function palindrom(string) {
    const array = Array.from(string)
    let reversed = [];
    for (let i = 0; i = array.length; i++) {
      reversed.push(array.pop(array[i]));
    }
    console.log(array)
    return (JSON.stringify(array)===JSON.stringify(reversed))
  }
  
  
  console.log(palindrom("eye"))


//   9. * Create a custom Array.prototype.myPop should work similarly to
// Array.prototype.pop

Array.prototype.myPop=function (arr) {
    let newArr= [];
    for (let i=0; i< arr.length; i++){
        if (i !== arr.length-1){
            newArr.push (arr[i]);
        }
    }
    let last = arr[arr.length-1];

    return [last, newArr];
}

console.log (Array.prototype.myPop([ "a", "b", "c"]))
