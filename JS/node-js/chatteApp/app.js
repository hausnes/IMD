//Skriv først npm install

const setup = require('./setup.js')
const app = setup.app
const db = setup.db

//Handler for å sende alle rader i tabellen melding, som json-data
app.get('/getMessages', (request,response) => {
    const sql = db.prepare("SELECT * FROM melding")
    const meldinger = sql.all()
    response.send(meldinger)
})

//Handler for html-skjema, og innsetting i tabellen melding
app.post('/insertMessage', (request,response) => {
    const melding = request.body.melding
    const brukernavn = request.body.brukernavn

    const sql = db.prepare('INSERT INTO melding (melding, brukernavn) VALUES (?, ?)');
    sql.run(melding, brukernavn);
    response.redirect('back')
})

//Starter opp applikasjonen
app.listen(80, function() { 
    console.log("Server is up! Check http://localhost:80")
})