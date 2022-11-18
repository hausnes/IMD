const spiller = document.querySelector("#spiller");
//const fiende = document.querySelector("#fiende");

let arrFiender = [];

class Fiende {
    constructor(xPos, yPos, bredde, hogde, farge) {
        this.xPos = xPos,
        this.yPos = yPos,
        this.bredde = bredde,
        this.hogde = hogde,
        this.farge = farge,
        this.opprett()
        // this.fiendeDiv = document.createElement("div"),
        // this.fiendeDiv.class = "fiende";
        // this.fiendeDiv.style.backgroundColor = this.farge;
        // this.fiendeDiv.style.width = this.bredde + "px";
        // this.fiendeDiv.style.height = this.hogde + "px";
        // this.fiendeDiv.style.left = this.xPos + "px";
        // this.fiendeDiv.style.top = this.yPos + "px";
        // document.body.appendChild(this.fiendeDiv)
    }

    opprett() {
        this.fiendeDiv = document.createElement("div"),
        this.fiendeDiv.class = "fiende";
        this.fiendeDiv.style.backgroundColor = this.farge;
        this.fiendeDiv.style.width = this.bredde + "px";
        this.fiendeDiv.style.height = this.hogde + "px";
        this.fiendeDiv.style.left = this.xPos + "px";
        this.fiendeDiv.style.top = this.yPos + "px";
        document.body.appendChild(this.fiendeDiv)
    }

    tegn() {
        this.fiendeDiv.style.left = this.xPos + "px";
        this.fiendeDiv.style.top = this.yPos + "px";
    }

    endreXpos(hopp) {
        this.xPos += hopp;
    }

    endreYpos(hopp) {
        this.yPos += hopp;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
  

let fiende1 = new Fiende(300,100,75,75,"blue");
arrFiender.push(fiende1);
let fiende2 = new Fiende(100,200,50,50,"red");
arrFiender.push(fiende2);
let fiende3 = new Fiende(getRandomIntInclusive(50,500),getRandomIntInclusive(50,500),10,10,"pink");
arrFiender.push(fiende3);

// fiende1.tegn();
// fiende2.tegn();

let spillerX = 400;
let spillerY = 400;

let fiendeFart = 1;

let arrowDownNede = false;
let arrowUpNede = false;
let arrowRightNede = false;
let arrowLeftNede = false;
let arrow = [arrowDownNede, arrowUpNede, arrowRightNede, arrowLeftNede];

document.addEventListener("keydown", function(e){
    let tast = e.key;
    console.log(tast);
    if(e.key==="ArrowDown") {
        arrowDownNede = true;
    }
    
    if(e.key==="ArrowUp") {
        arrowUpNede = true;
    }

    if(e.key==="ArrowLeft") {
        arrowLeftNede = true;
    }

    if(e.key==="ArrowRight") {
        arrowRightNede = true;
    }
});

document.addEventListener("keyup", function() {
    arrowDownNede = false;
    arrowUpNede = false;
    arrowRightNede = false;
    arrowLeftNede = false;
    // console.log("keyup");
});

function gameLoop() {
    // Bevegelse til "helten"
    // Sjekkar alle knappane/retningane og aukar med visse verdiar
    if(arrowDownNede) {
        spillerY += 10;
    }
    else {
        spillerY += 0;
    }
    
    if(arrowRightNede) {
        spillerX += 10;
    }
    else {
        spillerX += 0;
    }

    if(arrowLeftNede) {
        spillerX -= 10;
    }
    else {
        spillerX += 0;
    }

    if(arrowUpNede) {
        spillerY -= 10;
    }
    else {
        spillerY += 0;
    }

    // Fiendeposisjonar, skal følge etter spelaren
    for (let i = 0; i < arrFiender.length; i++) {
        // let xPlassering = arrFiender[i].xPos;
        //console.log(xPlassering);
        if(arrFiender[i].xPos > spillerX) {
            arrFiender[i].endreXpos(-fiendeFart); // neg. forteikn for å flytte til venstre
        }
        else {
            arrFiender[i].endreXpos(fiendeFart); // pos. forteikn for å flytte til høgre
        }
    
        if(arrFiender[i].yPos < spillerY) {
            arrFiender[i].endreYpos(fiendeFart); // Pos. forteikn for å flytte nedover
        }   
        else {
            arrFiender[i].endreYpos(-fiendeFart); // Neg. forteikn for å flytte oppover
        }

        arrFiender[i].tegn();
        // arrFiender[i].fiendeDiv.style.left
    }

    spiller.style.top = spillerY + "px";
    spiller.style.left = spillerX + "px";
    // fiende.style.left = fiendeX + "px";
    // fiende.style.top = fiendeY + "px";

    requestAnimationFrame(gameLoop); // Kallar på seg sjølv ca. 60 gonger i sek.
}

gameLoop(); // Startar spel