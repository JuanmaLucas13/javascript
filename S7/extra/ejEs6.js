const list = [
    {
      id: 1,
      isActive: true,
      age: 22,
      name: 'Bob'
    },
    {
      id: 2,
      isActive: false,
      age: 56,
      name: 'Tim'
    },
    {
      id: 3,
      isActive: true,
      age: 17,
      name: 'Clark'
    },
    {
      id: 4,
      isActive: true,
      age: 9,
      name: 'Roxy'
    },
    {
      id: 5,
      isActive: false,
      age: 71,
      name: 'Jim'
    }
  ];

const listadoFiltrado = list.filter (item => item.isActive);
console.log (listadoFiltrado);

const listadoSimplificado = list.map(item => ({edad: item.age, nombre: item.name}) );
console.log (listadoSimplificado);

const edadTotal = list.reduce (function (acc, item) {return acc + item.age}, 0);
console.log (edadTotal) ;