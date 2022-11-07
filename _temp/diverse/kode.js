// while

// for
let navn = "Jo Bjørnar"; // Definerer en string
for (let bokstav of navn) {
    console.log(bokstav);
}

console.log(navn.length);

//   start;     slutt;           størrelse på hopp 
for (let i = 0; i < navn.length; i = i + 1) {
    console.log(navn[i]);
}

let arrayNavn = ["Jo Bjørnar","Kim","Magnus","Kim","Aslak","Henrik","Joachim","John Arne","Halvard"];


/*
for (let index = 0; index < arrayNavn.length; index++) {
    const element = arrayNavn[index];
    console.log(element);
}

for (let temp of arrayTemp) {
    console.log(temp);
}
*/
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