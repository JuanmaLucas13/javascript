const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]

for (let index = 0; index < list.length; index++)
{
    for (let index1 = index + 1; index1 < list.length; index1++) {
        if (list[index].order > list[index1].order)
         {
            const varTemporal = list[index1];
            list[index1] = list[index];
            list[index] = varTemporal;
         } 
    }
}

console.log(list);
