let antallSekunder = 0;
let tikk = null;

document.querySelector("#tid").addEventListener("change", function() {
    antallSekunder = parseInt(document.querySelector("#tid").value);
    document.querySelector("h1").style.display = "block";
    document.querySelector("h1").innerHTML = antallSekunder;
    tikk = setInterval(nedtelling, 1000);
    document.querySelector("#tid").style.display = "none";
});

// let antallSekunder = prompt("Hvor mange sekunder?");

function nedtelling() {
    bakgrunnsmusikk.play();
    antallSekunder = antallSekunder - 1;
    document.querySelector("h1").innerHTML = antallSekunder;
    
    if (antallSekunder <= 3) {
        document.querySelector("h1").style.color = "red";
    }

    if (antallSekunder <= 0) {
        document.querySelector("h1").innerHTML = "Du kan gå heim, slabbedask!";
        document.querySelector("h1").style.color = "green";
        clearInterval(tikk);
        bakgrunnsmusikk.pause();
        ferdignedtelling.play();
    }
} 

let bakgrunnsmusikk = new Audio("lyd/just-a-click-away-sci-fi-background-music-109864.mp3");
let ferdignedtelling = new Audio("lyd/happy-day-113985.mp3")

document.querySelector("body").addEventListener("click", function() {
    ferdignedtelling.pause();
    bakgrunnsmusikk.pause();
});