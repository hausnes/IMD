const express = require('express');
const app = express();
const sqlite3 = require('better-sqlite3');
const db = sqlite3('nettbutikk-v1.db', {verbose: console.log});

// Sette opp en public-mappe som inneholder statiske filer som skal serveres
const path = require('path');
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

function rootRoute(request, response) {
    response.send('Nettbutikk!');
}

function hentProdukter(request, response) {
    const sql = db.prepare("SELECT * FROM vare");
    const varer = sql.all();
    console.log(varer);
    response.send(varer);
}

app.get('/produkter', hentProdukter);
app.get('', rootRoute);

// Skjema som skal sende inn data om brukeren
app.use(express.urlencoded({ extended: true })); // For å tolke data fra skjema
// Funksjon/handler for å håndtere skjemaet
function formHandler(request, response) {
    console.log("request.body: ");
    console.log(request.body);
    console.log("request.body.navn: ");
    console.log(request.body.navn);
    console.log("request.body.antall: ");
    console.log(request.body.antall);
    console.log("request.body.pris: ");
    console.log(request.body.pris);

    // Lagre data i databasen
    // const sql = db.prepare("INSERT INTO brukere (navn, epost, fodt) VALUES (?, ?, ?)");
    // const info = sql.run(request.body.navn, request.body.epost, request.body.fodt);
    
    // console.log("Antall endringar gjort: " + info.changes);
    // console.log("lastInsertRowid: " + info.lastInsertRowid);

    console.log("Takk for at du fylte ut skjemaet!");
    // response.send("Takk for at du fylte ut skjemaet!");
}
// Knytter funksjonen/handleren opp med post-adressen /sendInn
app.post("/handlekurv", formHandler);

app.listen(3000, () => {
    console.log('Server lytter på port 3000');
});

// app.get("/produkter", (request, response) => {
//     const sql = db.prepare("SELECT * FROM vare");
//     const varer = sql.all();
//     console.log(varer);
//     response.send(varer);
// });