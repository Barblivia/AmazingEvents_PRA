//import data from "./amazing.js"
import { drawCards, createChecks, textFilter, categFilter, getExternalData } from "./functions.js";

    const data = await getExternalData ("../data/amazing.json");


    let contenedor = document.getElementById("cardsHome");

    //Draw all cards in given array in container
    drawCards(data.events, contenedor);

    //Creates checkboxes with categories
    createChecks(data.events);

    //Calling filtering functions by Search box
    const input = document.querySelector('.searchForm > input')

    input.addEventListener('input', () => {
        let textFiltered = textFilter(data.events, input.value);
        let categFiltered = categFilter(textFiltered)
        drawCards(categFiltered, contenedor);
    })

    //Calling filtering functions by category
    const containerCheck = document.getElementById('checkContainer')

    containerCheck.addEventListener('change', () => {
        let textFiltered = textFilter(data.events, input.value);
        let categFiltered = categFilter(textFiltered)
        drawCards(categFiltered, contenedor);
    })


