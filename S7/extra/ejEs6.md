A partir de este array

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

Queremos obtener un primer listado `listadoFiltrado` en el que solo estén los elementos activos.

Más tarde queremos quedarnos solo con la edad y el nombre en un nuevo listado `listadoSimplificado`.

Finalmente suma las edades de todos los items.
