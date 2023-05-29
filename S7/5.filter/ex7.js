const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const newFilter$$ = document.body.querySelector('input');


const mostrarDatos = event  => 
{
    const oldP$$ = document.body.querySelectorAll('p');
    oldP$$.forEach ( oldP => {
         oldP.remove();    
     }
    )    

    if (newFilter$$.value.trim().length == 0)
     {
        return;
     }

    const newStreamers = streamers.filter(streamer =>
        {
    
            return streamer.name.toLowerCase().includes(
                    newFilter$$.toLowerCase().value);
        }
    )
    
    newStreamers.forEach ( newStreamer => {
    
        const newName$$ = document.createElement('p');
        newName$$.innerHTML = newStreamer.name;
        document.body.appendChild(newName$$);
     }
    )    
}

newFilter$$.addEventListener('input', mostrarDatos);

