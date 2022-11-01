const knappRegnUt = document.getElementById("knappRegnUt");
knappRegnUt.addEventListener("click", regnUt);

function regnUt() {
    let sted1 = document.getElementById("stedsnavn1").value;
    let sted2 = document.getElementById("stedsnavn2").value;
    // console.log(sted1);
    let sted1Lengde = sted1.length;
    let sted2Lengde = sted2.length;
    let differansen = sted1Lengde - sted2Lengde;
    console.log("Differansen er: " + differansen);
    //console.log("Differansen er: " + Math.abs(differansen)); // Alternativ

    
    // if(differansen>2) {
    //     console.log("Differansen er større enn 2.");
    // }
    // else {
    //     console.log("Mindre enn, eller lik, 2..");
    // }
}