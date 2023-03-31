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

app.post('/login', (request, response) => {
    console.log(request.body);
    console.log(request.body.username);
    console.log(request.body.password);

    const mypassword = "123"
    const myusername = "birger"
    
    if (request.body.username == myusername &&
        request.body.password == mypassword) {
        request.session.logedIn = true;
        response.redirect("/");
    } else {
        request.session.logedIn = false;
        response.redirect("/login.html");
    }
});

app.get('/' , (request, response) => {
    if (request.session.logedIn !== true) {
        response.redirect("/login.html");
        return;
    }

    response.send("Du er logget inn");
});

app.listen(3000, () => {
    console.log('Server lytter på port 3000');
});