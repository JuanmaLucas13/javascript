const placesToTravel = [{id: 5, name: 'Japan'},
   {id: 11, name: 'Venecia'},
   {id: 23, name: 'Murcia'}, 
   {id: 40, name: 'Santander'},
   {id: 44, name: 'Filipinas'},
  {id: 59, name: 'Madagascar'}]

let newPlacesToTravel = [];

for (let index = 0; index < placesToTravel.length; index++) {
    const element = placesToTravel[index];

    if ((element.id != 11) && (element.id != 40) )
       newPlacesToTravel.push(element);
}  

console.log(newPlacesToTravel);
