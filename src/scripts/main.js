console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'

const yearlyPlan = createPlan();
console.log("This is the yearly plan: ", yearlyPlan);

// let asparagusSeed = createAsparagus();
// console.log(asparagusSeed);

