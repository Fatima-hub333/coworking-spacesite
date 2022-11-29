const p = document.createElement('p');
p.innerText = 'Hello World';
document.body.append(p)

document.body.style.background = "Yellow";
p.style.color = "Red";
p.addEventListener('click', () => console.log('clicked'))