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
