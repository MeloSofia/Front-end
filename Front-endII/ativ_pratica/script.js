const itemMenu = [
    {nome: 'Início', url: 'index.html'},
    {nome: 'Sobre', url: 'sobre.html'},
    {nome: 'Contato', url:'contato.html'}
]

function estrutura (){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    header.style.backgroundColor = '#000000'
    body.prepend(header) 
    itemMenu.forEach(item =>{
        item.nome  
    })
}

estrutura()
