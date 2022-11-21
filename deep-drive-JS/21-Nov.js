const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false
};

const todo2 = {
  text: 'Eat Lunch',
  complete: false
};

todos.push(todo1, todo2);
todos.pop()
console.log(todos);

// [First Array challenge]
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 
const favouriteSongs = [];
const song1 = 'abcdef'
const song2 = 'ghijk'
const song3 = 'lmnoqr'

favouriteSongs.push(song1, song2, song3);
console.log(favouriteSongs[favouriteSongs.length - 1])
favouriteSongs.pop()
console.log(favouriteSongs[favouriteSongs.length - 1]);