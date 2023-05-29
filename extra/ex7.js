const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`
let newText = '';

for (let index = 0; index < text.length; index++)
 {
    if (text[index] == '-')
     {
        newText = newText + ' ';
     }  
    else
    {
       if (index == 0)
        {
          newText = newText + text[index].toUpperCase();
        }
       else
       {
          if (newText[index-1] == ' ')
             newText = newText + text[index].toUpperCase();
          else
             newText = newText + text[index];
        }
    }
}

console.log(newText);
