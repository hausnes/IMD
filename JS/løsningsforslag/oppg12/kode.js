const knappSjekkAlder = document.getElementById("knappSjekkAlder");
const inpAlder = document.getElementById("alderInn");
const hemmeligDiv = document.getElementById("hemmeligDiv");
hemmeligDiv.style.display = "none";

knappSjekkAlder.addEventListener("click", sjekkAlder);

function sjekkAlder() {
    let alder = inpAlder.value;
    console.log(typeof alder);
    alder = parseInt(alder); // For å vise at den er "string"
    //alder = Number(alder);
    console.log(typeof alder); // For å sjå kva den blir etter casting

    if (alder >= 18) {
        console.log("Du er gammel nok!");
        // Viser to alternativ for å sende brukeren videre:
        // Alternativ 1:
        window.location.assign("./hemmelig.html"); // Bytter ut innholdet i fanen med et annet HTML-dokument.
        //Alternativ 2:
        //hemmeligDiv.style.display = "block"; // Nå vises innholdet som tidligere var skjult i HTML-en

    } else {
        console.log("Du er ikke gammel nok. Ha deg hjem.");
    }
}