let listeFiendar = [];

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const canvasBredde = 600;
const canvasHogde = 600;

let fartX = 1;
let fartY = 1;

class Karakter {
    constructor(
        typeKarakter, // "helt" eller "fiende"
        hp,
        bredde, 
        hogde,
        farge, // bakgrunnsfarge for karakter 
        bilde, // eventuelt bilde av karakter, i staden for farge
        xPos,
        yPos,
        lever, // true/false
        xretning, // om den går til høgre (positivt tall), eller venstre (neg.)
        yretning, // om den går opp (neg) eller ned (pos)
        xfart,
        yfart
    ) {
        this.typeKarakter = typeKarakter,
        this.hp = hp,
        this.bredde = bredde,
        this.hogde = hogde,
        this.farge = farge,
        this.bilde = bilde,
        this.xPos = xPos,
        this.yPos = yPos,
        this.lever = lever,
        this.xretning = 1,
        this.yretning = 1
    }

    tegnKarakter() {
        ctx.fillStyle = this.farge;
        ctx.fillRect(this.xPos, this.yPos, this.bredde, this.hogde);
        
        this.yPos = this.yPos + this.yfart * this.yretning;
        this.xPos = this.xPos + this.xfart * this.xretning;
        // ctx.fill();

        // ball.xpos = ball.xpos + ball.xfart * ball.xretning; //Endrer x-posisjon 
        // ball.ypos = ball.ypos + ball.yfart * ball.yretning; //Endrer y-posisjon
        // racket.ypos = racket.ypos + racket.yfart * racket.yretning;
    }

    endreXpos(fartX) {
        this.xPos = this.xPos + fartX * this.xretning;
    }

    endreYpos(fartY) {
        this.yPos = this.yPos + fartY * this.yretning;
    }

    endreXretning(retning) {
        this.xretning = retning;
    }

    endreYretning(retning) {
        this.yretning = retning;
    }

    sjekkOmTreffVegg() {
        if(this.xPos > (canvasBredde - this.bredde)) {
            this.endreXretning(-1);
        }
        else {
            this.endreXretning(1);
        }
        if(this.yPos > (canvasHogde - this.hogde)) {
            this.endreYretning(-1);
        }
        else {
            this.endreYretning(1);
        }
    }

    // leggTilListe(karakter) {
    //     listeFiendar.push(karakter);
    // }
    
}



/*
class Fiende extends Karakter {
    constructor() {
        super();
    }
}
*/

let helten =    new Karakter(  "helt",
                                100,
                                10,
                                10,
                                "green",
                                "",
                                10,
                                10,
                                true,
                                1,
                                1,
                                1,
                                1
                );

function gameLoop() {
    helten.tegnKarakter();
    // helten.sjekkOmTreffVegg();

    requestAnimationFrame(gameLoop);
}

gameLoop();