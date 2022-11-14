// {Functions Module}

const user1 = "Reed";
const user2 = "Doug";

function sendUserMessage(user, text) {
  console.log(`User ${user} says: ${text}`);
}

sendUserMessage(user1, 'Hey there');
sendUserMessage(user2, 'Whats Up');

// [Functions first Challenge]
// Challenge: Write a function splitBill() that lets you know how much
// you need to pay to split any bill between you and your friends.
// It should return a message with a number.

function splitBill(amount, numPeople) {
  return `Each person needs to pay ${amount / numPeople}`;
}

//Testing Solution
console.log(splitBill(10, 2));
console.log(splitBill(16, 4));
console.log(splitBill(350, 9));

// [What is a closure & Why it matters]
function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() {
    likeCount += step;    
    return likeCount;
  }
}

const doubleLike = handleLikePost(5);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

// {Closures Challenge}
// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}

const countingDown = countdown(20, 5);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());