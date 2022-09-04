let antallSekunder = prompt("Skriv inn antall sekunder:");
document.getElementById("utskrift").innerText = antallSekunder;

let nedtelling = setInterval(myTimer, 1000);

function myTimer() {
    antallSekunder = antallSekunder - 1;
    document.getElementById("utskrift").innerText = antallSekunder;
    
    if (antallSekunder <= 0) {
        document.getElementById("utskrift").innerText = "Jippi!";
        clearInterval(nedtelling);
    }
} 

/*
    Legge til endret farge når det nærmer seg.
    Vere mulig å skrive inn dager, minutter ...
    Lyder...
    
*/