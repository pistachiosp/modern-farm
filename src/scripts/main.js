console.log("Welcome to the main module")

import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js"
const asparagusSeed = createAsparagus()
const potatoSeed = createPotato()
console.log(potatoSeed)
const cornSeed = createCorn()
console.log(cornSeed)
console.log(asparagusSeed)


import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { addPlant } from "./field.js"
const plantSeeds = addPlant()
console.log(plantSeeds)
// addPlant(seedObject)
// const allPlants = usePlants()
//  for (const copyOfPlants of createPlan)

// console.log()
