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

function leggTilVare(event) {
    console.log(event.target.id);
    console.log(event.target);
}