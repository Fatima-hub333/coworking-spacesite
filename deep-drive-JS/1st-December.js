// API - Application programming Interface: software to communicate
// API - helpful service
// REST API

// CRUD -
// Create POST
// Read GET
// Update PUT / PATCH
// Delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post
// POST /posts
const blogPost = {
  title: "Cool post",
  body: "lkajsdflkjasjlfda",
  userId: 1  
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   headers: {
//      "Content-Type": "application/json"
//   },
//   body: JSON.stringify(blogPost)
// })
//   .then(response => response.json())
//   .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      // throw new Error('Oops!');
      throw new Error(response.status);
      // 400 - resource not found
      // 500 - server had problems
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))