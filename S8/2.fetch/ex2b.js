const baseUrl = 'https://api.nationalize.io?name=';

const mostrarDato = (myJson) => {

    console.log(myJson);

    const newName$$ = document.createElement('p');

    newName$$.innerText = 'El nombre ' + myJson.name;
    let index = 0;
    let paises = myJson.country.length;

    console.log (paises);

    for (const iterator of myJson.country) {

        console.log (iterator);
        if (index == 0)
        {
           newName$$.innerText = newName$$.innerText  + 
            ' tiene un ' + iterator.probability + ' por ciento de ser de ' +
            iterator.country_id;
        }    
        else    
        {
           if (index < 4)
           { 
              newName$$.innerText = newName$$.innerText  + 
                ', tiene un ' + iterator.probability + ' por ciento de ser de ' +
                 iterator.country_id;
           }      
           else      
           {
              newName$$.innerText = newName$$.innerText  + 
                ' y tiene un ' + iterator.probability + ' por ciento de ser de ' +
                iterator.country_id;
           }     
        }        

        index = index +1;
    }


    document.body.appendChild(newName$$);
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


    getText$$.value = '';   
}

const getButton$$ =  document.body.querySelector('button');
getButton$$.addEventListener('click', getApi);