const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
  ]

for (let index = 0; index < alumns.length; index++) {

   let trimestresAprobados = 0;

   if (alumns[index].T1)
      trimestresAprobados=trimestresAprobados+1; 
   if (alumns[index].T2)
   trimestresAprobados=trimestresAprobados+1; 
   if (alumns[index].T3)
   trimestresAprobados=trimestresAprobados+1; 

   if (trimestresAprobados >= 2)
      alumns[index].isApproved = true;
   else   
      alumns[index].isApproved = false;
}  

console.log(alumns);