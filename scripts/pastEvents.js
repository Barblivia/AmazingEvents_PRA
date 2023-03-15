import data from "./amazing.js"
import  {pastEvents, drawCards, createChecks} from "./functions.js"

let container = document.getElementById("cardsPast");

drawCards(pastEvents(data), container);

const checkContainer = document.getElementById('checkContainer');

createChecks(pastEvents(data));