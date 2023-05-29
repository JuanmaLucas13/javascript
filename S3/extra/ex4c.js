const countries = 
[{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

 function removeDiv (removeDiv){
    removeDiv.remove();
 }    
 

for (const iterator of countries) {
    const newDiv$$ = document.createElement("div");
    const newH4$$ = document.createElement("h4");
    const newImg$$ = document.createElement("img");

    newH4$$.innerHTML = iterator.title;
    newImg$$.src = iterator.imgUrl;

    const newButton$$ = document.createElement("button");
    newButton$$.innerHTML = "Borrar";
    newButton$$.addEventListener("click", function() 
         {removeDiv(newDiv$$)}
       ) 

    newDiv$$.appendChild(newH4$$);
    newDiv$$.appendChild(newImg$$);
    newDiv$$.appendChild(newButton$$);
   
    document.body.appendChild(newDiv$$);
 };



