export const harvestPlants = (plantArray) => {

    let harvestArray = []

    for (const seed of plantArray) {
        if (seed.type === "Corn") {
            let number = seed.output / 2
            for (let i = 0; i < number; i++){
                harvestArray.push(seed)
            }
        } else {
            for (let i = 0; i < seed.output; i++){
                harvestArray.push(seed)
            }
        }

    }

    return harvestArray
}