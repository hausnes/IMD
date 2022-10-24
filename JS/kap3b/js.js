//const knappRegistrer = document.getElementById("knappRegistrer"); // Leter etter noe i HTML med denne ID-en
let navn = "";
const PI = Math.PI;

let alder = 3;
alder += 3; // 6
alder++; // 7 
alder = alder + 2; // 9
alder = 6; // 6
console.log("Alder er: " + alder); // Hva blir resultatet?

alder == 1;
console.log("Alder etter endring: " + alder);
console.log(alder == 1)

// i = i + 1 er det samme som 
// i++

console.log(Math.floor(63.4));  // 63
console.log(Math.floor(63.9));  // 63
console.log(Math.ceil(63.4));   // 64
console.log(Math.ceil(63.9));   // 64

// Modulus: % (rest)
let antallMinutter = 63;
// Minutter til timer og minutter
let hours   = Math.floor(antallMinutter / 60); // Hva gjør Math.floor? Se over.
let minutes = antallMinutter % 60; // Hva som er igjen etter at du har delt på 60 (her: 3)
console.log(hours + " timer og " + minutes + " minutter");

console.log("typeOf(alder) = " + typeof(alder));

let innlestBinary = "1010";
console.log(parseInt(innlestBinary,2));

let innlestHexa = "a";
console.log(parseInt(innlestHexa,16));

// Oppgave: Lete etter spørsmålstegn
let spørsmål = "Hva heter du?";
console.log(spørsmål.includes("?"));

let godkjent = false;
for(let i = 0; i < spørsmål.length; i++) {
    console.log(spørsmål[i]);
    if(spørsmål[i] == "?") {
        godkjent = true;
    }
}
console.log(godkjent);