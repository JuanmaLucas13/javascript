const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const newUl$$ = document.createElement("ul");

for (const iterator of countries) {
    const newLi$$ = document.createElement("li");
    newLi$$.innerHTML = iterator;
    newUl$$.appendChild(newLi$$);
}

document.body.appendChild(newUl$$);