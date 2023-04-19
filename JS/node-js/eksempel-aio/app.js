const express = require('express');
const app = express();
const sqlite3 = require('better-sqlite3');
const db = sqlite3('brukere.db', {verbose: console.log});
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.urlencoded({extended: true}));

app.use(session( {
    secret: "Keep it secret",
    resave: false,
    saveUninitialized : false
}));

// Sette opp en public-mappe som inneholder statiske filer som skal serveres
const path = require('path');
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    if (req.session.logedIn !== true) {
        res.redirect("/login.html");
        return;
    }
    
    res.send("Du er logget inn");
});

app.get('/personlig.html', (req, res) => {
    if (req.session.logedIn !== true) {
        res.redirect("/login.html");
        return;
    }

    res.sendFile(__dirname + "/personlig.html");
});

app.post('/login', (req, res) => {
    // Testing av at vi får inn data fra login-skjemaet
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);

    // Kontroller om brukernavn og passord er riktig opp mot databasen
    const stmt = db.prepare('SELECT * FROM brukere WHERE brukernavn = ? AND passord = ?'); 
    const row = stmt.get(req.body.username, req.body.password); 
    console.log(row); // Dersom vi får ut noe her, så er brukernavn og passord riktig

    if (row === undefined) { // Dersom vi ikke får noe ut, så er brukernavn og passord feil
        req.session.logedIn = false;
        res.redirect("/login.html");
        return;
    }

    if (req.body.username == row.brukernavn && // Dersom brukernavn og passord stemmer overens, så skal vi logge brukeren inn
        req.body.password == row.passord ) {
        req.session.logedIn = true;
        res.redirect("/");
    } else { // Ellers skal vi sende brukeren tilbake til login-siden
        req.session.logedIn = false;
        res.redirect("/login.html");
    }
});

app.post('/nybruker', (req, res) => {
    // Testing av at vi får inn data fra registrer-skjemaet
    console.log(req.body);
    console.log(req.body.username);
    
    // Kontroller om brukernavn er ledig
    const stmt = db.prepare('SELECT * FROM brukere WHERE brukernavn = ?');
    const row = stmt.get(req.body.username);
    console.log(row); // Dersom vi får ut noe her, så er brukernavn opptatt

    if (row !== undefined) { // Dersom vi får noe ut, så er brukernavn opptatt
        console.log("Brukernavn er opptatt, sender brukeren tilbake til registreringssiden");
        res.redirect("/nybruker.html");
        return;
    }

    // Dersom brukernavn er ledig, så skal vi registrere brukeren
    const hash = bcrypt.hashSync(req.body.password, saltRounds); // Krypter passordet
    const stmt2 = db.prepare('INSERT INTO brukere (brukernavn, passord) VALUES (?, ?)'); 
    const info = stmt2.run(req.body.username, hash); // Legg inn brukernavn og kryptert passord i databasen
    console.log(info); 

    res.redirect("/login.html"); // Send brukeren til login-siden
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});