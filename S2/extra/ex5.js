function rollDice(caras)
{
   let valor = Math.round(Math.random(caras));

   if (valor < 1 )
      valor = valor + 1;
   
   return valor;
}

console.log(rollDice(6));
console.log(rollDice(10));
console.log(rollDice(9));
console.log(rollDice(4));