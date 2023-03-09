//tilling the field

import { createCorn } from "./seeds/corn"
import { createAsparagus } from "./seeds/asparagus"

let fieldGrownPlants = []


//The addPlant function must accept a seed object as input. The function will add the seed to the field
//if array.isarray iterate array add seed to fieldgrownplants
//this function adds the seed to the field
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
    for (const cornSeed of seedObject) {
        fieldGrownPlants.push(cornSeed)
    }
    }
    else {
        fieldGrownPlants.push(seedObject)
    }
}

//Define and export a function named usePlants that returns a copy of the array of plants
export const usePlants = () => {
return fieldGrownPlants
}

