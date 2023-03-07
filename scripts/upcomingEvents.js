import data from "./amazing.js"

//Función que trae los eventos posteriores a una fecha
let arrayUpcomingEvents=[];
function upcomingEvents(events, date){
    for (let event of events) {
        if (event.date > date) {
            arrayUpcomingEvents.push(event);
        }
    }
    return arrayUpcomingEvents;
};
console.log(upcomingEvents(data.events, data.currentDate));