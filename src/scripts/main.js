console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js'

const yearlyPlan = createPlan();
console.log("This is the yearly plan: ", yearlyPlan);

plantSeeds(yearlyPlan);
let finalField = usePlants();
console.log("This is the final field:", finalField);


let finalHarvest = harvestPlants(finalField);
console.log(finalHarvest);

let finalCatalog = catalog(finalHarvest);