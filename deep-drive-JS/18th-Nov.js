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


