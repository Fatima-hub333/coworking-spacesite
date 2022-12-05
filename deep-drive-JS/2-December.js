// const response = fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => respponse.json())
//   .then(data => console.log(data));
// const getBlogPost = async () => {}

// async function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('blog post'), 1000)
//   });
  
//   const result = await promise
//   console.log(result);
//   console.log('done');
// }

// getBlogPost();

// async function getPost() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await response.json();
//   console.log(data);
// }

// getPost();

// async function runAsync() {
//   try {
//     await Promise.resolve('Hello World');
//     null.someProperty = true;
//   } catch (error) {
//     console.error(error);
//   }
// }

// runAsync();

// async function runAsync() {
//   return await Promise.reject(Error('Oops'));
// }
// runAsync().catch(error => console.error(error));

async function getGithubUser() {
  try {
    const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const person = await response.json();
    console.log(person);
  }
  catch (error) {
    console.error(error);
  }
}

getGithubUser();