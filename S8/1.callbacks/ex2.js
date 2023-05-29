const userAnwsers = [];

function confirmExample(description){
    confirm(description)
}

function promptExample(description){
    propmt(description)
}

function father(description, fun){
     fun(description);
}

father("que sale", confirmExample);
