import data from "./amazing.js"
import  {pastEvents, drawCards, createChecks, textFilter, categFilter} from "./functions.js"

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
