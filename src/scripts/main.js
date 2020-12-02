console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js';

const yearlyPlan = createPlan();
console.log("This is the yearly plan: ", yearlyPlan);

plantSeeds(yearlyPlan);
export let finalField = usePlants();
console.log("This is the final field:", finalField);


console.log(harvestPlants(finalField));
