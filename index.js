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
document.body.style.backgroundColor = "#B4E380";

// header 

const heading = document.querySelector('h1');

if (heading) {
  heading.style.backgroundColor = '#FFA447';  
  heading.style.color = 'white';             
  heading.style.padding = '15px';
  heading.style.borderRadius = '20px';
  heading.style.textAlign = 'center';
} else {
  console.log('Heading not found!');
}

