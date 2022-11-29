// const p = document.createElement('p');
// p.innerText = 'Hello World';
// document.body.append(p)

// document.body.style.background = "Yellow";
// p.style.color = "Red";
// p.addEventListener('click', () => console.log('clicked'))

// const links = document.querySelectorAll('a');
// console.log(link);

// links.forEach(link => {
//   if (link.matches('[href="/login"]')) {
//     const loginLink = link;
//     console.log(loginLink);
//   }
  
// })

// const divs = document.getElementsByTagName('div');
// console.log(divs);

// const newPost = document.createElement('div');
// newPost.className = 'top-post';
// newPost.innerHTML = "<strong>This is a new post</strong>"

// const post = document.querySelector('.post');
// post.prepend(newPost);
// document.body.prepend(newPost);

// Challenge Solution
// const title = document.querySelector('h1');
// title.innerHTML = "Creating and modifying HTML elements";

// const tagline = document.createElement('h2');
// tagline.className = 'tagline';
// tagline.innerHTML = 'I can create HTML elements.'

// title.append(tagline);

// const posts = document.querySelectorAll(".post");
// posts.addEventListener("click", event => {
//   console.log(event.target);
//   console.log("Do You want to edit this post?")
// });

// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {
//   post.addEventListener('click', event => {
//     console.log('Do you want to edit this post?')
//   })
// })

// document.body.addEventListener('click', event => {
//   if (!event.target.closest('.post')) return;
//   console.log('Do you want to edit this post?')
// })

const title = document.querySelector('h1');
title.addEventListener('click', event => {
  console.log(event.target.textContent)
})

document.body.addEventListener('click', event => {
  console.log(event.target.textContent);
});