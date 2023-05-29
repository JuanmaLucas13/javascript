function viewLog (event)
{
  console.log(event.target.value);
}

const selectedInput$$ = document.body.querySelector("input");

selectedInput$$.addEventListener("input", viewLog);
