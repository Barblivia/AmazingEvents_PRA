import data from "./amazing"

//Función para devolver un array con los eventos anteriores a la fecha ingresada
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

//Función para devolver un array con los eventos posteriores a la fecha ingresada
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

//Función para devolver un array con los eventos de la fecha ingresada
let arrayDateEvents=[];
function dateEvents(events, date){
    for (let event of events) {
        if (event.date == date) {
            arrayDateEvents.push(event);
        }
    }
    return arrayDateEvents;
};
console.log(dateEvents(data.events, data.currentDate)); 
