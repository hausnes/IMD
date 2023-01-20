// Krav 1:
let deltagere = [
    {
        navn : "Jo Bjørnar",
        alder: 40,
        akt1 : 1,
        akt2 : 4,
        akt3 : 2,
        total: 0
    },
    { 
        navn  : "Kim", 
        alder : 22, 
        akt1  : 10, 
        akt2  : 2, 
        akt3  : 4, 
        total : 0
    },
    { 
        navn  : "Halvard", 
        alder : 34, 
        akt1  : 0, 
        akt2  : 0, 
        akt3  : 0, 
        total : 0
    },
    { 
        navn  : "Aslak", 
        alder : 145, 
        akt1  : 0, 
        akt2  : 0, 
        akt3  : 0, 
        total : 0
    },
    { 
        navn  : "Henrik", 
        alder : 12, 
        akt1  : 0, 
        akt2  : 0, 
        akt3  : 0, 
        total : 0
    },
    { 
        navn  : "Joachim", 
        alder : 222, 
        akt1  : 0, 
        akt2  : 0, 
        akt3  : 0, 
        total : 0
    },
    { 
        navn  : "John Arne", 
        alder : 7884, 
        akt1  : 0, 
        akt2  : 0, 
        akt3  : 0, 
        total : 0
    }
];

// console.log(deltagere[1].navn);

function skrivUtDeltakerliste() {
    let htmlTabell = "<table><tr><th>Navn</th><th>Aktivitet 1</th><th>Aktivitet 2</th><th>Aktivitet 3</th><th>Total</th></tr>";
    for(let i = 0; i < deltagere.length; i++) {
        //console.log(deltagere[i].navn + " med alder " + deltagere[i].alder);
        //let utskrift = deltagere[i].navn + ", alder(" + deltagere[i].alder + "). Poengsummer"
        htmlTabell += "<tr>";
        htmlTabell += "<td>" + deltagere[i].navn + " (alder: " + deltagere[i].alder + ")</td>";
        htmlTabell += "<td>" + deltagere[i].akt1 + "</td>";
        htmlTabell += "<td>" + deltagere[i].akt2 + "</td>";
        htmlTabell += "<td>" + deltagere[i].akt3 + "</td>";
        deltagere[i].total = regnUtTotalPerDeltager(deltagere[i]);
        htmlTabell += "<td>" + deltagere[i].total + "</td>";
        htmlTabell += "</tr>";
    }
    htmlTabell += "</table>";

    document.getElementById("utskrift").innerHTML = htmlTabell;
}

skrivUtDeltakerliste();

function regnUtTotalPerDeltager(deltaker) {
    let totalPoengsum = deltaker.akt1 + deltaker.akt2 + deltaker.akt3;
    return totalPoengsum;
}

console.log(regnUtTotalPerDeltager(deltagere[0]));

/*
    -----------------------
    Registrering av brukere
    -----------------------
*/
document.getElementById("skjemaRegistrerDeltager").addEventListener("submit", regDeltager);

function regDeltager(evt) {
    evt.preventDefault(); // Vi blokkerer standardmåten å gjøre det på (gå til et annet dokument)
    console.log(evt);
    // Henter ut og lagrer i variabler
    let innlestNavn = document.getElementById("inpNavn").value;
    let innlestAlder = document.getElementById("inpAlder").value;
    // Lagrer den nye informasjonen som et objekt
    let nyDeltager = { 
        navn: innlestNavn, 
        alder: innlestAlder, 
        akt1: 0, 
        akt2: 0, 
        akt3: 0, 
        total: 0 
    };
    // "Putter" inn (pusher) objektet i arrayen
    deltagere.push(nyDeltager);
    // Skriver ut en oppdatert liste
    skrivUtDeltakerliste();
}

/*
    ---------------------
    Registrer poengsummer
    ---------------------
*/
document.getElementById("skjemaRegistrerPoeng").addEventListener("submit", regPoeng);

function regPoeng(evt) {
    evt.preventDefault();
    // Henter ut hvem vi skal endre data om, og 
    let innlestNavn = document.getElementById("inpNavnScore").value;
    let innlestAkt1 = document.getElementById("inpAkt1").value;
    let innlestAkt2 = document.getElementById("inpAkt2").value;
    let innlestAkt3 = document.getElementById("inpAkt3").value;
    // Finner den vi ønsker å endre data om og gjennomfører endringen
    // for (let deltager )
}