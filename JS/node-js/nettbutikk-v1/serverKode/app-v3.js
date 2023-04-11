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
app.get('/', rootRoute);

function hentProdukter(request, response) {
    const sql = db.prepare("SELECT * FROM vare");
    const varer = sql.all();
    console.log(varer);
    response.send(varer);
}
app.get('/produkter', hentProdukter);

// Skjema som skal sende inn data om brukeren
app.use(express.urlencoded({ extended: true })); // For å tolke data fra skjema
app.use(express.json()); // For å tolke JSON-data

// Funksjon/handler for å håndtere skjemaet
function formHandler(request, response) {
    console.log("request.body: ");
    console.log(request.body);
    console.log("request.body.handlekurv: ");
    console.log(request.body.handlekurv);

    // Går gjennom ordren og legger hver linje inn i databasen
    for (let i = 0; i < request.body.handlekurv.length; i++) {
        console.log("request.body.handlekurv[" + i +"]: " + request.body.handlekurv[i]);
        
        console.log("vareid: " + request.body.handlekurv[i][0]);
        console.log("antall: " + request.body.handlekurv[i][1]);

        // NB: Databasen over ordrer er ikke ferdig ennå, og lagrer på en veldig tungvint måte.
        const sql = db.prepare("INSERT INTO ordrer (vareid, antall, kundenavn) VALUES (?, ?, ?)");
        const info = sql.run(request.body.handlekurv[i][0], request.body.handlekurv[i][1], request.body.kundenavn);
        console.log("Antall endringar gjort: " + info.changes);
        console.log("lastInsertRowid: " + info.lastInsertRowid);
    }

    console.log("Ordre registrert!");
    response.redirect("/"); // Redirect tilbake til rota
}
app.post("/sendHandlekurv", formHandler);

// Starter serveren
app.listen(3000, () => {
    console.log('Server lytter på port 3000');
});