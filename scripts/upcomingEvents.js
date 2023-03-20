import data from "./amazing.js"
import {upcomingEvents, drawCards, createChecks,textFilter, categFilter} from "./functions.js";

let contenedor = document.getElementById("cardsUpcoming");

//Draw all cards in given array in container
drawCards(upcomingEvents(data), contenedor);

//Creates checkboxes with categories from upcoming events
createChecks(upcomingEvents(data));

//Calling filtering functions by Search box
const input = document.querySelector('.searchForm > input')

input.addEventListener('input', () => {
    let textFiltered = textFilter(upcomingEvents(data), input.value);
    let categFiltered = categFilter(textFiltered)
    drawCards(categFiltered, contenedor);
})

//Calling filtering functions by category
const containerCheck = document.getElementById('checkContainer')

containerCheck.addEventListener('change', () => {
    let textFiltered = textFilter(upcomingEvents(data), input.value);
    let categFiltered = categFilter(textFiltered)
    drawCards(categFiltered, contenedor);
})
