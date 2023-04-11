const express = require('express');
const app = express();
const sqlite3 = require('better-sqlite3');
const db = sqlite3('brukere.db', {verbose: console.log});

const session = require('express-session');

app.use(express.urlencoded({extended: true}));

app.use(session( {
    secret: "Keep it secret",
    resave: false,
    saveUninitialized : false
}));

// Sette opp en public-mappe som inneholder statiske filer som skal serveres
const path = require('path');
const publicDirectoryPath = path.join(__dirname, './static');
app.use(express.static(publicDirectoryPath));

// Dersom noen besøker localhost:3000/visits, så skal vi telle antall besøk den brukeren har gjort (dette skjer ikke på andre sider per nå)
app.get('/visits', (request,response) => {
    console.log("test...");
    if (request.session.visitsCounter === undefined) {
        request.session.visitsCounter = 1;
    }
    else {
        request.session.visitsCounter += 1;
    }

    response.send("Antall besøk: " + request.session.visitsCounter);
});

// Dette er login-siden som skal vises dersom brukeren ikke er logget inn
app.post('/login', (request, response) => {
    console.log(request.body);
    console.log(request.body.username);
    console.log(request.body.password);

    const mypassword = "123";
    const myusername = "birger";
    
    if (request.body.username == myusername && // Dersom brukernavn og passord stemmer overens, så skal vi logge brukeren inn
        request.body.password == mypassword) {
        request.session.logedIn = true;
        response.redirect("/");
    } else { // Ellers skal vi sende brukeren tilbake til login-siden
        request.session.logedIn = false;
        response.redirect("/login.html");
    }
});

// Dette er startsiden som skal vises dersom brukeren er logget inn
app.get('/' , (request, response) => {
    if (request.session.logedIn !== true) {
        response.redirect("/login.html");
        return;
    }

    response.send("Du er logget inn");
});

// To-do: 
// 1: Lag en rute til som du passordbeskytter
// Dette er startsiden som skal vises dersom brukeren er logget inn
app.get('/about' , (request, response) => {
    if (request.session.logedIn !== true) {
        response.redirect("/login.html");
        return;
    }

    response.send("Du er logget inn på about-siden");
});

// 2: Lag en statisk side som du passordbeskytter
app.get('/hemmelig.html' , (request, response) => {
    if (request.session.logedIn !== true) {
        response.redirect("/login.html");
        return;
    }
    else {
        response.sendFile(__dirname + "/hemmelig/hemmelig.html");
    }
});

app.listen(3000, () => {
    console.log('Server lytter på port 3000');
});