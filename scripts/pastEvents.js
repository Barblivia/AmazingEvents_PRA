import data from "./amazing.js"

const cardsPast = document.getElementById('cardsPast');
function pastEvents(events, date) {
    let fragmento = document.createDocumentFragment();
    for (let event of events) {
        if (event.date < date) {
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
            cardsPast.appendChild(fragmento);
        }
    }
}
let cards = pastEvents(data.events, data.currentDate);
