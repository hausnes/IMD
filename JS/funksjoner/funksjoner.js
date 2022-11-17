// I JS finnes det innebygde funksjoner...
console.log();
Math.random();

// Alternativ 1:
// ...og du kan skrive dine egne funksjoner.
function siHei() {
    document.getElementById("utskrift").innerText += "Hei!";
    // document.getElementById("utskrift").innerText = document.getElementById("utskrift").innerText + "Hei!"; // Denne linjen gjør det samme som over
}

siHei(); // Kaller på funksjonen

// Alternativ 2: 
// Du kan skrive funksjoner som får inn parameter/argument (her: navn)
function siHeiTil(navn) {
    document.getElementById("utskrift").innerText += "Hei, " + navn + "!"; 
}

siHeiTil("Jo Bjørnar"); // Kaller på funksjonen og "hiver med" et navn som argument
siHeiTil("Magnus");

// Alternativ 3:
// Vi skal nå skrive en funksjon som returnerer data
function returnerTilfeldigTall() {
    let tilfeldigTall = Math.random();
    return tilfeldigTall;
    console.log("Denne linjen kjører ikke!"); // NB, igjen: Denne linjen kjører ikkje!
}

document.getElementById("utskrift").innerText += returnerTilfeldigTall();

let randomTall = returnerTilfeldigTall();
document.getElementById("utskrift").innerText += randomTall;

// Alternativ 4:
// Anonyme funksjoner
document.addEventListener("keydown", function(event) {
    let tast = event.key;
    document.getElementById("tastatur").innerText = tast;
});

// Alternativ 5:
// "Arrow-functions"
sayHello = () => {
    console.log("Heisann sveisann!");
}

sayHello();
sayHello();