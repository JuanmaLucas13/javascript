const baseURL = 'http://localhost:3000/movies';


const pintarPeliculas = (myJson) => {
    const newDivContainer$$ = document.createElement('div');
    newDivContainer$$.style.display = 'flex';
    newDivContainer$$.style.flexWrap = 'wrap';

    for (const iterator of myJson) {
        const newDivPelicula$$ = document.createElement('div');
        newDivPelicula$$.style.height = '400px';
        newDivPelicula$$.style.width = '400px';
        newDivPelicula$$.style.margin = '5px';
        // newDivPelicula$$.style.border = 'solid';
        // newDivPelicula$$.style.display='flex';
        // newDivPelicula$$.style.flexDirection='column';
        // newDivPelicula$$.style.justifyContent="center";

        newDivPelicula$$.innerHTML = `
            <div style="display:flex;justify-content:center">
            <img height="200" src="./public/${iterator.img}"/>
            </div>            

            <h2 style="text-align: center">${iterator.title} (${iterator.date}) </h2>
            <p>${iterator.description}</p>
            <p>Valoracion de la pelicula: ${iterator.rating}</p>
        `
        newDivContainer$$.appendChild(newDivPelicula$$);
    }

    document.body.appendChild(newDivContainer$$);
    
}


fetch(baseURL)
   .then(res => res.json())
   .then(myJson => pintarPeliculas(myJson));
