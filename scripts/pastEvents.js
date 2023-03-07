import data from "./amazing.js"

//Función que trae los eventos anteriores a una fecha
let arrayPastEvents=[];
function pastEvents(events, date){
    for (let event of events) {
        if (event.date < date) {
            arrayPastEvents.push(event);
        }
    }
    return arrayPastEvents;
};
console.log(pastEvents(data.events, data.currentDate));

