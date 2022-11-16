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