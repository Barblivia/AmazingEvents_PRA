import data from "./amazing.js"
const cardsUpcoming = document.getElementById('cardsUpcoming');
let fragmento = document.createDocumentFragment();
function upcomingEvents(events, date) {
    for (let event of events) {
        if (event.date > date) {
            let div = document.createElement('div');
            div.className = 'card';
            div.style = 'width: 18rem';
            div.innerHTML = `
                <img class="card-img-top" src="${event.image}">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <p class="card-price">Price: $${event.price}</p>
                    <a href="/pages/details.html" class="btn btn-primary">Details</a>
                </div>`;
            fragmento.appendChild(div);
        }
    }
    cardsUpcoming.appendChild(fragmento);
}
let cards = upcomingEvents(data.events, data.currentDate);
