const personajesTestMe$$ = document.body.querySelectorAll('[data-function="testMe"]');

for (let index = 0; index < personajesTestMe$$.length; index++)
 {
    const element = personajesTestMe$$[index];

    if (index == 2)
       console.log(element);
}
