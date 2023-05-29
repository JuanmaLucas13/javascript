const baseUrl = 'https://hp-api.onrender.com/api/characters';

const mostrarDato = (myJson) => {
//   console.log(myJson);

//   for (const iterator of myJson) {
//      console.log(iterator);
//   }

  for (const iterator of myJson) {
    //  console.log()
     const newDiv$$ = document.createElement('div');
     const newName$$ = document.createElement('p');
     const newImg$$ = document.createElement('img');

     newName$$.innerHTML = iterator.name;

     for (const key in iterator) {
        if (key =='image')
           newImg$$.src = iterator[key];
     }

     newDiv$$.appendChild(newName$$);
     newDiv$$.appendChild(newImg$$);
     document.body.appendChild(newDiv$$);
   }
}


fetch (baseUrl)
    .then (res => {console.log(res); return res.json()})
    .then ( myJson => {mostrarDato(myJson)} );
