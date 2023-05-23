let brukernavnArray = [ // Dette er en array med brukernavn som er opptatt
    "jo_hau",
    "jo_bjo",
    "halknu",
    "hensto",
    "johsor",
    "johau5"
];

let fornavn = "Jo Bjørnar";
let etternavn = "Hausnes";

fornavn = fornavn.toLowerCase().slice(0, 3).replace(" ", "_");
console.log(fornavn);

etternavn = etternavn.toLowerCase().slice(0, 3).replace(" ", "_");
console.log(etternavn);

let brukernavn = fornavn + etternavn;

// Kontroller om brukernavnet er opptatt, basert på innholdet i arrayen brukernavn

if (brukernavnArray.includes(brukernavn)) {
    console.log("Brukernavnet er opptatt");
    brukernavn = fornavn + etternavn + Math.floor(Math.random() * 10);
}
else {
    console.log("Brukernavnet er ledig");
}

// Alternativt: SQL-koden for å sjekke om databasen inneholder brukernavnet
let SQL = "SELECT * FROM bruker WHERE brukernavn = '" + brukernavn + "'";

console.log("Suksess! Brukernavnet ble: " + brukernavn);
brukernavnArray.push(brukernavn);