const baseURL = 'http://localhost:3000/characters';
let pagina = 1;


const mostrarMas = () => {
    pagina = pagina +1;
    addTransition();
    pedirCharacters();

}

function addTransition() {
    const characters$$ = document.body.querySelector('.b-gallery');
    characters$$.classList.add("b-gallery--transition")
    setTimeout(() => {
        characters$$.classList.remove("b-gallery--transition")
    }, 1000)
}
const mostrarCharacters = (listaCharacters ) => {
    const newButton1$$ = document.body.querySelector('.b-btn');
    if (newButton1$$)
       newButton1$$.remove();

    const galeria$$ = document.body.querySelector('.b-gallery');
    
    for (const iterator of listaCharacters) {
        const newCharacter$$ = document.createElement('div');
        newCharacter$$.className = 'b-gallery__item';

        const newName$$ = document.createElement('h4');
        newName$$.className = 'b-gallery__text';
        newName$$.textContent = iterator.name;
        
        const newImagen$$ = document.createElement('img');
        newImagen$$.className = 'b-gallery__img';
        newImagen$$.src = iterator.image;
        newImagen$$.alt = iterator.id;

        newCharacter$$.appendChild(newName$$);
        newCharacter$$.appendChild(newImagen$$);

        galeria$$.appendChild(newCharacter$$)
    }

    if (pagina < 4)
     {
       console.log('creo el boton');
       const newButton$$ = document.createElement('button');
       newButton$$.className = 'b-btn';
       newButton$$.textContent = 'Mostrar mas';
       newButton$$.addEventListener('click', mostrarMas);
       document.body.appendChild(newButton$$);
     }  
}

const pedirCharacters = () => {
    fetch (baseURL + `?_page=${pagina}&_limit=5`)
    .then(res => res.json())
    .then(myJson => mostrarCharacters(myJson));
}

const inicio = () => {
    pagina = 1;
    pedirCharacters();
}

inicio();