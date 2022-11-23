// const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];
// const allMenuIdeas = [...lunchMenuIdeas];

// allMenuIdeas.push('Club Sandwich');
// console.log(lunchMenuIdeas);

const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
const allMenuIdeas = [
  ...breakfastMenuIdeas,
  ...dinnerMenuIdeas,
  "Harvest Salad", "Southern Fried Chicken"
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');
const meatLoafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');
const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatLoafIndex),
  ...allMenuIdeas.slice(meatLoafIndex + 1)
]

// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, saladIndex),
//   "Garden Salad",
//   ...allMenuIdeas.slice(saladIndex + 1)
// ];

console.log(finalMenuIdeas);

// const otherMenuIdeas = [...breakfastMenuIdeas, ...dinnerMenuIdeas, ...allMenuIdeas]
// console.log(allMenuIdeas.slice(1, 3))

const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

const [winner, ...losers] = finalMenuItems;
console.log({ winner, losers });

// let [first, second] = finalMenuItems;
// console.log('before', { first }, { second });
// [second, first] = [first, second];
// console.log('after', { first }, { second });

// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];

// console.log(first, second, third);
// console.log({ first }, { second });
// console.log(finalMenuItems);

// [Challenge of Array Destructuring]
const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers'];

//Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;

// console.log(chefsDishes);
// console.log(regularFishDishes);
// console.log(regularFishDishes)

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsMeatDishes, chefsFishDishes];
let regularDishes = [...regularFishDishes, regularMeatDishes];

console.log(chefsDishes);
console.log(regularDishes);