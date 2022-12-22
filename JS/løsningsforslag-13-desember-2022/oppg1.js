let nyPris = 299;

let allePrisElement = document.querySelectorAll("span");

console.log(allePrisElement);

for (let pris of allePrisElement) {
    pris.innerText = nyPris;
}

// Denne gjør akkurat det samme som over
for (let i = 0; i < allePrisElement.length; i++) {
    allePrisElement[i].innerText = nyPris;
}

// Endrer alle bilder som har klassenavnet "endres"
let alleBilder = document.querySelector(".endres");

for (let enkeltBilde of alleBilder) {
    enkeltBilde.src = "halvardhack.jpg";
}