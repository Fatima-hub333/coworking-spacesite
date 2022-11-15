function convertTemperature(celsius, decimalPlaces = 1) {
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21))

// [Shorter function with arrow]
const userName = 'john';
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
function greetUser(name, callback) {
  return callback(capitalize(name));
}

const result = greetUser(userName, name => `Hi there, ${name}!`);
console.log(result)

// [Arrow Function Challenge]

const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2))
console.log(splitBill(10, 4))
console.log(splitBill(10, 5))

// Stretch goal start
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => countFromNum -= step;
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

// [Partial Application for single-Responsibility Functions]
const handleLikePost = (step) => {
  let likeCount = 0;
  return () => likeCount += step;
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

const getData = baseUrl => route => callback =>
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));
  

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
const getSocialMediaComments = getSocialMediaData('/comments');
const getSocialMediaPosts = getSocialMediaData('/posts');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));
});

// getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');