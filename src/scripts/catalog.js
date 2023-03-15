


// import { usePlants } from "./field.js"
//import { harvestPlants } from "./harvester.js"
// import { yearlyPlan } from "./main.js"
// import { plantSeeds } from "./tractor.js"

// The Catalog function should accept the harvested food array as input

//Catalog function should iterate the array of food objects
export const catalog = (plantHarvester) => {
    let html = ""
    for (const foodItem of plantHarvester) {

        html += `<section class="plant">${foodItem.type}</section>`
    }
    return html
}


