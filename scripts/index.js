import data from "./amazing.js"
import  {drawCards, createChecks} from "./functions.js";


let contenedor = document.getElementById("cardsHome");

drawCards(data.events,contenedor);

const checkContainer = document.getElementById('checkContainer');

createChecks(data.events);




