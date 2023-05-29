const numbersList = [];

function sum(a, b){
   return a + b;
}

function substract(a, b){
   return a - b;
}

function father(a, b, c){
    numbersList.push(c(a, b));
}

father(2,5, sum);
father(5,2, substract);
father(12,15, sum);
father(22,15, substract);
father(9,5, sum);

console.log(numbersList);
