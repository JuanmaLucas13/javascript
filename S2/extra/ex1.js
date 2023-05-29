const movies = [
    {title: 'Madaraspar', duration: 192, 
        categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, 
        categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, 
        categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, 
        categories: ['comedia', 'aventura', 'animación']},
]

let arrayCategories = [];

for (const iterator of movies) {
    for (const iterator1 of iterator.categories) {

        if (!arrayCategories.includes(iterator1))
          arrayCategories.push(iterator1);
     }
}

console.log(arrayCategories);