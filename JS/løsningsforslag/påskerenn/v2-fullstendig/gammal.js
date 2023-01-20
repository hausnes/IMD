// Array med objekt. Startverdiar for dei ulike øvingane, samt total, er lagt inn med 0.
// Bruker id for å kunne enkelt endre data seinare, men kunne gjerne kutta ut dette og berre brukt navn.
var deltakere = [
    {id : 1 , navn : "Jo Bjørnar" , alder : 37 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 2 , navn : "Rannveig" , alder : 73 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 3 , navn : "Åsmund" , alder : 5 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 4 , navn : "Ingvild" , alder : 3 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 5 , navn : "Margrete" , alder : 65 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0}
]

// Test av utskrift av data frå kolleksjonen
console.log("deltakere[0].navn: " + deltakere[0].navn);

var utDeltakerliste = document.getElementById("utDeltakerliste");

// Har dette som funksjon for at lista skal kunne skrivast ut etter behov, t.d. når ein reg. ny bruker
function skrivUtDeltakerListe(){
    utDeltakerliste.innerHTML = "";
    for(let deltaker of deltakere){
        utDeltakerliste.innerHTML += "<li>ID: " + deltaker.id + ", navn: " + deltaker.navn + ", alder: " + deltaker.alder + "</li>"
    }    
}

skrivUtDeltakerListe(); // Køyrer denne med ein gong for å få ei utskrift ved oppstart

/*
    Registrere ny bruker
*/
var deltakerIDNr = 6; // For å halde styr på kva den nyaste deltakeren skal få av ID

document.getElementById("skjemaNyBruker").onsubmit = function(evt) {
    evt.preventDefault();
    
    var navnInn = document.getElementById("innNavn").value;
    var alderInn = parseInt(document.getElementById("innAlder").value);

    console.log("ID: " + deltakerIDNr + ", navn: " + navnInn + ", alder: " + alderInn);

    // Opprettar eit objekt for den nye brukaren
    var nyBruker = {
        id : deltakerIDNr, navn : navnInn, alder : alderInn , akt1:0, akt2:0, akt3:0, total:0 
    }
    deltakere.push(nyBruker); // Legg brukaren inn i hovudkolleksjonen
    console.log("nyBruker: " + nyBruker.navn); // Test av den nye brukaren

    deltakerIDNr++; // Slik at ID-en til neste registrerte bruker blir riktig

    skrivUtDeltakerListe(); // Med ein gong ein ny brukar er lagt til skriv me ut totaloversikten over deltakarane (øverst på sida)
}

/*
    Registrere resultat for ein spesiell bruker
*/
var utFeilmelding = document.getElementById("utFeilmelding");

document.getElementById("skjemaRegistrereResultat").onsubmit = function(evt) {
    evt.preventDefault();
    
    var IDInn = parseInt(document.getElementById("innID").value);
    utFeilmelding.innerHTML = "";

    if(IDInn<deltakerIDNr){
        var res1Inn = parseInt(document.getElementById("innResultat1").value);
        var res2Inn = parseInt(document.getElementById("innResultat2").value);
        var res3Inn = parseInt(document.getElementById("innResultat3").value);
        
        let totalSum = res1Inn + res2Inn + res3Inn;
        console.log("Total poengsum: " + totalSum);

        // Legg til data i kolleksjonen
        deltakere[IDInn-1].akt1 = res1Inn;
        deltakere[IDInn-1].akt2 = res2Inn;
        deltakere[IDInn-1].akt3 = res3Inn;
        deltakere[IDInn-1].total = totalSum;

        console.log("Deltaker: " + deltakere[IDInn-1].navn + ", ID: "+ deltakere[IDInn-1].id + ", total: " + deltakere[IDInn-1].total);
    }
    // Handterer oppgitt ID utanfor dei som ligg inne, eit forsøk på å gje ein tydeleg feilmelding
    else{
        console.log("Du forsøker å registrere resultat for ein brukar som ikkje eksisterer endå. Legg personen til først!");
        utFeilmelding.innerHTML = "<span style='color:white;background-color:red;'>Du forsøker å registrere resultat for ein brukar som ikkje eksisterer endå. Legg personen til først!</span>";
    }
}

/*
    Vise resultat/oppsummering
*/
var utResultatliste = document.getElementById("utResultatliste");

function skrivUtResultatListe(){
    deltakere.sort(function(a, b){
        return b.total - a.total;
    });

    utResultatliste.innerHTML = "";
    console.log("deltakere.length = " + deltakere.length)
    for(deltaker of deltakere){
        if(deltaker.total > 0) { // Skriv berre ut noko dersom brukaren har fått ein total poengsum
            utResultatliste.innerHTML += "<li>Deltaker: "+ deltaker.navn + "<br>Total poengsum: " + deltaker.total + "</li>";
        }
    }
    
    if(utResultatliste.innerHTML === "") {
        utResultatliste.innerHTML = "Ingen data å vise fram. Har du registrert nokre poengsummar?";
    }
}

document.getElementById("visResultat").onclick = skrivUtResultatListe;