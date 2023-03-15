const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Sunflower", "Potato" ]

export const createPlan = () => {
    const plan = []
//defining 3 rows of crops to be planted
//in each row there are 6 plots of land
    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

