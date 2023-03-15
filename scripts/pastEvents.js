import data from "./amazing.js"
import  {pastEvents, drawCards, createChecks} from "./functions.js"

let contenedor = document.getElementById("cardsPast");

//Draw all cards in given array in container
drawCards(pastEvents(data), contenedor);

//Creates checkboxes with categories from past events
createChecks(pastEvents(data));

//Calling filtering functions by Search box
const input = document.querySelector('.searchForm > input')

input.addEventListener('input', () => {
    let textFiltered = textFilter(pastEvents(data), input.value);
    let categFiltered = categFilter(textFiltered)
    drawCards(categFiltered, contenedor);
})

//Calling filtering functions by category
const containerCheck = document.getElementById('checkContainer')

containerCheck.addEventListener('change', () => {
    let textFiltered = textFilter(pastEvents(data), input.value);
    let categFiltered = categFilter(textFiltered)
    drawCards(categFiltered, contenedor);
})
//Filtering functions
//function searching by event name -text- returning an array of filtered events
function textFilter(array, name) {
    let arrFiltered = array.filter(elemento => elemento.name.toLowerCase().includes(name.toLowerCase()))
    return arrFiltered
}

//function filtering categories in checkboxes, returning an array of filtered events
function categFilter(eventosCateg) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrChecks = Array.from(checkboxes)
    let arrChecksCateg = arrChecks.filter(check => check.checked)
    let arrChecksCategValues = arrChecksCateg.map(checkChecked => checkChecked.value)
    let arrFiltrado = eventosCateg.filter(elemento => arrChecksCategValues.includes(elemento.category))
    if (arrChecksCateg.length > 0) {
        return arrFiltrado
    }
    return eventosCateg
}