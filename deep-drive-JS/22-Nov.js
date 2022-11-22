const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

temperatures.map(temperature => temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature).forEach(temperature => {
  if (temperature.isHigh) {
    console.log(`Temperature ${temperature.degrees} was a record high last week!`);
  }
})

const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
];

const results = restaurants.find(restaurant =>
  restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
);
console.log(results);

const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const total = menuItems.reduce((accumulator, menuItem) => {
  console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
  `);
  return accumulator + menuItem.price;
}, 0);

console.log(total);
