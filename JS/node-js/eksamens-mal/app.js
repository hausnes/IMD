/*
    -------------------------------------
    Initialisering og oppsett av serveren
    -------------------------------------
*/

// Express: https://www.npmjs.com/package/express
const express = require('express');
const app = express();

// SQLite: https://www.npmjs.com/package/better-sqlite3
const sqlite3 = require('better-sqlite3');
const db = sqlite3('brukere.db', {verbose: console.log});

// Session: https://www.npmjs.com/package/express-session
const session = require('express-session');

// Bcrypt: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

// For å kunne hente ut data fra POST-forespørsler (skjema, forms)
app.use(express.urlencoded({extended: true}));

app.use(session( {
    secret: "RabarbraRegnboge", // Brukes til å kryptere sessionen
    resave: false,
    saveUninitialized : false
}));

// Sette opp en public-mappe som inneholder statiske filer som skal serveres
const path = require('path');
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

/*
    -------------------------------------
    Håndtering av ulike "ruter" (URL-er)
    -------------------------------------
*/

// Dersom den som besøker nettsiden går til localhost:3000/start, så skal vi sende dem til index.html
// Du kan også besøke denne siden ved å gå til localhost:3000/ uten å skrive noe mer siden inderx.html ligger i public-mappen
app.get('/start', (req, res) => {
    res.sendFile('index.html');
});

// En rute for å hente ut alle datamaskinene i databasen
app.get('hentUtstyrsoversikt', (req, res) => {
    // Kontrollere at brukeren har rettigheter til å hente ut utstyrsoversikten

    // Steg 1: Kontrollerer først at brukeren er logget inn
    if (req.session.logedIn !== true) {
        res.redirect("/login.html");
        return; // Går ikke videre i koden
    }
    
    // Steg 2: Kontrollerer at brukeren er riktig brukertype. NB: Denne må skrives om til å passe din database, og du må hente ut brukerrollen fra databasen før du kan sjekke dette
    if (brukerrolle !== "admin") { // Dersom brukeren ikke er admin
        res.redirect("/login.html");
        return; // Går ikke videre i koden
    }
    
    // Dersom brukeren er logget inn og er admin, så kan vi hente ut utstyrsoversikten
    const stmt = db.prepare('SELECT * FROM utstyr');
    const rows = stmt.all();
    console.log(rows);

    res.send(rows); // Sender tilbake alt utstyret i JSON-format
});

// Skriv kode for å legge til, endre og slette utstyr her
// ...

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});