const baseUrl = 'http://localhost:3000/diary';

function removeDiv (event){
  const removedButton$$ = event.target;
  const removedDiv$$ = removedButton$$.parentNode;

  // console.log(removedDiv$$)

  removedDiv$$.remove();
}  


const mostrarDato = (myJson) => {
    // console.log(myJson);

  myJson.sort ((a, b) => {
       const da = new Date (a.date);
       const db = new Date (b.date);
        return da - db;
     });

  for (const iterator of myJson) {
    //  console.log()
     const newDiv$$ = document.createElement('div');

     const newTitle$$ = document.createElement('h3');
     const newDate$$ = document.createElement('h5');
     const newP$$ = document.createElement('p');
     const newButton$$ = document.createElement('button');

     newTitle$$.innerHTML = iterator.title;
     newDate$$.innerHTML = iterator.date;
     newP$$.innerHTML = iterator.description;

     newButton$$.innerHTML = 'Eliminar';
     newButton$$.addEventListener('click', removeDiv);

     newDiv$$.appendChild(newTitle$$);
     newDiv$$.appendChild(newDate$$);
     newDiv$$.appendChild(newP$$);
     newDiv$$.appendChild(newButton$$);
     document.body.appendChild(newDiv$$);
   }
}


fetch (baseUrl)
    .then (res => res.json())
    .then ( myJson => {mostrarDato(myJson)} );
