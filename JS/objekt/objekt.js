let land = { 
    navn: "Norge", 
    hovedstad: "Oslo", 
    myntenhet: "NOK",
    kurs: 1.3
};

let USA = { 
    navn: "USA", 
    hovedstad: "Washington", 
    myntenhet: "USD",
    kurs: 0.6
};

let g = {
    navn: "Granvin", 
    hovedstad: "G-town", 
    myntenhet: "GOK",
    kurs: 10.6
}

console.log(land.hovedstad);
document.getElementById("utskrift").innerHTML = land.navn;

// Skriv ut land, hovedsted og myntenhet i en og samme setning
console.log(land.navn + ", " + land.hovedstad + ", " + land.myntenhet);

// Går nå over til å bruke en array med flere land i en og samme
let samlingLand = [];
samlingLand.push(land);
samlingLand.push(USA);
samlingLand.push(g);

console.log(samlingLand);

// Løkke som går gjennom arrayen/samlingen med alle landene og skriver ut info.
for (let land of samlingLand) {
    document.getElementById("utskrift").innerHTML += "<li>" + land.navn + "</li>";
}

// Denne løkken gjør AKKURAT det samme som den over, og det er smakssak hva du bruker
for (let index = 0; index < samlingLand.length; index++) {
    document.getElementById("utskrift").innerHTML += "<li>" + samlingLand[index].navn + "</li>";
}

const alleLand = document.getElementById("alleLand");

for (let land of samlingLand) {
    let overskrift = document.createElement("h1");
    overskrift.innerText = "Land: " + land.navn;
    alleLand.appendChild(overskrift);

    let infotekst = document.createElement("p");
    infotekst.innerText = "I " + land.navn + " så er hovedstaden " + land.hovedstad + ", og  myntenheten er " + land.myntenhet;
    alleLand.appendChild(infotekst);
}