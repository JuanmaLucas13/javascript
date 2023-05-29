const newDiv$$ = document.createElement('div');

for (let index = 0; index < 6; index++) {
    const newContent$$ = document.createElement("p");
    newContent$$.innerText = 'Hola, soy el parrafo ' + index;
    
    newDiv$$.appendChild(newContent$$);
}

document.body.appendChild(newDiv$$);