class karakter {
    constructor(
        typeKarakter, // "helt" eller "fiende"
        hp,
        bredde, 
        hogde, 
        bilde, // eventuelt bilde av karakter, i staden for farge
        xPos,
        yPos,
        farge,
        lever // true/false
    )
}

class Fiende extends karakter {
    constructor() {
        
    }
}

function gameLoop() {
    tegnHelt();

    requestAnimationFrame(gameLoop);
}

gameLoop();