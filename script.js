const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// const parrafoClass = document.querySelector('.parrafo');
const parrafoClass = document.getElementsByClassName('parrafo');
// const parrafoID = document.querySelector('#parrafo-id');
const parrafoID = document.getElementById('parrafo-id');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafoClass,
    parrafoID,
    input
});

h1.innerHTML = "Patito <br> feo </br>";
h1.innerText = "Patito <br> feo </br>";
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'nuevaclase');
console.log(h1.getAttribute('class'));

h1.classList.add('otra-clase');
console.log(h1.getAttribute('class'));
h1.classList.remove('nuevaclase');
console.log(h1.getAttribute('class'));

input.value = '4650';

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

console.log(img);

parrafoID.innerHTML = "";
parrafoID.append(img);