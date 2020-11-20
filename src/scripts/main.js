console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'

const yearlyPlan = createPlan();
console.log("This is the yearly plan: ", yearlyPlan);

plantSeeds(yearlyPlan);
let finalField = usePlants();
console.log("This is the final field:", finalField);


