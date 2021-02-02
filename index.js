// /**
//  * Object Part 01
//  */

//  let myObject;


// myObject = {
//     x:10,
//     b:"abc"
// }

// console.log(myObject)

// myObject.x = 7;

// console.log(myObject)

// myObject.b = true

// console.log(myObject)

// myObject.c = true

// console.log(myObject)

// myObject.c = "abc"

// console.log(myObject)

// delete myObject.b;

// console.log(myObject)


// let myPost = {
// }

// myPost.postTitle = "Object  is reference type";

// console.log(myPost)

// myPost.postLike = 0;

// myPost.shared = false

// console.log(myPost)

// myPost.postLike = 1

// console.log(myPost);

// delete myPost.shared

// console.log(myPost)

// myPost.postLike = 0

// console.log(myPost)

// myPost.postLike = myPost.postLike + 1;

// console.log(myPost)

// myPost.postLike = myPost.postLike + 2;

// console.log(myPost)

// myPost.shared = true

// console.log(myPost)


/**
 * Example 2
 */

//  const myObject = {}

//  myObject.a = true

//  console.log(myObject);

//  myObject = {
//      a:true
//  }

/**
 * Challenge 2
 */

// let myObject = {a : 10}

// let copyOfMyObject = myObject
// console.log(copyOfMyObject)
// copyOfMyObject.b = false

// console.log(myObject)
// console.log(copyOfMyObject)

// const myObject = {
//     a: true,
//     b:null,
//     c:25
// }

// console.log(myObject["a"]);

// //  console.log(myObject[a])

// const propertyName = "c"

// console.log(myObject[propertyName]);

// console.log(myObject["propertyName"]);

  /**
   * challenge 3
   */

let objectWithNestedObject = {};

objectWithNestedObject["nestedObject"] = {}

// console.log(objectWithNestedObject)

objectWithNestedObject.nestedObject.a = null

// console.log(objectWithNestedObject)

// objectWithNestedObject.nestedObject["b"] = true

// console.log(objectWithNestedObject);

const newPropertyName = "b"

objectWithNestedObject.nestedObject[newPropertyName] = true

console.log(objectWithNestedObject);
















