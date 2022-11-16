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
const bar = 'Abc';
const cafe = 'Hot & Spicy';
const restaurant = 'Habibi';
const favouritePlaces = {
  bar, cafe, restaurant,
  greeting() {
    console.log("Hello Fatima!");
  }
}

console.log(favouritePlaces);
favouritePlaces.greeting();

// undefined, null, boolean, number, string, symbol
const num = 42;
const anotherNum = 42;
console.log(num === anotherNum);

const obj2 = {}
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another Obj', anotherObj);