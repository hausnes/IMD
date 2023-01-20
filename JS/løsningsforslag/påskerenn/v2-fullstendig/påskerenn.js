// Array med objekt. Startverdiar for dei ulike øvingane, samt total, er lagt inn med 0.
// Bruker id for å kunne enkelt endre data seinare, men kunne gjerne kutta ut dette og berre brukt navn.
let deltakere = [
    {id : 1 , navn : "Jo Bjørnar" , alder : 37 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 2 , navn : "Rannveig" , alder : 73 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 3 , navn : "Åsmund" , alder : 5 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 4 , navn : "Ingvild" , alder : 3 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0},
    {id : 5 , navn : "Margrete" , alder : 65 , akt1 : 0 , akt2 : 0 , akt3 : 0 , total : 0}
]

// Test av utskrift av data frå kolleksjonen
console.log("deltakere[0].navn: " + deltakere[0].navn);

let utDeltakerliste = document.getElementById("utDeltakerliste");

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
let deltakerIDNr = deltakere.length + 1; // For å halde styr på kva den nyaste deltakeren skal få av ID, altså: dei som allerede er der, pluss 1.

document.getElementById("skjemaNyBruker").addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let navnInn = document.getElementById("innNavn").value;
    let alderInn = parseInt(document.getElementById("innAlder").value);

    console.log("ID: " + deltakerIDNr + ", navn: " + navnInn + ", alder: " + alderInn);

    // Opprettar eit objekt for den nye brukaren
    let nyBruker = {
        id : deltakerIDNr, navn : navnInn, alder : alderInn , akt1:0, akt2:0, akt3:0, total:0 
    }
    deltakere.push(nyBruker); // Legg brukaren inn i hovudkolleksjonen
    console.log("nyBruker: " + nyBruker.navn); // Test av den nye brukaren

    deltakerIDNr++; // Slik at ID-en til neste registrerte bruker blir riktig

    skrivUtDeltakerListe(); // Med ein gong ein ny brukar er lagt til skriv me ut totaloversikten over deltakarane (øverst på sida)
});

/*
    Registrere resultat for ein spesiell bruker
*/
let utFeilmelding = document.getElementById("utFeilmelding");

document.getElementById("skjemaRegistrereResultat").addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let IDInn = parseInt(document.getElementById("innID").value);
    console.log("IDInn = " + IDInn);

    utFeilmelding.innerHTML = "";

    if(IDInn<deltakerIDNr){
        console.log("Du forsøker å endre på personen med IDInn lik " + IDInn + " (" + deltakere[IDInn-1].navn + ")");

        let res1Inn = parseInt(document.getElementById("innResultat1").value);
        let res2Inn = parseInt(document.getElementById("innResultat2").value);
        let res3Inn = parseInt(document.getElementById("innResultat3").value);
        
        let totalSum = res1Inn + res2Inn + res3Inn;
        console.log("Total poengsum: " + totalSum);

        // Legg til data i kolleksjonen
        deltakere[IDInn-1].akt1 = res1Inn;
        deltakere[IDInn-1].akt2 = res2Inn;
        deltakere[IDInn-1].akt3 = res3Inn;
        deltakere[IDInn-1].total = totalSum;

        console.log("Deltaker: " + deltakere[IDInn-1].navn + ", ID: "+ deltakere[IDInn-1].id + ", total: " + deltakere[IDInn-1].total);

        skrivUtResultatListe();
    }
    // Handterer oppgitt ID utanfor dei som ligg inne, eit forsøk på å gje ein tydeleg feilmelding
    else{
        console.log("Du forsøker å registrere resultat for ein brukar som ikkje eksisterer endå. Legg personen til først!");
        utFeilmelding.innerHTML = "<span style='color:white;background-color:red;'>Du forsøker å registrere resultat for ein brukar som ikkje eksisterer endå. Legg personen til først!</span>";
    }
});

/*
    Vise resultat/oppsummering
*/
let utResultatliste = document.getElementById("utResultatliste");

function skrivUtResultatListe(){
    // Opprettar ein kopi av arrayen for at ikkje orginalen skal bli sortert. Hadde me sortert orginalen 
    // måtte me kalla på skrivUtDeltakerliste på slutten av denne funksjonen for at ein ikkje endrar på feil data seinare (brukaren ville mao. ikkje sett den sorterte arrayen om me ikkje hadde gjort dette).
    let sortertDeltakere = deltakere.slice().sort(function(a, b){
        return b.total - a.total;
    });

    utResultatliste.innerHTML = "";

    // Går gjennom alle elementa i den sorterte arrayen
    for(let i = 0; i < sortertDeltakere.length; i++){
        if(sortertDeltakere[i].total > 0){ // Dersom deltakaren har fått rekna ut ein total sum så behandlar me denne personen
            switch (i){ // Switchen tek seg av spesialtilfella (gull, sølv og bronse), og handterer alle andre som default (kunne brukt if)
                case 0:
                    utResultatliste.innerHTML += "<li><img src='bileter/gull.png'><br>Deltaker: "+ sortertDeltakere[i].navn + "<br>Total poengsum: " + sortertDeltakere[i].total + "</li>";
                    break;
                case 1:
                    utResultatliste.innerHTML += "<li><img src='bileter/solv.png'><br>Deltaker: "+ sortertDeltakere[i].navn + "<br>Total poengsum: " + sortertDeltakere[i].total + "</li>";
                    break;
                case 2:
                    utResultatliste.innerHTML += "<li><img src='bileter/bronse.png'><br>Deltaker: "+ sortertDeltakere[i].navn + "<br>Total poengsum: " + sortertDeltakere[i].total + "</li>";
                    break;
                default:
                    utResultatliste.innerHTML += "<li>Deltaker: "+ sortertDeltakere[i].navn + "<br>Total poengsum: " + sortertDeltakere[i].total + "</li>";
                    break;
            }
        }
    }
    
    if(utResultatliste.innerHTML === ""){
        utResultatliste.innerHTML = "Ingen data å vise fram. Har du registrert nokre poengsummar?";
    }
}

document.getElementById("visResultat").addEventListener("click", skrivUtResultatListe);