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