const utskrift = document.getElementById("utskrift");

let infoSpråk = navigator.language;

utskrift.innerText = infoSpråk;
console.log(infoSpråk);

if(infoSpråk == "nb-NO" || infoSpråk == "nb") { // || betyr "eller",altså, ett av alternativene må stemme
    utskrift.innerText += " - altså, du er norsk!";
    //utskrift.innerText = utskrift.innerText + "Du er norsk!";
}

let bredde = window.innerWidth;
let breddeScreen = screen.width;
console.log("bredde = " + bredde); // "bodyen", der "du kan lage nettside"
console.log("bredde (screen) = " + breddeScreen); // heile skjermen

let hogde = window.innerHeight;
let hogdeScreen = screen.height;
console.log("høgde = " + hogde);
console.log("høgde (screen) = " + hogdeScreen);

let plattform = navigator.platform;
let nettleser = navigator.userAgent;
let vendor = navigator.vendor;
console.log("plattform: " + plattform + ", userAgent: " + nettleser + ", vendor: " + vendor);