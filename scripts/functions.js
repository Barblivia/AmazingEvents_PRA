//import data from "./amazing.js"

//Function that gets data, "where" is the variable to pass the URL or route
export async function getExternalData(where) {
    let arrayEvents = await fetch(where)
        .then((response) => response.json())
        .then(events => {
            return events;
        })
    return arrayEvents;
}

//function filtering past events returning an array of filtered events
export function pastEvents(data) {
    let arrayPastAux = [];
    arrayPastAux = data.events.filter(event => (Date.parse(event.date) < Date.parse(data.currentDate)));
    return arrayPastAux;
}

//function filtering upcoming events returning an array of filtered events
export function upcomingEvents(data) {
    let arrayUpcomAux = [];
    arrayUpcomAux = data.events.filter(event => (Date.parse(event.date) > Date.parse(data.currentDate)));
    return arrayUpcomAux;
};

//function that draw cards in container
export function drawCards(events, contenedor) {
    contenedor.innerHTML = ''
    if (events.length == 0) {
        contenedor.innerHTML = '<h2>No results found. Try again!!!</h2>'
    }
    let fragmento = document.createDocumentFragment();
    for (let event of events) {
        let div = document.createElement('div');
        div.className = 'card';
        div.style = 'width: 18rem';
        div.innerHTML = `
                <img class="card-img-top" src="${event.image}">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <p class="card-price">Price: $${event.price}</p>
                    <a href="../pages/details.html?id=${event._id}" class="btn btn-primary">Details</a>
                </div>`;
        fragmento.appendChild(div);
    }
    contenedor.appendChild(fragmento);
}

//function creating categories in checkboexes
export function createChecks(array) {
    let arrayCateg = array.map(event => event.category)
    let setCateg = new Set(arrayCateg)
    let arrChecks = Array.from(setCateg)
    let checkboxes = ''
    arrChecks.forEach(category => {
        checkboxes += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
        <label class="form-check-label" for="${category}">${category}</label>
      </div>`
    })
    checkContainer.innerHTML = checkboxes
}

//function drawing detail cards 
export function drawDetails(evento, contenedor) {
    let div = document.createElement('div');
    div.className = 'cardDetails';
    div.innerHTML = `
               <img class="class="img-fluid" src="${evento.image}" title="${evento.name}" alt="${evento.name}">
                <div class="card-body">
                    <dl class="card-list">
                        <dt><h3>${evento.name}</h3></dt><dd></dd>    
                        <dt>Date:</dt><dd>${evento.date}</dd>
                        <dt>Description:</dt><dd>${evento.description}</dd>
                        <dt>Category:</dt><dd>${evento.category}</dd>
                        <dt>Place:</dt><dd>${evento.place}</dd>
                        <dt>Capacity:</dt><dd>${evento.capacity}</dd>
                        <dt>${evento.assistance ? "Asistence" : "Estimate"}</dt>
                        <dd>${evento.assistance ? evento.assistance : evento.estimate}</dd>
                        <dt>Price $:</dt><dd>${evento.price}</dd>
                    </dl>
                </div>`;
    contenedor.appendChild(div);
}

//Filtering functions
//function searching by event name -text- returning an array of filtered events
export function textFilter(array, name) {
    let arrFiltered = array.filter(elemento => elemento.name.toLowerCase().includes(name.toLowerCase()))
    return arrFiltered
}

//function filtering categories in checkboxes, returning an array of filtered events
export function categFilter(eventosCateg) {
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
//Functions for Tables

//Function that adds attendance percentage to each event and returns a new array of events
export function eventsPercentage(events) {
    let arrayPercentage = events.map(event => {
        event.percentage = event.assistance ? parseInt(event.assistance / event.capacity * 100) : parseInt(event.estimate / event.capacity * 100)
        return event
    })
    return arrayPercentage
}


//Function that returns one of the events with highest percentage of attendance
export function eventMaxAttendance(events) {
    let orderedMaxPercent = events.sort((a, b) => Number.parseInt(b.percentage) - Number.parseInt(a.percentage))
    return orderedMaxPercent[0].name
}


//Function that returns one of the events with min percentage of attendance
export function eventMinAttendance(events) {
    let orderedMinPercent = events.sort((a, b) => Number.parseInt(a.percentage) - Number.parseInt(b.percentage))
    return orderedMinPercent[0].name
}

//Function that returns one of the events with max capacity
export function eventWithMaxCapacity(events) {
    let eventMaxCap = events.find(event => event.capacity === Math.max(...events.map(event => event.capacity)))
    return eventMaxCap.name
}

//Functions for drawing tables: Table1
export function drawDataInTable1(events, contenedor) {
    let trow = document.createElement('tr');
    trow.innerHTML = `
        <td>${eventMaxAttendance(events)}</td>
        <td>${eventMinAttendance(events)}</td>
        <td>${eventWithMaxCapacity(events)}</td>`;
    contenedor.appendChild(trow);
}

//Functions for drawing tables: Table2_3
export function drawDataInTable2_3(categories,revenues, percentage,contenedor) {
                let trow = document.createElement("tr");
        trow.innerHTML = `
        <td>${categories}</td>
        <td>$${revenues}</td>
        <td>${percentage}%</td>`;
        contenedor.appendChild(trow);
    ;
}  

//Functions that returns category info 
export function eventsStats(events,contenedor) {
    let categoriesS = []
    let revenuesS = []
    let percentage = []
    events.forEach(event => {
        if (!categoriesS.includes(event.category)) {
            categoriesS.push(event.category)
            revenuesS[event.category] = 0
            percentage[event.category] = 0
        }
        percentage[event.category] += ((event.assistance ? event.assistance : event.estimate)/ event.capacity) * 100
        revenuesS[event.category] += ((event.assistance ? event.assistance : event.estimate) * event.price)
    })
    categoriesS.forEach(categorie => {
        revenuesS[categorie] = revenuesS[categorie];
        percentage[categorie] = (percentage[categorie] / events.filter(event => event.category === categorie).length).toFixed(1);

        drawDataInTable2_3(categorie, revenuesS[categorie], percentage[categorie], contenedor)
    });
    console.log()
    return { categoriesS, revenuesS, percentage };
}

