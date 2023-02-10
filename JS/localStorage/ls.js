// localStorage.antallBesok = 1;
// localStorage.paalegg = "Nugatti";
// localStorage.paalegg = "Sjokade";

console.log(localStorage.antallBesok); // Undefined som utskrift første gang

// Undersøker om localStorage-variabelen er satt
if (localStorage.antallBesok) {
    // Alt lagres som tekst i localStorage, så vi må gjøre om til tall
    localStorage.antallBesok = Number(localStorage.antallBesok) + 1;
    // localStorage.setItem(antallBesok, Number(localStorage.antallBesok) + 1);
} else {
    localStorage.antallBesok = 1;
    // localStorage.setItem(antallBesok,1);
}

console.log("Dette er ditt " + localStorage.antallBesok + ". besøk på denne nettsiden.");

localStorage.highscore = 0;

// Spillet går...
let kimHighscore = 33;

localStorage.highscore = kimHighscore;
localStorage.highscoreInnehaver = "Kim";

let score = [
    { navn: "Jo Bjørnar", highscore: 33},
    { navn: "Kim", highscore: 14}
];

localStorage.temp = score;

// localstorage klarer ikke lagre dette på riktig måte
// for( let s of localStorage.temp) {
//     console.log(s);
// }

// Kilde til de neste linjene: https://www.w3schools.com/js/js_json_stringify.asp
// Gjør array med objekt om til string slik at det kan lagres i localStorage
localStorage.halvard = JSON.stringify(score);
console.log("Stringen: " + localStorage.halvard);

// Gjør string i localstorage om til array med objekt igjen
console.log(JSON.parse(localStorage.halvard));

// Vi kan slette all informasjonen i localstorage
// localStorage.clear();

console.log(localStorage.halvard);