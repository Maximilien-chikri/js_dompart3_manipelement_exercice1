// 1
let first = document.querySelector('h2');
console.log(first.innerText);
// 2
first.innerText = "Exercice 1 test

// 3
let third = first.nextElementSibling
third.innerText = "exo1.innertext = random"

// 4
let fourth = document.querySelector('#users').id
let fourthBis = document.querySelectorAll("section")[0];
console.log(fourthBis.getAttribute('id'));
console.log(fourth);
// 5
let fifth = document.querySelectorAll("h1")[0];
console.log(fifth.classList);
console.log(fifth.className);
console.log(fifth.getAttribute("class"));
// 6
let sixth = document.querySelectorAll("h1");
let arraySixth = Array.from(sixth)

arraySixth.forEach(el =>{
    console.log(el.className);
});
// 7
let seventh = document.querySelector('input')
console.log(seventh.attributes);
// 8
let eighth =document.querySelector('input')
console.log(eighth.getAttribute('type'));
// 9
let ninth = document.querySelector('input#inputpasword3');
ninth.setAttribute('type', 'password')