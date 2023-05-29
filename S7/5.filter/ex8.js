const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const mostrarDatos = event  => 
{
    event.preventDefault();

    // Borro los datos de una consulta previa
    const oldP$$ = document.body.querySelectorAll('p');
    oldP$$.forEach ( oldP => {
         oldP.remove();    
     }
    )    

    // Miro si se ha introducido algo valido en el filtro
    const newFilter$$ = document.body.querySelector('input');
    if (newFilter$$.value.trim().length == 0)
     {
        //no hay caracteres validos.
        return;
     }

     //Filtro la lista, con lo introducido
     const newStreamers = streamers.filter(streamer =>
        {
    
            return streamer.name.toLowerCase().includes(
                  newFilter$$.value.toLowerCase());
        }
    )
    
     //Muestro los resultados del filtro en la pagina.
     newStreamers.forEach ( newStreamer => {
        const newName$$ = document.createElement('p');
        newName$$.innerHTML = newStreamer.name;
        document.body.appendChild(newName$$);
     }
    )    
}

const filterButton$$ = document.body.querySelector('button');
filterButton$$.addEventListener('click', mostrarDatos);

