//for-in loop
// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//   console.log('value', obj[key]);
// }

//Object.keys(), Object.values(), Object.entries()

const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '879745': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17
  }
};

const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }
  return acc;
}, []);
console.log(usersOver20);
// Object.entries(users).map().filter();

// const user = {
//   name: 'John',
//   age: 29
// };

// console.log(object.values(user));
// const values = Object.keys(user).map(key => user[key]);
// console.log(values);
// const ageExists = Object.keys(user).includes('age');
// console.log(ageExists);

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49, 
  phone: 95
}

const monthlyTotal = Object.values(monthlyExpenses).reduce(
  (acc, expense) => acc + expense, 0
);

console.log(monthlyTotal);