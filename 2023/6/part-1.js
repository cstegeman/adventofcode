/**
 * Time:        48     87     69     81
 * Distance:   255   1288   1117   1623
 */
const races = [{time: 48, distance: 255, race: 'race1'}, {time: 87, distance: 1288, race: 'race2'}, {
    time: 69,
    distance: 1117,
    race: 'race3'
}, {
    time: 81,
    distance: 1623,
    race: 'race4'
}]

const raceResult = {
    race1: 0,
    race2: 0,
    race3: 0,
    race4: 0
}

function calculateRace({time, distance, race}) {
    for (let i = 0; i <= time; i++) {
        const travelDistance = (time - i) * i;
        if (travelDistance > distance) {
            raceResult[race] = raceResult[race] + 1
        }
    }
}

races.forEach(race => {
    calculateRace(race);
})

const result = Object.values(raceResult).reduce((acc, currValue) => acc * currValue, 1)

console.log(result)


