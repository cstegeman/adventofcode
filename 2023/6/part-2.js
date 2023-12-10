const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8").split("\n");

const time = parseInt(input[0].split(": ")[1].replace(/ /g, ""));
const distance = parseInt(input[1].split(": ")[1].replace(/ /g, ""));

const races = {time, distance}

let possibilities = 0

function calculateRace({time, distance}) {
    // knop indrukken voor * miliseconde

    for (let i = 0; i < time; i++) {
        const travelDistance = (time - i) * i;
        if (travelDistance > distance) {
            possibilities = possibilities + 1
        }
    }
}

calculateRace(races);

console.log(possibilities);