const display = document.getElementById('display');

function appendToDisplay(resultat){
    display.value += resultat;
}

function calculateResult(){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = "";
}