const path = require('path')
const express = require('express')

//Starter opp express, og skrur på public-mappen
const app = express()
const publicDirectoryPath = path.join(__dirname, "/public")
app.use(express.static(publicDirectoryPath))

//Bruker urlencoded-middleware, for å la oss få tilgang til request.body i post-forms
app.use(express.urlencoded({ extended: true }));

const sqlite3 = require('better-sqlite3')
const db = sqlite3('nettbutikk-v2.db', {verbose:console.log})

app.get('/leggTilOrdre', function(req, res) {
    // Later som vi har fått data fra skjema om person
    const person = {
        epost: "test7@test.no",
        fornavn: "TesttastTost",
        etternavn: "TasttestTost",
        adresselinje: "Øvre Tasta 7",
        postnummer: "1212" // Dette er et eksempel på et postnummer som finnes i databasen, om det ikke finnes vil det ikke bli lagt inn i databasen
    };
    
    // Setter inn ny person
    const sql = db.prepare('INSERT INTO person (epost,fornavn,etternavn,adresselinje,postnummer) VALUES (?,?,?,?,?)');
    const info = sql.run(person.epost, person.fornavn, person.etternavn, person.adresselinje, person.postnummer);

    // later som vi har fått data fra skjema om ordre
    const ordre = {
       kommentar: "Har eigentleg ikkje råd, men...",
       epost: "test7@test.no",
       dato: "2020-05-09 10:00:00"
    };

    // Setter inn ny ordre
    const sql2 = db.prepare('INSERT INTO ordre (epost,kommentarOrdre,dato) VALUES (?,?,?)');
    const info2 = sql2.run(ordre.epost, ordre.kommentar, ordre.dato);

    console.log("Row id: " + info2.lastInsertRowid);
    // Henter ut ordreID fra siste ordre som ble lagt inn
    const sisteOrdreID = info2.lastInsertRowid;

    // Later som vi har fått data fra skjema om ordrelinje
    const ordrelinje = {
        ordreID: sisteOrdreID,
        vareID: 1,
        antall: 2
    };

    const ordrelinje2 = {
        ordreID: sisteOrdreID,
        vareID: 2,
        antall: 4
    };

    // Setter inn ny ordrelinje
    const sql3 = db.prepare('INSERT INTO ordrelinje (ordreid,vareid,antall) VALUES (?,?,?)');
    const info3 = sql3.run(sisteOrdreID, 1, 2);
    const sql4 = db.prepare('INSERT INTO ordrelinje (ordreid,vareid,antall) VALUES (?,?,?)');
    const info4 = sql4.run(sisteOrdreID, 2, 4);

    console.log("Row id: " + info3.lastInsertRowid + " og " + info4.lastInsertRowid);
    console.log("Ferdig med opprettelse...");
    res.send("Ferdig med opprettelse...");
    
    //Setter inn postnummer og poststed. Returnerer feilmelding viss det ikke går.
    //Sender klient til takk.html viss innsetting var vellykket.
    // const sql = db.prepare('INSERT INTO poststed (postnummer,poststed) VALUES (?,?)');
    // try {
    //     const info = sql.run(request.body.postnummer,request.body.poststed)
    // } catch (error) {
    //     response.send("Error:" + error)
    // }
});

app.get('/hentOrdre', function(req, res) {
    // Later som vi har en spesiell bruker vi skal se på
    // const epost = "test7@test.no";
    
    // Later som vi har en spesiell ordre vi skal se på
    // const ordreID = 4;

    // Henter ut informasjon om personen som har lagt inn ordren, sammen med 
    const sql = db.prepare(`
        SELECT * from person
        INNER JOIN poststed ON person.postnummer = poststed.postnummer
        INNER JOIN ordre ON person.epost = ordre.epost
        INNER JOIN ordrelinje ON ordre.ordrenummer = ordrelinje.ordreid
        INNER JOIN vare ON vare.vareid = ordrelinje.vareid
    `);

    const info = sql.all();

    console.log(info);
    res.send(info);
});

app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
});