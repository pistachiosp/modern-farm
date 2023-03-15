//The harvestPlants function must accept the plants array as input
//the function will return an array of seed objects
//Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 4...Then the array that the function returns should have 4 identical objects added to it.
 export const harvestPlants = (fieldGrownPlants) => {
   let seedObjectsArr = []
 //iterate array of growing plants with for loop 
    for (const growingPlants of fieldGrownPlants) {
        //Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
        if (growingPlants.type === "Corn") {
//Here, the for statement declares the variable i and initializes it to 0. It checks that i is less than the number of options in the <select> element, performs the succeeding if statement, and increments i by 1 after each pass through the loop.
            for (let i = 0; i < growingPlants.output /2; i++) {
                seedObjectsArr.push(growingPlants) }
        }   else {
                for (let i = 0; i < growingPlants.output; i++) {
                    seedObjectsArr.push(growingPlants) }
            }
        
    }
    return seedObjectsArr
}
 
// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   } 

//.foreach()
//iterate with for loop
//const outputOfSeed
//if obj.output == number
//obj.output