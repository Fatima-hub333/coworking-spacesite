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

const userData = {
  username: 'Fatima',
  title: 'JavaScript Programmer',
  getBio: () => {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`)
    }, 2000);
  }
}

userData.getBio();