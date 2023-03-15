console.log("Welcome to the main module")

import { plantSeeds } from "./tractor.js"
import { usePlants } from './field.js'
import { createPlan } from './plan.js'
import { catalog } from "./catalog.js"
import { harvestPlants } from "./harvester.js"
//console.log(yearlyPlan) //

let yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
let plants = usePlants()
let plantHarvester = harvestPlants(plants)


const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(plantHarvester)
