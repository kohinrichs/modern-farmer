console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { createCorn } from './seeds/corn.js'
import { plantSeeds } from './tractor.js'

import { addPlant } from './field.js'
import { usePlants } from './field.js'

const yearlyPlan = createPlan();
console.log("This is the yearly plan: ", yearlyPlan);

// let cornSeed = createCorn();
// console.log(cornSeed);

// let addPlantTest = addPlant(cornSeed);
// console.log(addPlantTest);

// let usePlantsTest = usePlants();
// console.log(usePlants);

// let plantSeedsTest = plantSeeds(yearlyPlan);
// console.log(plantSeedsTest);

plantSeeds(yearlyPlan);
let finalField = usePlants();
console.log("This is the final field:", finalField);





