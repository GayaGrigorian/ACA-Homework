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

// push()
// 10. Create a function that is receiving a number and returns an
// array which is containing all even digits. Use push method

function allEven(number) {
  const arr = Array.from(String(number), Number);
  const even = []
  arr.forEach(number => {
    if (number % 2 === 0) {
      even.push(number);
    }
  })
  return even
}

console.log(allEven(1256485596))


// 11. Create a function that will receive two collections of
// employees and adds the items of the second collection to the
// first collection. Use push method

// 12. * Create a custom Array.prototype.myPush should work
// similarly to Array.prototype.push


// shift()
// 13. * Create a custom Array.prototype.myShift should work
// similarly to Array.prototype.shift

const Array.prototype.myShift = function (arr){
	let firstItem=arr[0];
  let newArr=[];
  for (let i=1; i<arr.length;i++){
    newArr[i-1]=arr[i]
  }
  return [firstItem, newArr]
}

console.log(Array.prototype.myShift([1,2,5,6]))


// unshift()
// 14. * Create a custom Array.prototype.myUnshift should work
// similarly to Array.prototype.unshift


// concat()
// 15. Using concat compute the union of two arrays and then remove
// all duplicated items if they exist

let arr1= [1,5,3,6,7];
let arr2= [6,8,4,2,3,5];

let arr=arr1.concat(arr2)

let result= arr.filter((item,
            index) => arr.indexOf(item) === index);
            
console.log (result)


// 16. * Create a custom Array.prototype.myConcat should work
// similarly to Array.prototype.concat

const Array.prototype.myConcat = function () {
  let result = [];
  
  for (let i = 0; i < arguments.length; i++) {
    let currentArray = arguments[i]
    for (let j = 0; j < currentArray.length; j++) {
      result.push(currentArray[j])
    }
  }
  return result
}

console.log (Array.prototype.myConcat([1,2,6], [5,8,6]))


// splice()
// 17. Using the splice method, write a function that will fill the
// missing numbers of a sorted array of numbers, to make it
// consecutive.
// Example: [1,2,3,6] should become [1,2,3,4,5,6]


// 18. Using the splice method, create a function which is removing
// duplicated numbers from a sorted array of numbers

function noDuplicates(arr) {   
  if (arr.length === 0) return 0;
  for (let i = 1; i <= arr.length; i++){
      if(arr[i] === arr[i-1]){
          arr.splice(arr[i], 1);
      } 
  }
  return arr;
}

console.log (noDuplicates([1,2,2,5,6,6,7,8,8,11]))

// 19. ** Create a custom Array.prototype.mySplice should work
// similarly to Array.prototype.splice

function mySplice (start, deletecount, elem){
	let deletedElem=[];
  for (let i=start; i<start+delete	count; i++){
     deletedElem.push(this[i]);
  }
  for (let i=start; i<this.length; i++) {
  	if (i===start) {
    	this[i]=elem;
      i++
    }
    this[i]= this[i+deletecount-1];
  }
  for (let j=0; j<deletecount-1; j++){
  	this.pop();
  }
		return deletedElem
}

let arr=[2,3,2,4,5,6,8,7]
arr["f"]=mySplice
arr.f(2,3, "*")
arr()


// slice()
// 20. Using slice, write a JavaScript function to clone an array

function copy(arr) {
  arr.slice();
  return arr;
}

console.log(copy([5,2,9,8]));


// 21. Using slice, Write a JavaScript function to get the last
// element of an array. Passing a parameter 'n' will return the
// last 'n' elements of the array

let lastElem =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };
  
  console.log (lastElem([7,3,6,5]))


  // 22. Using slice, Write a JavaScript function to get the first
  // element of an array. Passing a parameter 'n' will return the
  // first 'n' elements of the array

  let firstElem =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
  };

console.log(firstElem([7,3,6,5]))


// 23. * Create a custom Array.prototype.mySlice should work
// similarly to Array.prototype.slice

let mySlice= function (arr, start, end){
  if (!end){
   end=arr.length;
  }
  let newArr=[];
  for (let i=0; i<arr.length; i++){
    if (i>=start && i<end){
     newArr.push(arr[i])
   }
  }
  return newArr
}

console.log (mySlice([2,5,8,6],0,2))


// sort()
// 24. Using sort, Write a JavaScript function to get the max
// element of an array of numbers

function maxElem(arr) {
  arr.sort(function(a, b) {
    return a - b
  })
  return arr[arr.length-1]
}

console.log (maxElem ([2,5,9,1,3,4,7]))


// 25. Using sort, Write a JavaScript function to get the min
// element of an array of numbers

function maxElem(arr) {
  arr.sort(function(a, b) {
    return a - b
  })
  return arr.shift()
}


// 26. Using sort, Write a JavaScript function to sort the
// collection of employees by their name

function sortNames(arr) {
  arr.sort(function(a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.ffirstName > b.firstName) {
      return 1;
    }
    return 0;
  });
  return arr
}

console.log(sortNames(employees))

// 27. *** Create a custom Array.prototype.mySort should work
// similarly to Array.prototype.sort


// reverse()
// 28. Using reverse, write a function that checks if the string is
// a palindrome

function isPalindrome(string) {
  const array = string.split('');
  const reverseArray = array.reverse();
  const reverseString = reverseArray.join('');

  if (string == reverseString) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
}


console.log(isPalindrome("eye"))

// map()
// 29. Using the map, write a function to clone an array

function cloneArr(arr) {
  const res= arr.map(function(i) {
    return i
  })
  return res
}

console.log(cloneArr([4, 5, 6, 8]))


// 30. Using the map write a function that returns an array
// containing only firstNames of all employees

function firstNames (arr){
  const res= arr.map (function(i){
    return i.firstName
  })
  return res
 }
 
 console.log (firstNames(employees))

 

//  filter()
// 31. Using the filter, write a JavaScript function to clone an
// array

function cloneArr(arr) {
  const result = arr.filter(function(i) {
    return i
  })
  return result
}

console.log(cloneArr([2, 3, 4, 5, 6, 7, 8]))


// 32. Write a function that will return only employees with salary
// greater than n

function filterEmployees(arr,n){
  const res= arr.filter(function (i){
 	return i.salary > n
 })
 return res
}

console.log (filterEmployees(employees,"$4"))


// 33. * Create a custom Array.prototype.myFilter should work
// similarly to Array.prototype.filter

const Array.prototype.myFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!!callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}


// reduce()
// 34. Using reduce write a function that returns the total salary
// of all employees

function salary(arr) {
  return res= arr.reduce((accu, {salary})=> accu+salary,0)
}

console.log (salary(employees))


/* 35. Using reduce create a function that is receiving a collection
of employees and returns a string containing emails in the
following format
email1@example.com//email2@example.com//email3@example.com */

function emails(arr){
  const res= arr.reduce(function(total, {email}){
  return total+"//"+ email;
  })
 return res
}

console.log (emails(employees))
