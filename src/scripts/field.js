import {createCorn } from './seeds/corn.js'

const fieldArray = [];

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject) === true) {
        fieldArray.push(seedObject[0])
        fieldArray.push(seedObject[1])
    }
    else {
     fieldArray.push(seedObject)
    }
}

export const usePlants = () => {
    return fieldArray.slice()
}
