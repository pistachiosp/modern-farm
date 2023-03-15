//tilling the field
// import { createSoybean } from "./seeds/soybean.js"
//  import { createCorn } from "./seeds/corn.js"
//  import { createAsparagus } from "./seeds/asparagus.js"
// import { plantSeeds } from "./tractor.js"

let fieldGrownPlants = []

// const wheatSeed = createWheat()
// const soybeanSeed = createSoybean()
// const sunflowerSeed = createSunflower()
// const asparagusSeed = createAsparagus()
// const potatoSeed = createPotato()
// const cornSeed = createCorn()

//The addPlant function must accept a seed object as input. The function will add the seed to the field
//if array.isarray iterate array add seed to fieldgrownplants
//this function adds the seed to the field
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
    for (const cornSeed of seed) {
        fieldGrownPlants.push(cornSeed)
    }
    }
    else {
        fieldGrownPlants.push(seed)
    }
}

//Define and export a function named usePlants that returns a copy of the array of plants
export const usePlants = () => {
return fieldGrownPlants
}

