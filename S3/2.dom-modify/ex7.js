const elementRemove$$ = document.querySelectorAll('.fn-remove-me');

for (const iterator of elementRemove$$) {
    // document.body.removeChild(iterator);    
    iterator.remove();
}
