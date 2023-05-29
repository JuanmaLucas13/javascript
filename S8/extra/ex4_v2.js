const baseUrl = 'http://localhost:3000/Planets';
const personajesUrl = 'http://localhost:3000/characters?idPlanet';

// lista que contendra los personajes visualizados.
// de esta forma, cuando filtremos, lo haremos contra esta lista en lugar
//  de pedir un fetch y filtrar.
//  si no hay nada visualizado, esta lista estara vacia.
let listaPersonajes = [];

// Esta funcion sirve para mostrar / ocultar la descripcion del personaje
//  si esta mostrada, se oculta.
//  si no esta mostrada, se visualiza
const mostrarDescription = (event ) => {

    // obtengo el div asociado a la imagen.
    const nodo$$ = event.target.parentNode;
    
    const descripcion$$ = document.body.querySelector('.divdescription');

    if (descripcion$$ !== null)
    {   // hay una descripcion mostrada.
        // miro que imagen tiene la descripcion visualizada
        const imgSelected$$ = document.body.querySelector('.fondoimagen');
        // le quito el fondo.
        imgSelected$$.classList.remove('fondoimagen');

        // borro la descripcion
        descripcion$$.remove();

        if (nodo$$ === imgSelected$$)
           return;
    }

    // le pongo el fondo de seleccion.
    nodo$$.classList.add('fondoimagen');

    // muestro la descripcion que corresponda.
    const newDivDescription$$ = document.createElement('div');
    newDivDescription$$.classList.add('divdescription');

    // creo un nod para incluir un tipo p y como clase, pongo el id del personaje.
    const newDescription$$ = document.createElement('p');

    // busco en la lista de personajes, el personaje clicado para obtener la descripcion.
    const personajeBuscado = listaPersonajes.find
        (personaje => personaje.id == event.target.alt)
                
    if (personajeBuscado != null)      
       // informo la descripcion del personaje en el nodo creado.
       newDescription$$.innerHTML = personajeBuscado.description;
    else   
       newDescription$$.innerHTML = 'no encontrado';

    // incluyo el nodo en el div de la imagen   
    newDivDescription$$.appendChild((newDescription$$))
    document.body.appendChild(newDivDescription$$);
}

// Esta funcion se encarga de mostrar los personajes del planeta
// ya sean todos o filtrados.
//  recibe como parametros la lista de personajes a visualizar 
// se crea un nuevo div container_img, para mostrar las imagenes 
// con display flex
const visualizarPersonajes = (lista) => {

    // creo el div contenedor de imagenes
    const nodo$$ = document.createElement('div');
    nodo$$.classList.add('imgcontainer');

    // recorro la lista de personajes a mostrar y creo
    //  un div para almacenar un h3 con el nombre y
    //  una imagen con el avatar.
    for (const iterator of lista)
     {
        // creo el div
        const newDiv$$ = document.createElement('div');
        newDiv$$.classList.add('imagenes');

        // creo el h3 con el nombre
        const newName$$ = document.createElement('h3');
        newName$$.innerHTML = `<span>${iterator.name}</span>`;
        newName$$.style.width="130px";

        // creo la imagen con el avatar
        const newImg$$ = document.createElement('img');
        newImg$$.src = iterator.avatar;
        newImg$$.alt = iterator.id;
        newImg$$.style.height="160px";
        newImg$$.style.width="130px";
        //asigno el event listener, para mostrar la descripcion.
        newImg$$.addEventListener('click', mostrarDescription);

        // incluyo los elementos en el div del personaje
        newDiv$$.appendChild(newName$$);
        newDiv$$.appendChild(newImg$$);

        // incluyo el div en el div container
        nodo$$.appendChild(newDiv$$);
      }

     // incluyo el div container en el body. 
     document.body.appendChild(nodo$$);
}

// esta funcion se invoca cuando se filtra personajes de un planeta.
const filtrarPersonajes = (event) => {

    // se borra el div con todas la imagenes.
    borrarPersonajes();

    // creo una nueva lista para tener los personajes filtrados.
    let listaFiltrada = [];

    // si no tengo nada informado, muestro todos los personajes.
    if (event.target.value.trim().length == 0)
       listaFiltrada = [...listaPersonajes] 
    else
        // si hay algun filtro informado, filtro la lista de personajes del planeta.
        listaFiltrada = listaPersonajes.filter
           ( personaje => personaje.name.toLowerCase().includes(event.target.value.toLowerCase()) );

    // visualizo los personajes correspondiente.       
    visualizarPersonajes(listaFiltrada);
}

// Esta funcion se encarga de visualizar los personajes asociados a un planeta.
//  esta funcion crea un elemento de tipo p que contendra:
//    un campo tipo input, para filtrar personajes
// este elemento, se guarda en el div del planeta.
const mostrarPersonajes = (myjson1, nodo$$) =>
{
   // creo el p, para generar el input, debajo de la imagen 
   const newP$$ = document.createElement('p');
   newP$$.classList.add("pinput");

   // creo el input para filtrar y le asigon un evento
   const newInput$$ = document.createElement('input');
   newInput$$.type = 'text';
   newInput$$.value = '';
   newInput$$.addEventListener('input', filtrarPersonajes);

   // guardo el input en el elemento p
   newP$$.appendChild(newInput$$);
   // guardo el elemento p en el div del planeta
   nodo$$.appendChild(newP$$);

   // guardo la lista de personajes en mi array global
   for (const iterator of myjson1) {
       const personaje = {};
       personaje.id = iterator.id;
       personaje.name = iterator.name;
       personaje.avatar = iterator.avatar;
       personaje.description = iterator.description; 
       listaPersonajes.push(personaje);
    }        

   // llamo a una  funcion para visualizar los personajes.
   visualizarPersonajes(listaPersonajes);
}

// Esta funcion se encarga de borrar las imagenes de los personajes, que se pudieran estar
//  visualizando, al clickar en un planeta o al hacer el filtro de personajes.
// Si alguna descripcion estuviera visualizada, se borra.
const borrarPersonajes = () => {
     const allImagenes$$ = document.body.querySelector('.imgcontainer');
     if (allImagenes$$ != null)
        allImagenes$$.remove();

    // const allImagenes$$ = document.body.querySelectorAll('.imagenes');
    // for (const iterator of allImagenes$$) {
    //     iterator.remove();
    // }

    // miro si hay descripcion visualizada.
    const descripcion$$ = document.body.querySelector('.divdescription');

    if (descripcion$$ !== null)
    {   // hay una descripcion mostrada.
        // borro la descripcion
        descripcion$$.remove();
    }
}

// esta funcion, se encarga de pedir la lista de personajes, una vez clicado el planeta.
const pedirPersonajes =  (event) =>
{    
    // invoco a la siguiente funcion para borrar los personajes que se estuvieran
    //   visualizando
    borrarPersonajes();

    // elimino el input asociado al planeta, para los filtros.
    const allInputs$$ = document.body.querySelectorAll('.pinput');
    for (const iterator of allInputs$$) {
        iterator.remove();
    }

    // si tengo la lista de personales informada, la vacio
    if (listaPersonajes.length > 0)
     {
       listaPersonajes.splice(0, listaPersonajes.length);
     }  

    // hago el fetch, para la solicitud de los personajes. 
    fetch (personajesUrl + '=' + event.target.alt)
      .then (res => res.json())
      .then ( myJson1 => {mostrarPersonajes(myJson1, event.target.parentNode)} );
}

// Esta es la funcion que se ejecutara cuando se reciba la lista de planetas.
//  inserta en la pagina html, el nombre y la imagen de los planetas recibidos.
const mostrarDato = (myJson) => {

  // creo un div generico para tener display flex y que los planetas esten en linea.  
  const newDivContainer$$ = document.createElement('div');
  newDivContainer$$.classList.add('container');

  // recorro los planetas y para cada uno de ellos, creo:
  // un div, que contendra un h3 con el nombre y un img con la imagen.
  // la imagen la doy un ano de 300 * 350 pixels y pongo como alt el id del planeta.
  for (const iterator of myJson) {
     const newDiv$$ = document.createElement('div');
     newDiv$$.classList.add('container__div');

     // elemento h3 con el nombre
     const newName$$ = document.createElement('h3');
     newName$$.innerHTML = iterator.name;

     // elemento img con la foto del planeta
     const newImg$$ = document.createElement('img');
     newImg$$.src = iterator.image;
     newImg$$.alt = iterator.id;
     newImg$$.style.height="300px";
     newImg$$.style.width="350px";

     // aqui ponemos un eventlistener para el click en el planeta.
     newImg$$.addEventListener('click', pedirPersonajes);

     // añadimos los dos elmentos al div asociado al planeta.
     newDiv$$.appendChild(newName$$);
     newDiv$$.appendChild(newImg$$);

     // añadimos el div del plaenta al div generico
     newDivContainer$$.appendChild(newDiv$$);
   }

   // añadimos el div generico al body del html
   document.body.appendChild(newDivContainer$$);
}

// Inicio del javascript  - peticion de los planetas.
fetch (baseUrl)
    .then (res => res.json())
    .then ( myJson => {mostrarDato(myJson)} );
