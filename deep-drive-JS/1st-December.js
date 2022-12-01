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
// const blogPost = {
//   title: "Cool post",
//   body: "lkajsdflkjasjlfda",
//   userId: 1  
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   headers: {
//      "Content-Type": "application/json"
//   },
//   body: JSON.stringify(blogPost)
// })
//   .then(response => response.json())
//   .then(data => console.log(data))

// {Challenge Fetch API}

// The JSON Placeholder API has /users endpoint,
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work.

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3
fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(`${data.name} works for ${data.company.name}`)
  })
  .catch(err => console.log(err));
