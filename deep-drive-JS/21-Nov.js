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
const favouriteSongs = [];
const song1 = 'abcdef'
const song2 = 'ghijk'
const song3 = 'lmnoqr'

favouriteSongs.push(song1, song2, song3);
console.log(favouriteSongs[favouriteSongs.length - 1])
favouriteSongs.pop()
console.log(favouriteSongs[favouriteSongs.length - 1]);

// [Check element existence in array]

const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degress: 82, isRecordTemp: true },
  { degrees: 7, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

const result= temperatures.every(temperature => temperature.isRecordTemp === true);
console.log(result)

// [Some & every methods]
const songs = [
  {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
  {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
  {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
  {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
  {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const hasWonGrammy = songs.some(song => song.wonGrammy === true);
console.log(hasWonGrammy);

const allMegaHits = songs.every(song => song.timesStreamed > 1.5);
console.log(allMegaHits);