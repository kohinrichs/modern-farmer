import { addPlant } from './field.js'
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'


const yearlyPlan = createPlan();


export const plantSeeds = (plantingSchedule) => {
    for (let i = 0; i < plantingSchedule.length; i++) {
        for (let j = 0; j < plantingSchedule[i].length; j++) {
            let seed = {}
            if (plantingSchedule[i][j] === "Asparagus" ) {
                seed = createAsparagus()
            } else if (plantingSchedule[i][j] === "Corn") {
                seed = createCorn()
            } else if (plantingSchedule[i][j] === "Potato") {
                seed = createPotato() 
            } else if (plantingSchedule[i][j] === "Soybean") {
                seed = createSoybean()
            } else if (plantingSchedule[i][j] === "Sunflower") {
                seed = createSunflower()
            } else if (plantingSchedule[i][j] === "Wheat") {
                seed = createWheat()
            }
            // have our seed, created seed, plant seed
            addPlant(seed);
            }

        }
    }
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]



// 1. iterate over both the parent and child arrays
// 2. as you iterate, invoke corresponding factory function (ie createAsparagus to get asparagus seed)
// 3. take seed (object) and add it to the array of plants in the field module

// getting all the objects of seed information into an array in the field module