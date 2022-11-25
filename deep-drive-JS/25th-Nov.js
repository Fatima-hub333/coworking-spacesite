// {Classes}
// [What are Constructor Functions?]

// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }

// constructor function
// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }
// constructor function
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];   
}

const student1 = new Student(1, 'Reed');
const student2 = new Student(2, 'Doug')

student1.addSubject('Math');
student2.addSubject('Physics');
console.log(student2.subjects);

// Challenge of First Constructor Function

function Book(id, title, author, themes = []) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.themes = themes;
}

Book.prototype.addTheme = function (newTheme) {
  this.themes = [...this.themes, newTheme]
}

const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");
book1.addTheme("Fantasy");
book2.addTheme("Corruption");

console.log(book1.title);
console.log(book2.title);

// [prototypical inheritance - each instantiated object (from constructor function) inherits from prototype]
// every object has prototype
// console.log(Object.getPrototypeOf({}).constructor);
// console.log(new Object());
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, 'Reed');
// console.log(Object.getPrototypeOf(student1).constructor);
console.log(student1.getStudentName())