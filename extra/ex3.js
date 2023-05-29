const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"];

let  numberA = 0;

for (const iterator of animals) {
    for (let index = 0; index < iterator.length; index++) {

        if (iterator[index] == 'a')
           numberA = numberA +1;
    }       
}

console.log(numberA);
