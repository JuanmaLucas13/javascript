const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const newLista$$ = document.createElement('ul');

for (let index = 0; index < apps.length; index++) {

    const newItemLista$$ = document.createElement("li");
    newItemLista$$.innerText = apps[index];
    
    newLista$$.appendChild(newItemLista$$);
}

document.body.appendChild(newLista$$);