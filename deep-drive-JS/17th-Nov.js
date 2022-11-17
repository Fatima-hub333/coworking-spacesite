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

// [Challenge; Object Destructuring]
const recommendations = {
  pancakes: 'Nowhere Man',
  riceBowls: 'Pompoko',
  beer: 'The Craft Beer Co.',
  coffee: 'Coffee Roasters',
  small_plates: 'VeneTian Plates',
  music: {
    traditional: 'Fiddler\'s Elbow',
    jazz: 'The Paris House'
  }
}

const { beer, coffee } = recommendations;
const { music: { traditional, jazz } } = recommendations;

function displayMusicPlaces({ music: { traditional, jazz } }) {
  console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
}

displayMusicPlaces(recommendations);