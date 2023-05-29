const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let totalVolumen = 0;
let numeroVolumen = 0;

for (const usuario of users) {

    for (const propMusica in usuario) {

        if (propMusica == 'favoritesSounds')
         {
           const musicaFavorita = usuario[propMusica];

           for (const tipoMusica in musicaFavorita) {
               const musicaFavorita1 = musicaFavorita[tipoMusica];

            //    console.log("tipMusica: " + tipoMusica);

               for (const tipoVolumen in musicaFavorita1)
                {
                    // console.log("tipo: " + tipoVolumen);
                    if(tipoVolumen == "volume")
                   {
                      numeroVolumen = numeroVolumen +1;
                      totalVolumen = totalVolumen + musicaFavorita1[tipoVolumen];
                   }
               }
            }
         }        
     }
}
console.log(totalVolumen);
console.log(numeroVolumen);
console.log(totalVolumen / numeroVolumen);

