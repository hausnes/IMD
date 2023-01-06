let intervjukandidater = [
    { navn : "Halvard", fødselsår : 1987 },
    { navn : "Henrik",  fødselsår : 2005 },
    { navn : "Kim",     fødselsår : 2000 }
]; // Dette er en array

let person = { // Dette er et objekt
    navn : "Jo Bjørnar", fødselsår : 1982
}

// Husk: Array med objekt

intervjukandidater.push(person);

console.log(intervjukandidater);

for (let i = 0; i < intervjukandidater.length; i++) {
    console.log(intervjukandidater[i].fødselsår);
}

// for (let kandidat of intervjukandidater) {
//     console.log(kandidat.fødselsår);
// }

console.log("Skriver bare ut kandidater under 30:");
// Skriver IKKE UT  kandidatene som er eldre enn 30
for (let i = 0; i < intervjukandidater.length; i++) {
    if(intervjukandidater[i].fødselsår > 1993) {
        console.log(intervjukandidater[i].navn + " er godkjent, med fødselsår: " + intervjukandidater[i].fødselsår);
    }
}

// for (let kandidat of intervjukandidater) {
//     if (kandidat.fødselsår > 1993) {
//         console.log(kandidat.fødselsår);
//     }
// }