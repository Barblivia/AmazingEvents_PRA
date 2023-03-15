import data from "./amazing.js"
import {upcomingEvents, drawCards, createChecks} from "./functions.js";

let container = document.getElementById("cardsUpcoming");

drawCards(upcomingEvents(data), container);

const checkContainer = document.getElementById('checkContainer');

createChecks(upcomingEvents(data));