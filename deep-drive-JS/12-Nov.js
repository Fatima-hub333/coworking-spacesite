// {Even Shorter Conditionals with short-Circuiting}
const response = "Read";
const isEmailVerified = true;
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

const userName = response && isEmailVerified || "guest";
console.log(userName);