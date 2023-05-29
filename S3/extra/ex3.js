const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const selectedDiv$$ = document.body.querySelector('[data-function="printHere"]');
const newUl$$ = document.createElement("ul");

for (const iterator of cars) {
    const newLi$$ = document.createElement("li");
    newLi$$.innerHTML = iterator;
    newUl$$.appendChild(newLi$$);
}

selectedDiv$$.appendChild(newUl$$);