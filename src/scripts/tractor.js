// import { createPlan } from './plan.js'
// let yearlyPlan = createPlan()
//import { usePlants } from "./field.js"
//import { addPlant } from "./field.js"
//The function must accept the year's planting plan as input (i.e. it must define a parameter).
//The plan is an array. It contains 3 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

import { addPlant } from './field.js'

//As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
const wheatSeed = createWheat()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const asparagusSeed = createAsparagus()
const potatoSeed = createPotato()
const cornSeed = createCorn()
//Take that seed and add it to the array of plants in the field module.
//write algorithim
//
//iterate parent-row    nested for loop child-food type crop
export const plantSeeds = (yearlyPlan) => {
    //iterate row of food types
    for (const row of yearlyPlan) {

     //iterate row to take seed and return it to the array of plants
     //take seed and fieldGrownPlants.push(seed)
      //if asparagus invoke createasparagus to get seed
        for (let seed of row){
            if (seed === "Corn") {
                addPlant(cornSeed)
            }else if (seed === "Wheat") {
                addPlant(wheatSeed)
            }else if (seed === "Soybean") {
                addPlant(soybeanSeed)
            }else if (seed === "Sunflower") {
                addPlant(sunflowerSeed) 
            }else if (seed === "Asparagus") {
                addPlant(asparagusSeed)
            }else if (seed === "Potato") {
                addPlant(potatoSeed)
            }
            //  return seed
        }
     
    }
        //return 
}













