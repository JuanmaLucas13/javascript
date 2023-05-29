function findArrayIndex(array, text) 
 {
    for (let index = 0; index < array.length; index++)
     {
        if (array[index] == text)
        {
            return index;
        }
    }
    return -1;
 }

let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log (findArrayIndex(animales, 'Caracol'));
console.log(findArrayIndex(animales, 'Mosquito'));
console.log(findArrayIndex(animales, 'Salamandra'));
console.log(findArrayIndex(animales, 'Caracola'));



