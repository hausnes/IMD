const utskrift = document.querySelector("#utskrift");

async function visProdukter() {
    const url = await fetch("/produkter");
    const produkter = await url.json();
    console.log(produkter); // Test for å se om vi får hentet data

    for (let vare of produkter) {
        let div = document.createElement("div");
        // div.setAttribute("class", "vare");
        // div.class = "vare";

        let overskrift = document.createElement("h1");
        overskrift.innerText = vare.navn;

        let bilde = document.createElement("img");
        bilde.src = vare.bilde;

        let beskrivelse = document.createElement("p");
        beskrivelse.innerText = vare.beskrivelse;

        let pris = document.createElement("p");
        pris.innerText = vare.pris;

        let knapp = document.createElement("button");
        knapp.id = vare.id;
        knapp.addEventListener("click", leggTilVare);
        knapp.innerText = "Kjøp!";

        div.appendChild(overskrift);
        div.appendChild(bilde);
        div.appendChild(beskrivelse);
        div.appendChild(pris);
        div.appendChild(knapp);

        utskrift.appendChild(div);  
    }
}

visProdukter();

let handlekurvMap = new Map();
let handlekurvArray = [];

function leggTilVare(event) {
    // Test for å se om vi kan hente ut id-en til produktet som skal legges til
    console.log(event.target.id);
    console.log(event.target);

    // Dersom produktet ikke finnes i handlekurven, legg det til. 
    // Hvis det finnes, øk antall med 1.
    if (handlekurvMap.has(event.target.id)) {
        handlekurvMap.set(event.target.id, handlekurvMap.get(event.target.id) + 1);
    } else {
        handlekurvMap.set(event.target.id, 1);
    }
    
    // Test for å se om produktet er lagt til i handlekurven
    console.log("Handlekurv per nå: ");
    console.log(handlekurvMap);

    // Konvertere map til array
    handlekurvArray = Array.from(handlekurvMap);
    console.log("Handlekurv som array: ");
    console.table(handlekurvArray);
}

// Funksjon som sender handlekurven til serveren
function sendOrdre() {
    // Lager først et objekt som inneholder handlekurven og kundenavn
    const body = {
        handlekurv: handlekurvArray,
        kundenavn: document.querySelector("#navn").value
    };
    
    // Sender handlekurven til serveren
    fetch("/sendHandlekurv", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
}

document.querySelector("#knappBestill").addEventListener("click", sendOrdre);