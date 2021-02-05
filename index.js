/**
 * Ex1
 */

// function myFun(){}
// console.log(myFun());

/**
 * Ex2
 */

//  function myFun(a,b){
//     console.log(a);
//     console.log(b);
    
//  }

//  myFun(10,2);

//  myFun(true,null);

//  myFun(true,false);

//  myFun();

//  myFun(10)

//  myFun("abc");

// console.log(myFun(4,1));

/**
 * Ex3
 */


// function myFun(a,b){
//     console.log(a,b);
// }

// console.log(myFun(3,2));

// console.log(a);


// function myFun(a,b){
//     console.log(a,b);
    
// }

// console.log(myFun(3,2));

// console.log(a);
// console.log(b);

////Ex4

// function myFun1(a,b){
//     console.log(a,b);
// }

// function myFun2(a,b){
//     console.log(a,b);
// }

// const a = true;
// const b = null;

// myFun1(2,3)
// myFun2(5,7)

// console.log(a,b);

////Ex5

// function mySum(a,b){
//     return a+b;
// }

// mySum(2,2)

// console.log(mySum(2,2));

// console.log(mySum("abc",2));

// console.log(mySum());

////Ex6

// function myFun(a){
//     console.log(a);
//     //return a;
//     // console.log(a);
//     // const c = 10
// }

// myFun(10)


/// Chalenge 1


//  function mult(a,b,c){
//      let d = a*b*c;
//      console.log(d)
//  }

//  mult(1,2,3)

//  mult(0,2,5)

//  mult()

//  console.log(mult(2,3,5)); 


// /// Chalenge 2

// function concatenateString(a,b){
   
//     return a+b
// }

// const c = concatenateString("Vishal ","Yadav");

// console.log(c)



///challenge 3

// function outerFunction(a,b){
//     function innerFunction(p){
//         return p * p;
//     }
//     const sum = a + b;
//     const result = innerFunction(sum)
//     console.log(result)
// }

// outerFunction(2,2)

/**
 * Function Expression
 */

// // function(){}

//   const myFun = function(){};
//  console.log(myFun()); 

// console.log(myFun)
   

/**
 * Callback function
 */

//  setTimeout(function(){
//      console.log("Delayed message");
//  },3000);
// let i = 1
// setInterval(function(){
//     console.log("Message log in one secod" + i);
//     i = i + 1
// },1000);


// Challenge

// let i = 1;
//  setInterval(function(){
     
//     console.log("Here is message number "+1);
    

//  }, 2000);
let i = 1;
const myInterval = setInterval(function(){
    console.log("Here is messsage number "+ i);
    i = i +1
},2000)

console.log(myInterval)

setTimeout(function(){
    clearInterval(myInterval)
}, 10000);