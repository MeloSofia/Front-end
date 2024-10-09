const titulo = document.querySelector('h1')
// console.log('innerHTML:',titulo.innerHTML)
// console.log('innerText:',titulo.innerText)
// console.log('textContent:',titulo.textContent)
// titulo.textContent = 'Sofia linda'

const body = document.querySelector('body');
const lista = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

item1.textContent = 'item 1';
item2.textContent = 'item 2';
item3.textContent = 'item 3';
lista.append(item1);
lista.append(item2);
lista.append(item3);
body.append(lista);
lista.style.marginLeft = '47%'
lista.style.color = " rgba(42, 23, 131, 0.558)"
body.prepend(h1)

// const ancora = document.createElement('a');
// ancora.setAttribute('href','https://www.ifro.edu.br');
// ancora.textContent = 'Ifro';
// ancora.setAttribute('target','_blank');
// ancora.style.color = '#ffff';
// ancora.style.textDecoration = 'none';
// ancora.style.fontSize = '130%';
// titulo.remove()
// body.appendChild(ancora);