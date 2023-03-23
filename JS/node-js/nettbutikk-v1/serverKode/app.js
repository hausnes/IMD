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

app.listen(3000, () => {
    console.log('Server lytter på port 3000');
});

// app.get("/produkter", (request, response) => {
//     const sql = db.prepare("SELECT * FROM vare");
//     const varer = sql.all();
//     console.log(varer);
//     response.send(varer);
// });