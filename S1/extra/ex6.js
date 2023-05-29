const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},
                  {name: 'Pantalón de pana', sellCount: 302},
                  {name: 'Reloj de papel albal', sellCount: 23},
                  {name: 'Inpar de zapatos', sellCount: 6}];


 for (let index = 0; index < products.length; index++) {
    const producto = products[index];

    if (products[index].sellCount <20)
     {
        badProducts.push(producto);
     }
    else
     {
        goodProducts.push(producto);
     }
 }

console.log("Productos buenos");
console.log(goodProducts);
console.log("Productos malos");
console.log(badProducts);
