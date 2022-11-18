const user = {
  name: '',
  username: '',
  phoneNumber: '',
  email: '',
  password: ''
}

const newUser = {
  username: 'Fatima Zahir',
  email: 'fatima@gmail.com',
  password: 'mypassword'
}

const createdUser = { ...user, ...newUser, verfified: false, name: 'Fatima', age: '25', phoneNumber: '03477871262'};
console.log(createdUser);

// [How Maps can Do What Objects Can't]
const nums = {
  1: 1,
  true: true
};

// const map1 = new Map([
//   [1, 1],
//   [true, true]
// ]);

// map1.set('key', 'value');

// map1.forEach((value, key) => {
//   console.log(key, value);
// });
// [...map1.keys()]

const user1 = { name: 'John' }
const user2 = { name: 'Fatima' }

const secretKey1 = 'avhvvyj';
const secretKey2 = 'bnngyiukjn';

const secretKeyMap = new Map([
  [user1, secretKey1],
  [user2, secretKey2]
]);

const key = secretKeyMap.get(user2);
console.log(key)

const favouritePlace = {
  music: 'jazz',
  name: 'Paris House'
}

const favouritePlaceMap = new Map([
  ['music', 'jazz'],
  ['name', 'Paris House'],
  ['visited', true],
  ['averageBill', 17.4]
]);

console.log(favouritePlace.get('averageBill'));