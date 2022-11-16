const blue = '#00f';
const orange = '#f60';

const colors = { yellow: '#ff0', blue, orange };
console.log(colors.blue)

const obj = {
  sayHi() {
    console.log('Hi')
  }
}

obj.sayHi();

const test = {
  sayHi() {
    console.log('Bye')
  }
}

test.sayHi()

// {Object Challenge}
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
const bar = 'Abc';
const cafe = 'Hot & Spicy';
const restaurant = 'Habibi';
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
const favouritePlaces = {
  bar, cafe, restaurant,
  greeting() {
    console.log("Hello Fatima!");
  }
}

console.log(favouritePlaces);
favouritePlaces.greeting();
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console