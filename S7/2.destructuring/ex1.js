const game = {title: 'The last us 2', 
              gender: ['action', 'zombie', 'survival'], 
              year: 2020}


const { title, year, gender, gender:[tipo1, tipo2, tipo3]} = game;

console.log(title);
console.log(year);
console.log(gender);
console.log(tipo1);
console.log(tipo2);
console.log(tipo3);