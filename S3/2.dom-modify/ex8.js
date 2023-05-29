const elementsDiv$$ = document.querySelectorAll('div');
const segundoDiv$$ = elementsDiv$$[1];

const newP$$ = document.createElement('p');
newP$$.innerHTML = 'voy en medico!';

document.body.insertBefore(newP$$,segundoDiv$$);
