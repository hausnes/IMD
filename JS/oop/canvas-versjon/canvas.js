let listeFiendar = [];

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

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
        lever // true/false
    ) {
        this.typeKarakter = typeKarakter,
        this.hp = hp,
        this.bredde = bredde,
        this.hogde = hogde,
        this.farge = farge,
        this.bilde = bilde,
        this.xPos = xPos,
        this.yPos = yPos,
        this.lever = lever
    }

    tegnKarakter() {
        ctx.rect(this.xPos, this.yPos, this.bredde, this.hogde);
        ctx.fillStyle = this.farge;
        ctx.fill();
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

let helten = new Karakter("helt",100,10,10,"green","",10,10,true);

function gameLoop() {
    helten.tegnKarakter();

    requestAnimationFrame(gameLoop);
}

gameLoop();