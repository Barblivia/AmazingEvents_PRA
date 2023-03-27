import  {drawDetails, getExternalData} from "./functions.js";

const data = await getExternalData ("../data/amazing.json");
const queryString = location.search;
const params = new URLSearchParams(queryString);
const idparam = params.get('id');

const event = data.events.find(event => event._id === Number(idparam));

let detailContenedor = document.getElementById('cardDetails');

drawDetails(event, detailContenedor);
