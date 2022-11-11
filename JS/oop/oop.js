const spiller = document.querySelector("#spiller");
const fiende = document.querySelector("#fiende");

let spillerX = 100;
let spillerY = 100;

let fiendeX = 500;
let fiendeY = 500;

let arrowDownNede = false;
let arrowUpNede = false;
let arrowRightNede = false;
let arrowLeftNede = false;
let arrow = [arrowDownNede, arrowUpNede, arrowRightNede, arrowLeftNede];

document.addEventListener("keydown", function(e) {
    // console.log(e.key);
    // console.log(typeof e.key); // returnerer string
    
    if(e.key==="ArrowDown") {
        console.log("Gå ned!");
        // spillerY += 10;
        // spiller.style.top = spillerY + "px";
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
});

function loop() {
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

    // Forfølger spilleren
    if(fiendeX > spillerX) {
        fiendeX -= 1;
    }
    else {
        fiendeX += 1;
    }

    if(fiendeY < spillerY) {
        fiendeY += 1;
    }   
    else {
        fiendeY -= 1;
    }
    
    spiller.style.top = spillerY + "px";
    spiller.style.left = spillerX + "px";
    fiende.style.left = fiendeX + "px";
    fiende.style.top = fiendeY + "px";
    requestAnimationFrame(loop);
}

loop();