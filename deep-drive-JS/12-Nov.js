// {Even Shorter Conditionals with short-Circuiting}
// const response = "Read";
// const isEmailVerified = true;
// let userName;

// if (response) {
//   if (isEmailVerified) {
//     userName = response;
//   }
// } else {
//   userName = "guest";
// }

// const result = true || true;
// console.log(result);

// const userName = response || "guest";
// console.log(userName);

// const result = true && false;
// console.log(result);

// const userName = response && isEmailVerified || "guest";
// console.log(userName);

// {Short-circuiting Challenge}

const Karma = 143;
const isModerator = true;

let hasEnoughKarma = Karma > 100 ? true : false;
let canUpvote = isModerator || hasEnoughKarma;
console.log("canUpvote:", canUpvote);


let canDelete = hasEnoughKarma && isModerator;
console.log("canDelete:", canDelete);

const response = "JohnDoe";
const hasValidEmail = true;
const user = hasValidEmail && (response || "guest");
console.log("user: ", user);
