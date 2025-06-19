const nav = document.getElementById('nav');

const links = [
    {href: 'index.html', text: 'Home'},
    {href: 'Recipes.html', text: 'Recipes'},
    {href: 'Ingredients.html', text: 'Ingredients'}
];

links.forEach((linkObj, index) => { 
    const a = document.createElement('a');
    a.href = linkObj.href;
    a.textContent = linkObj.text;
    nav.appendChild(a);


    if (index < links.length - 1) {
    nav.append(" | ");
  }
});

//Background color Change
document.body.style.backgroundColor = "#F3A26D";

// header 

const header = document.querySelector('h1');

heading.style.backgroundColor = '#FF7D29';  
heading.style.color = 'white';            
heading.style.padding = '100px';            
heading.style.borderRadius = '100px';        
heading.style.textAlign = 'center'; 
