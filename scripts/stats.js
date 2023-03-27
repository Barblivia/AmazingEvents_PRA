//functions imported from functions.js
import { pastEvents, upcomingEvents, getExternalData, drawDataInTable1, eventsStats, eventsPercentage} from "./functions.js"

//obtaining external data fromo JSON
const data = await getExternalData("../data/amazing.json");

//declaring constants 
const events = data.events
const currentDate = data.currentDate

//Drawing table 1

let table1 = document.getElementById("tbody1")

drawDataInTable1(eventsPercentage(events), table1)

//drawDataInTable2(events, table1)

let table2 = document.getElementById("tbody2")
let table3 = document.getElementById("tbody3")

eventsStats(upcomingEvents(data),table2)
eventsStats(pastEvents(data),table3)



