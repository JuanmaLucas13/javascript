function swap(array, posicion1, posicion2) {
    if (posicion1 >= array.length || posicion1 < 0)
    {
       console.log("posicion1");
       return array;
    }

    if (posicion2 >= array.length || posicion2 < 0)
    {
        console.log("posicion2");
        return array;
    }

    let jugador = array[posicion1];
    array[posicion1] = array[posicion2];
    array[posicion2] = jugador;

    return array;
    
}

let jugadoresFutbol = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

jugadoresFutbol = swap(jugadoresFutbol, 1, 3);
console.log(jugadoresFutbol);

jugadoresFutbol = swap(jugadoresFutbol, 0, 3);
console.log(jugadoresFutbol);

jugadoresFutbol = swap(jugadoresFutbol, 5, 2);
console.log(jugadoresFutbol);


