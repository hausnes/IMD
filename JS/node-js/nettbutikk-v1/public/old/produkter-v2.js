const utskrift = document.querySelector("#utskrift");

async function visProdukter() {
    const url = await fetch("/produkter");
    const produkter = await url.json();
    console.log(produkter); // Test for å se om vi får hentet data

    let form = document.createElement("form");
    form.action = "/handlekurv";
    form.method = "POST";

    for (let vare of produkter) {
        let overskrift = document.createElement("h1");
        overskrift.innerText = vare.navn;
        overskrift.name = "navn";

        let bilde = document.createElement("img");
        bilde.src = vare.bilde;

        let beskrivelse = document.createElement("p");
        beskrivelse.innerText = vare.beskrivelse;

        let antall = document.createElement("input");
        antall.type = "number";
        antall.name = "antall";

        let pris = document.createElement("p");
        pris.innerText = vare.pris;
        pris.name = "pris";

        form.appendChild(overskrift);
        form.appendChild(bilde);
        form.appendChild(beskrivelse);
        form.appendChild(antall);
        form.appendChild(pris);    
    }

    let knapp = document.createElement("button");
    knapp.type = "submit";
    knapp.innerText = "Bestill!";
    form.appendChild(knapp);

    utskrift.appendChild(form);
}

visProdukter();