function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
/*
let tilfeldigtall = getRandomIntInclusive(1,20);
console.log(tilfeldigtall);
*/
let arrayTilfeldigeTall = [];

for (let i = 0; i < 1000000000; i++) {
    arrayTilfeldigeTall[i] = getRandomIntInclusive(1,20);
    //arrayTilfeldigeTall.push(getRandomIntInclusive(1,20));
}
console.log(arrayTilfeldigeTall.length);
//console.table(arrayTilfeldigeTall);

let antallTiere = 0;
let antallTiEllerMer = 0;
let sum = 0;

for (let i = 0; i < arrayTilfeldigeTall.length; i++) {
    if (arrayTilfeldigeTall[i] === 10) {
        //console.log("Fant en tier!");
        antallTiere = antallTiere + 1;
    }
    if (arrayTilfeldigeTall[i] >= 10) {
        antallTiEllerMer = antallTiEllerMer + 1;
    }

    sum = sum + arrayTilfeldigeTall[i];
}

document.getElementById("utskrift").innerHTML =  "<li>Antall 10-ere: " + antallTiere + "</li>";
document.getElementById("utskrift").innerHTML += "<li>Antall 10 eller mer: " + antallTiEllerMer + "</li>";
document.getElementById("utskrift").innerHTML += "<li>Summen: " + sum + "</li>";
document.getElementById("utskrift").innerHTML += "<li>Gjennomsnittsverdi: " + (sum/arrayTilfeldigeTall.length) + "</li>";