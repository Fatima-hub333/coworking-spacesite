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