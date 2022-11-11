// while-løkke
let teller = 10;

while (teller > 0) {
    console.log(teller);
    teller = teller - 1;
}

// for-løkke - alternativ 1 (NB: se at en string også er en form for array)
let navn = "Jo Bjørnar"; // Definerer en string
for (let bokstav of navn) {
    console.log(bokstav);
}

console.log(navn.length);

// for-løkke - alternativ 2: Samme utskrift som over, men nå som en mer typisk for-løkke
//   start;     slutt;           størrelse på hopp 
for (let i = 0; i < navn.length; i = i + 1) {
    console.log(navn[i]);
}

// Lager en array med mange ulike navn i
let arrayNavn = ["Jo Bjørnar","Kim","Magnus","Kim","Aslak","Henrik","Joachim","John Arne","Halvard"];

// Går gjennom og skriver ut alle navnene
for (let index = 0; index < arrayNavn.length; index++) {
    console.log(arrayNavn[index]);
}
// Går gjennom og skriver ut alle navnene på en litt annen måte (samme resultat)
for (let navn of arrayNavn) {
    console.log(navn);
}

// Jobber med en array med temperaturer
let arrayTemp = [3,5,4,5,6,4,5,6,7,8,6,7,8,5,5,1,1,1,2];

let femEllerMer = 0;

for (let tall = 0; tall < arrayTemp.length; tall++) {
    console.log(arrayTemp[tall]);
    if (arrayTemp[tall] >= 5) {
        console.log("Fant en varm temperatur!");
        femEllerMer = femEllerMer + 1;
    }
}

console.log("Hvor mange ganger 5 eller mer:" + femEllerMer);

let arrayPartikler = [];
//console.log(Math.random());
for (let x = 0; x < 100; x = x + 1) {
    arrayPartikler[x] = Math.random();
}

console.log(arrayPartikler);
console.table(arrayPartikler);