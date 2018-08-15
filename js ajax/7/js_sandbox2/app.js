// const sayHello = function () {
//     console.log('Hello');
// }
// sayHello()

// const sayHello =  () => {
//     console.log('Hello');
// }

// only oneline function does not needed braces
// const sayHello = () => console.log('hello')


// const sayHello = () => 'Hello'

// const sayHello = () => ({msg:'hello',msg2 : 'hello2'})

// const sayHello = (firstname, lastname) => console.log(firstname, lastname) 

// console.log(sayHello('ali','lai2'))

const user = ['ali','mohamad','reza','mina','honey','kish']
const namelength = user.map((name) =>{
    return name.length
})

console.log(namelength)