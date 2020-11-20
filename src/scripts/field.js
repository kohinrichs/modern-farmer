import { createAsparagus } from './seeds/asparagus.js'

const fieldArray = [],

const addPlant = (seedObject) => {
    
    const newPlant = fieldArray.push(seedObject)
    return newPlant
}

export const usePlants = () => {
    return fieldArray.slice()
}

let test = addPlant(createAsparagus);
console.log(test);

