const baseUrl = 'http://localhost:3000/Planets';
const personajesUrl = 'http://localhost:3000/characters?idPlanet';

let listaPersonajes = [];
let listaFiltrada = [];

const mostrarDescription = (event ) => {

    console.log(`#id${event.target.alt}`);

    const descripcion$$ = document.body.querySelector(`.id${event.target.alt}`);
    console.log(descripcion$$);

    if (descripcion$$ === null)
    {  
        const nodo$$ = event.target.parentNode;
        const newDescription$$ = document.createElement('p');
        newDescription$$.classList.add(`id${event.target.alt}`);

        const personajeBuscado = listaPersonajes.find
            (personaje => personaje.id == event.target.alt)
                
        if (personajeBuscado != null)      
           newDescription$$.innerHTML = personajeBuscado.description;
        else   
           newDescription$$.innerHTML = 'no encontrado';

        nodo$$.appendChild(newDescription$$);

    }
    else
    {
        console.log("hya");
        descripcion$$.remove();
    }
}


const visualizarPersonajes = (lista, nodo$$) => {

    for (const iterator of lista) {
        const newDiv$$ = document.createElement('div');
        newDiv$$.classList.add('imagenes');
        const newName$$ = document.createElement('h3');
        const newImg$$ = document.createElement('img');
   
        newName$$.innerHTML = iterator.name;
        newImg$$.src = iterator.avatar;
        newImg$$.alt = iterator.id;
        newImg$$.style.height="150px";
        newImg$$.style.width="100px";

        newImg$$.addEventListener('click', mostrarDescription);
        newDiv$$.appendChild(newName$$);
        newDiv$$.appendChild(newImg$$);
        nodo$$.appendChild(newDiv$$);
      }
}

const filtrarPersonajes = (event) => {

    borrarPersonajes();
    nodo$$ = event.target.parentNode;

    if (event.target.value.trim().length == 0)
       listaFiltrada = [...listaPersonajes] 
    else
        listaFiltrada = listaPersonajes.filter
           ( personaje => personaje.name.toLowerCase().includes(event.target.value.toLowerCase()) );

    visualizarPersonajes(listaFiltrada, nodo$$);
}

const mostrarPersonajes = (myjson1, nodo$$) =>
{
   const newP$$ = document.createElement('p');
   newP$$.classList.add("pinput");
   const newInput$$ = document.createElement('input');
   newInput$$.type = 'text';
   newInput$$.value = '';
   newInput$$.addEventListener('input', filtrarPersonajes);

   newP$$.appendChild(newInput$$);
   nodo$$.appendChild(newP$$);

   for (const iterator of myjson1) {
       const personaje = {};
       personaje.id = iterator.id;
       personaje.name = iterator.name;
       personaje.avatar = iterator.avatar;
       personaje.description = iterator.description; 
       listaPersonajes.push(personaje);
    }        

   visualizarPersonajes(listaPersonajes, nodo$$);
}

const borrarPersonajes = () => {
    const allImagenes$$ = document.body.querySelectorAll('.imagenes');
    for (const iterator of allImagenes$$) {
        iterator.remove();
    }
}

const pedirPersonajes =  (event) =>
{    
    borrarPersonajes();
    const allInputs$$ = document.body.querySelectorAll('.pinput');
    for (const iterator of allInputs$$) {
        iterator.remove();
    }

    if (listaPersonajes.length > 0)
     {
       listaPersonajes.splice(0, listaPersonajes.length);
     }  

    fetch (personajesUrl + '=' + event.target.alt)
      .then (res => res.json())
      .then ( myJson1 => {mostrarPersonajes(myJson1, event.target.parentNode)} );
}

const mostrarDato = (myJson) => {

  for (const iterator of myJson) {
     const newDiv$$ = document.createElement('div');

     const newName$$ = document.createElement('h3');
     const newImg$$ = document.createElement('img');

     newName$$.innerHTML = iterator.name;
     newImg$$.src = iterator.image;
     newImg$$.alt = iterator.id;
     newImg$$.style.height="500px";
     newImg$$.style.width="500px";
     newImg$$.addEventListener('click', pedirPersonajes);

     newDiv$$.appendChild(newName$$);
     newDiv$$.appendChild(newImg$$);
     document.body.appendChild(newDiv$$);
   }
}


fetch (baseUrl)
    .then (res => res.json())
    .then ( myJson => {mostrarDato(myJson)} );
