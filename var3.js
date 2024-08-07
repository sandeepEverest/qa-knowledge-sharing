x=10
y=20
z='A'
a=x+y+z
console.log(a) // printed 30A
a=y+x+z
console.log(a) // printed 30A
a=z+x+y
console.log(a) // printed A1020
//const a=9
//console.log(a) // ReferenceError: Cannot access 'a' before initialization
const b=10
console.log(b)
// b=20  TypeError: Assignment to constant variable.
m=b
m=b+a
console.log(m)