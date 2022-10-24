document.getElementById("btnStart").addEventListener("click", function() {
    document.getElementById("utskrift").style.display = "block";
    document.querySelector("p").style.display = "block";
    document.getElementById("btnStart").style.display = "none";

    bakgrunnsmusikk.play();
    antallSekunder = prompt("Skriv inn antall sekunder:");
    document.getElementById("utskrift").innerText = antallSekunder;
    nedtelling = setInterval(myTimer, 1000);
});

let nedtelling;
let antallSekunder = 0;

let feiringsmusikk = new Audio("lyd/happy-day-113985.mp3");
let bakgrunnsmusikk = new Audio("lyd/just-a-click-away-sci-fi-background-music-109864.mp3");

function myTimer() {
    antallSekunder = antallSekunder - 1;
    document.getElementById("utskrift").innerText = antallSekunder;

    if (antallSekunder <= 3) {
        document.getElementById("utskrift").style.color = "red";
    }

    if (antallSekunder <= 0) {
        document.getElementById("utskrift").innerText = "Jippi!";
        clearInterval(nedtelling);
        feiringsmusikk.play();
        bakgrunnsmusikk.pause();
    }
} 

/*
    X Legge til endret farge når det nærmer seg.
    X Legge til bakgrunnsmusikk og eventuelle lydeffekter.
    - Vere mulig å velge dato det skal telles ned til.
    - ...    
*/