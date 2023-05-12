// Hente inn modulen express
const express = require('express');

// Starte en express applikasjon, og lagre den i app
const app = express();

// For å bruke sqlite3-databasen vår.
const sqlite3 = require('better-sqlite3');
const db = sqlite3('brukere.db', {verbose: console.log});

// Sette opp en public-mappe som inneholder statiske filer som skal serveres
const path = require('path');
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

let minVar = "Cowabunga!";
let minArray = ["Cowabunga!", "Dude!", "Radical!"];

//Callback funksjon for når noen åpner root-mappen på web-serveren vår
function rootRoute(request, response) {
    response.send(`
        <h1>Hello World!</h1>
        <nav>
            <ul>
                <li><a href="\">Startside</a></li>
                <li><a href="\about">Om oss</a></li>
                <li><a href="hjelp.html">Hjelp</a></li>
                <li><a href="bilder.html">Bilder</a></li>
                <li><a href="skjema.html">Kontakt</a></li>
            </ul>
        </nav>
        <p>
            ${minVar} 
        </p>
    `);
}

//Callback funksjon for når noen åpner /about på web-serveren vår
function aboutRoute(request,response) {
    response.send('About...');
}

// Skjema som skal sende inn data om brukeren
app.use(express.urlencoded({ extended: true })); // For å tolke data fra skjema
// Funksjon/handler for å håndtere skjemaet
function formHandler(request, response) {
    console.log(request.body);
    console.log(request.body.navn);
    console.log(request.body.epost);
    console.log(request.body.fodt);

    // Lagre data i databasen
    const sql = db.prepare("INSERT INTO brukere (navn, epost, fodt) VALUES (?, ?, ?)");
    const info = sql.run(request.body.navn, request.body.epost, request.body.fodt);
    
    console.log("Antall endringar gjort: " + info.changes);
    console.log("lastInsertRowid: " + info.lastInsertRowid);

    response.send("Takk for at du fylte ut skjemaet!");
}
// Knytter funksjonen/handleren opp med post-adressen /sendInn
app.post("/sendInn", formHandler);

// Funksjon som hentar data frå databasen og returnerer desse (som JSON)
function hentBrukere(request, response) {
    const sql = db.prepare("SELECT * FROM brukere");
    const brukere = sql.all();
    console.log(brukere);
    response.send(brukere);
}
app.get('/brukerliste', hentBrukere);

// Hvordan skal vi reagere på ulike HTTP-forespørsler
app.get('', rootRoute); //Hvis noen åpner root-mappen (altså http://localhost:3000/)
app.get('/about', aboutRoute); //Hvis noen åpner /about (altså http://localhost:3000/about)

// Starte serveren
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});