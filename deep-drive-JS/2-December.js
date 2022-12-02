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

async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

getPost();