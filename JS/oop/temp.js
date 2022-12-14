const spiller = document.querySelector("#spiller");
//const fiende = document.querySelector("#fiende");

let arrFiender = [];

class Fiende {
    constructor(xPos, yPos, bredde, hogde, hp, farge, lever) {
        this.xPos = xPos,
        this.yPos = yPos,
        this.bredde = bredde,
        this.hogde = hogde,
        this.farge = farge,
        this.hp = hp,
        this.lever = lever,
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

    fjern() {
        console.log("Fjerner: " + this.fiendeDiv);
        document.body.removeChild(this.fiendeDiv);

    }

    endreXpos(hopp) {
        this.xPos += hopp;
    }

    endreYpos(hopp) {
        this.yPos += hopp;
    }

    hentHP() {
        return this.hp;
    }

    taSkade(styrke) {
        if (this.hp > 0) {
            this.hp -= styrke;
        }
        else {
            this.hp = 0;
        }

        console.log("Fiende sin hp er: " + this.hp)
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
  

let fiende1 = new Fiende(300,100,75,75,100,"blue",true);
arrFiender.push(fiende1);
let fiende2 = new Fiende(100,200,50,50,100,"red",true);
arrFiender.push(fiende2);
let fiende3 = new Fiende(getRandomIntInclusive(50,500),getRandomIntInclusive(50,500),10,10,100,"pink",true); // Ein tredje fiende som er tilfeldig plassert
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
let angrepNede = false; // Angrepsknappen blir holdt nede
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

    if(e.key==="a") {
        angrepNede = true;
    }
});

document.addEventListener("keyup", function() {
    arrowDownNede = false;
    arrowUpNede = false;
    arrowRightNede = false;
    arrowLeftNede = false;
    angrepNede = false;
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

    // Bevegelse til fienden/fiendane
    // Fiendeposisjonar, skal f??lge etter spelaren
    if (arrFiender.length > 0) {
        for (let i = 0; i < arrFiender.length; i++) { // Ser p?? kvar fiende som ligg inne i arrayen
            // let xPlassering = arrFiender[i].xPos;
            //console.log(xPlassering);
            if(arrFiender[i].lever) { // Dersom fienden ikkje er d??d s?? skal den flytte p?? seg.
                if(arrFiender[i].xPos > spillerX) {
                    arrFiender[i].endreXpos(-fiendeFart); // neg. forteikn for ?? flytte til venstre
                }
                else {
                    arrFiender[i].endreXpos(fiendeFart); // pos. forteikn for ?? flytte til h??gre
                }
            
                if(arrFiender[i].yPos < spillerY) {
                    arrFiender[i].endreYpos(fiendeFart); // Pos. forteikn for ?? flytte nedover
                }   
                else {
                    arrFiender[i].endreYpos(-fiendeFart); // Neg. forteikn for ?? flytte oppover
                }
        
                // Angrep (helt sl??r fiende)
                //console.log("angrepNede: " + angrepNede);
                if(angrepNede) {
                    arrFiender[i].taSkade(10);
                    if(arrFiender[i].hentHP() <= 0 && arrFiender.length > 0) {
                        console.log("Fjerner fiende...");
                        arrFiender[i].fjern();
                        arrFiender.splice(i,1);
                        return;
                    }
                }
        
                arrFiender[i].tegn(); // Tegnar opp ny posisjon for s?? mange fiendar som det er i arrayen med fiendeobjekt
            }
            else {
                console.log("Fienden er d??d. " + arrFiender[i].lever);
            }    
        } // for-l??kke
    } // if (det er nokre fiendar)

    spiller.style.top = spillerY + "px"; // Tegnar opp spelaren sin nye plassering
    spiller.style.left = spillerX + "px";
    // fiende.style.left = fiendeX + "px";
    // fiende.style.top = fiendeY + "px";

    requestAnimationFrame(gameLoop); // Kallar p?? seg sj??lv ca. 60 gonger i sek.
}

gameLoop(); // Startar spel