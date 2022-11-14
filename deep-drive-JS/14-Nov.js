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
