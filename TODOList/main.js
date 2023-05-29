console.log('empiezo todo');

function buttonClick (event)
{
   event.preventDefault();

   console.log('pulsado boton añadir');
   const newTaskUser$$ = document.body.querySelector('input');

   //alert(newTaskUser$$.value);
   if (newTaskUser$$.value.length > 0)
    {
      addTask(newTaskUser$$.value);
    }  
   else 
   {
      alert('tarea no informada') ;
   } 

   newTaskUser$$.value = '';
   return false;
}

function deteteDoneTask ()
{
   console.log("borro done task");

   const listaTodo = document.body.querySelector('.empty');
   listaTodo.remove();
}

function createDoneTask ()
{
   console.log("creo done task");

   const listaTodo$$ = document.body.querySelector('.container');
   const newDiv$$ = document.createElement('div');
   newDiv$$.classList.add('empty');

   const newP$$ = document.createElement('p');
   newP$$.innerHTML= 'All tasks are completed';

   newDiv$$.appendChild(newP$$);
   listaTodo$$.appendChild(newDiv$$)
}

function addTask (nuevaTarea)
{
   console.log("añado task");

   const listaTask$$ = document.body.querySelector('ul');
   
   const newItemTask$$ = document.createElement('li');
   const newTask$$ = document.createElement('p');

   const newTaskUser$$ = document.body.querySelector('input');
   newTask$$.innerHTML = nuevaTarea

   const newButtonTask$$ = document.createElement('button');
   newButtonTask$$.innerHTML = 'X'
   newButtonTask$$.classList.add('btn-delete');

   newButtonTask$$.addEventListener('click', function ()
      { removeTask(newItemTask$$) }
   )
   newItemTask$$.appendChild(newTask$$);
   newItemTask$$.appendChild(newButtonTask$$);
   listaTask$$.appendChild(newItemTask$$);


   const listaTaskEmpty$$ = document.body.querySelector('.empty');
   if (listaTaskEmpty$$ != null)
      deteteDoneTask();
}

function removeTask(tarea)
{
   tarea.remove()

   const listaTask$$ = document.body.querySelector('li');

   // console.log(listaTask$$);
   if (listaTask$$ == null)
      createDoneTask();
}

const addButton$$ = document.body.querySelector('.btn-add');
addButton$$.addEventListener('click', buttonClick );

// deteteDoneTask();
// createDoneTask();
// deteteDoneTask();

// addTask('1');
// addTask('2');
// addTask('3');
// addTask('4');
