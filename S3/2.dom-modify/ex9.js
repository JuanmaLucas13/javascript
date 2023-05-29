const newLista$$ = document.body.querySelectorAll('.fn-insert-here');

for (const iterator of newLista$$) {
    const newItem$$ = document.createElement("p");
    newItem$$.innerText = "voy dentro!";
    
    iterator.appendChild(newItem$$);
}

