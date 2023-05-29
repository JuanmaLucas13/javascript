const movies = [{name: "Your Name", durationInMinutes: 130},
  {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
  {name: "Origen", durationInMinutes: 165}, 
  {name: "El señor de los anillos", durationInMinutes: 967}, 
  {name: "Solo en casa", durationInMinutes: 214}, 
  {name: "El jardin de las palabras", durationInMinutes: 40}];

let moviesPequeñas = [];
let moviesMedianas = [];
let moviesGrandes = [];

for (const iterator of movies) {
    if (iterator.durationInMinutes < 100)
    {
       moviesPequeñas.push(iterator);
    }
    else
    {
        if (iterator.durationInMinutes >= 100 &&
            iterator.durationInMinutes < 200)
        {
           moviesMedianas.push(iterator);
        }
        else
        {
            moviesGrandes.push(iterator);
        }
    }
}



console.log("Pelis pequeñas");
console.log(moviesPequeñas);
console.log("Pelis medianas");
console.log(moviesMedianas);
console.log("Pelis grandes");
console.log(moviesGrandes);

