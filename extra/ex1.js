var splitName = (nombre) => {
    const returnName = [];
    let espacio = -1;

    if (nombre.length == 0)
     {
        console.log("nombre de persona vacio");

        return returnName;
     }

     if ((espacio = nombre.indexOf(' ') ) > -1  )
     {
        returnName.nombre = nombre.substring(0,espacio);
        returnName.apellido = nombre.substring(espacio+1);
     }
     else
     {
        returnName.nombre = nombre;
        returnName.apellido = "";
     }

     return returnName;
}


const persona = splitName('juan lucas');
console.log (persona);
;
console.log (splitName('juan lucas Sanchez'));
console.log (splitName('juanlucas'));
console.log(splitName(''));
