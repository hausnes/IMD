let innfelt = document.querySelector("#innfelt");

innfelt.addEventListener("focus", fokus);

function fokus() {
    console.log("Fokus trigget.");
    innfelt.style.fontSize = "3em";
}

innfelt.addEventListener("blur", mistetFokus);

function mistetFokus() {
    console.log("Mistet fokus.");
    innfelt.style.fontSize = "1em";
}

// Bildene på bunnen
const dorer = document.querySelectorAll("img");
console.log(dorer);

for(let dor of dorer) {
    console.log(dor);
}

for (let i = 0; i < dorer.length; i++) {
    dorer[i].addEventListener("click", sjekkDor);
  }

function sjekkDor(e) {
    let trykketDor = e.target;
    console.log(trykketDor.id);

    // Bytter ut bilde av valgt dør med geit eller bil
    if (trykketDor.id === "dor1") {
        e.target.src = "https://assets.codepen.io/5037447/geit.png";
    } else if (trykketDor.id === "dor2") {
        e.target.src = "https://assets.codepen.io/5037447/bil.png";
    } else {
        e.target.src = "https://assets.codepen.io/5037447/geit.png";
    }
}