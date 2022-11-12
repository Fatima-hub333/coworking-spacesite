let userName = 'Jane Doe';
let message = `Hi ${userName}, how are you?`;
console.log(message);

// better way to concatenate strings which is called 'template literal'

const weight = 150;
const moonWeight = `You weigh ${weight} pounds on the moon`;
console.log(moonWeight)

const practice = 20;
const sentence = `I practice this ${practice} times at the evening`;
console.log(sentence);

const threeLines = "This is a string \nthat spans \nthree lines."
console.log(threeLines)

//Template Literals Challenge
const mySon = "Luke";
const parentalStatus = "Father";
const messageSon = `${mySon}, I am your ${parentalStatus}`;
console.log(messageSon)

// How Variables Should be Named?
const name = 'Jane';
const Name = 'Mark';
const NAME = 'Fred';

console.log(name, Name, NAME);
let firstName = 'Jhon';
let lastName = 'Doe';
let fullName = `${firstName} ${lastName}`
console.log(fullName)

let isModalVisible = true;
if (isModalVisible) {
  //do something
}

let isLoading;
let haPosition;

const COLOR_RED = '#f00';

//if statements - evaluate boolean values
// const preferDarkMode = false;
// const prefersSolarizedMode = true;

// const colorMode = 'dark';

// switch (colorMode) {
//   case "solarized":
//     console.log('solarized mode set!');
//     document.body.style.background = 'palegoldenrod';
//     break;
//   case 'dark':
//     console.log('dark mode set!');
//     document.body.style.background = 'black';
//     break;
//   default:
//     console.log('light mode set!');
//     document.body.style.background = 'ghostwhite';
// }

const time = 'morning';

if (time === 'morning') {
  console.log("Good Morning!");
} else if (time === 'afternoon') {
  console.log("Good Afternoon!");
} else if (time === 'evening'){
  console.log("Good Evening!");
} else {
  console.log("Good Night!");
}

const time2 = 'night'
switch (time2) {
  case "morning":
    console.log("Good Morning!");
    break;
  case "afternoon":
    console.log("Good Afternoon!");
    break;
  case "evening":
    console.log("Good Evening!");
    break;
  default:
    console.log("Good Night!");
}

// {Types & How they can be changed?}
// 1) {Primitive Types}
// - string
// - number
// - boolean
// - undefined
// - null
// - symbol

// 2) Everything else - Object type

let messageTest = 'some string';

// How JS converts one data type to another?

// 1) Explicit Type Conversion: through functions avilable in every lanugage
// 2) Implicit Type Conversion:

// console.log(Boolean(messageTest));

// console.log('10' + 20);

if (0) {
  // if true, do something with value
  console.log('run');
} else {
  console.log('skipped');
}

// false
// 0
// ''
// null
// undefines
// NaN

// truthy (true)
// falsy (false)

// 1) Avoid direct comparisons in conditionals

if (!username) {
  console.log('no user');
}

// 2) Use triple equals === (strict equal operators)

if (null == undefined) {
  console.log('equals');
} else {
  console.log('not equals')
}

// 3) Convert to real Boolean Values where needed
if (Boolean(Nan) === Boolean(Nan)) {
  console.log('equal')
} else {
  console.log('not equals')
}

console.log("Challenge 1:")
console.log(!undefined); //true
console.log(Boolean(NaN)); // false
console.log(false === false); // true
console.log(5 === "5"); // false
console.log("Hello" == "hello"); //fasle

// {How to shorten conditionals with Ternaries?}
const isAuthenticated = true;
// let cartItemCount = 0;

// if (isAuthenticated) {
  // add item to cart
  // cartItemCount = 1;
// } else {
  // tell user to login
  // console.log("Please log in!");
// }

// const cartItemCount = isAuthenticated ? 1 : console.log("lease Login");
// console.log(cartItemCount)

const age = 12;
// let greeting;

// if (age < 10) {
//   greeting = "Hey there!";
// } else if (age > 18) {
// greeting = "Greetings";
// } else if (age > 10) {
//  greeting = "What's up?";
//} else {
//   greeting = "That's an interesting age!";
// }
// console.log(greeting)

const greeting = age < 10 ? "Hey There!" : age > 18 ? "Greetings" : age > 10 ? "What's Up?" : "That's an interesting age";
console.log(greeting)