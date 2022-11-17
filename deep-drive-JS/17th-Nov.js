const color = 'purple';
const hexCode = '#ef0';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode,
};

function getColor(key) {
  return colors[key];
}
delete colors.purple;
delete colors['yellow Color']
console.log(colors);

// [Easy roperty Access with Destructuring]

const user = {
  name: 'Fatima',
  username: 'Fati',
  email: 'fatima@gmail.com',
  details: {
    title: 'Programmer'
  }
};

// const { name, details: { title } } = user;

function displayUserBio({name, details: { title }}) {
  console.log(`${name} is a ${title}`);
}

displayUserBio(user)

// const { username, email } = user;

// function displayUser() {
//   console.log(`username: ${username}, email: ${email}`)
// }

// displayUser()