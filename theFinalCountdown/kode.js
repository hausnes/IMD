let antallSekunder = prompt("Hvor mange sekunder?");
document.querySelector("h1").innerHTML = antallSekunder;

let tikk = setInterval(nedtelling, 1000);

function nedtelling() {
    antallSekunder = antallSekunder - 1;
    document.querySelector("h1").innerHTML = antallSekunder;
    if (antallSekunder <= 0) {
        document.querySelector("h1").innerHTML = "Du kan gå hjem, slabbedask!";
        clearInterval(tikk);
    }
} 