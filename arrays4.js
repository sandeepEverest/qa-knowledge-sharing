fruits=['banana','orange','tomato','mango','grapes']
console.log("The length of the array is" +fruits.length)
console.log(fruits.toString())
fruits.push("kiwi") // insert the element to the last
console.log(fruits.toString())
console.log("The length of the new array is" +fruits.length)
fruits.pop() // removes the last element from the list
console.log(fruits.toString())
console.log("The length of the new array is" +fruits.length)
let z=fruits.shift() // removes the first element from the list
console.log("Fruit thats been removed from the array list is " +z)
fruits.unshift("Lemon") // adds a new element to the begining and moves the other elements accordingly
console.log(fruits.toString())


