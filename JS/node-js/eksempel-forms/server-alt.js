const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

const path = require('path');
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

let chatLogg = [
    { message: "Hei" },
    { message: "Hva heter du?" }
];

function formHandler(req, res) {
    console.log("Innkommende body: " + JSON.stringify(req.body));
    console.log("Input-feltet message: " + req.body.message);
    let nyChat = {
        message: req.body.message
    };
    chatLogg.push(nyChat);
    console.log("Pusher no inn: " + nyChat);
    console.log("Innhaldet blir då: " + chatLogg);
    // const li = document.createElement('li');
    // li.innerHTML = req.body.message;
    // res.redirect('/form-alt.html');
}

// function visChatLogg(req, res, chatLogg) {
// 	let utskrift = "<ul>";
// 	for(let data of chatLogg) {
// 		console.log("<li>" + data.message + "</li>");
// 	}
// 	utskrift += "</ul>";
// 	res.send(utskrift);
// }

//Handler for å sende alle rader i tabellen melding, som json-data
app.get('/getMessages', (request,response) => {
    // const sql = db.prepare("SELECT * FROM melding")
    // const meldinger = sql.all()
    // let utskrift = "<ul>";
	// for(let data of chatLogg) {
	// 	utskrift += "<li>" + data.message + "</li>";
	// }
	// utskrift += "</ul>";
	// res.send(utskrift);
    console.log("Innholdet i chatLogg inne i getMessages er: " + chatLogg);
    response.send(chatLogg);
})

// Serve the HTML file with the form
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/form-alt.html');
// });

// Handle form submission
app.post('/sendInn', formHandler);

// app.get('getData', (req, res) => {
//     res.send(chatLogg);
// });

// Start the server
app.listen(3000, () => {
	console.log('Server started on port 3000');
});