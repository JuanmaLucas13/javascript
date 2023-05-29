const baseURL = `https://api.thecatapi.com/v1/images/search`;

const EliminarGato = (event) => {
    const removeDiv$$ = event.target.parentNode.parentNode;
    removeDiv$$.remove();
}

const mostrarGato = (myJson) => {
   console.log(myJson[0].url)

   const newDiv$$ = document.createElement('div');
   newDiv$$.style.marginTop = '10px'; 
   const newImg$$ = document.createElement('img');
   newImg$$.style.height="500px";
   newImg$$.style.width="500px";
   newImg$$.src = myJson[0].url;

   const newP$$ = document.createElement('p');

   const newButton$$ = document.createElement('button');
   newButton$$.textContent = 'Eliminar';
   newButton$$.addEventListener('click', EliminarGato);
   newP$$.appendChild(newButton$$);

   newDiv$$.appendChild(newImg$$);
   newDiv$$.appendChild(newP$$);

   document.body.appendChild(newDiv$$);
}


const buscarGato = () => {
   fetch (baseURL)
     .then (res => res.json())
     .then ( myJson => {mostrarGato(myJson)} );
}


const newButton$$ = document.createElement('button');
newButton$$.innerHTML = 'Call a Cat';
newButton$$.addEventListener('click', buscarGato);
document.body.appendChild(newButton$$);
