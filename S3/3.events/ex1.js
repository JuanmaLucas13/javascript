function viewLog(event)
{
    console.log(event);
}

const newButton$$ = document.createElement('button');

newButton$$.innerHTML="soy un boton";
newButton$$.addEventListener("click", viewLog);
newButton$$.id = "btnToClick";

document.body.appendChild(newButton$$);