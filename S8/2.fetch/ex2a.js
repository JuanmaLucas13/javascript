const baseUrl = 'https://api.nationalize.io?name=';


const mostrarDato = (myJson) => {

    console.log(myJson);
}

const getDataApi = (nombre) => {
 
   fetch (baseUrl + nombre)
   .then (res => res.json())
   .then ( myJson => {mostrarDato(myJson)}
      );
}

const getApi = (event) => {
    event.preventDefault();

    const getText$$ =  document.body.querySelector('input');

    if (getText$$.value.trim().length > 0)
       getDataApi(getText$$.value);
    else
       alert("Nombre no informado") ;
}

const getButton$$ =  document.body.querySelector('button');
getButton$$.addEventListener('click', getApi);


