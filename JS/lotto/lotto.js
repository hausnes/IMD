const utskrift = document.querySelector("#utskrift");

function lottotall() {
    return Math.floor(Math.random() * 31) + 1;
}

const minLottorekke = [1,7,13,17,30,31,34];
const lottorekke = [];
let lottoTreff = false;
let antallForsok = 0;

while (lottoTreff == false) {
    antallForsok++;
    for (let i = 0; i < 7; i++) {
        lottorekke.push(lottotall);
    }
    lottorekke.sort(function(a, b){return a-b});
    if(JSON.stringify(lottorekke)==JSON.stringify(minLottorekke)) {
        lottoTreff = true;
    }
}

utskrift.innerText = "Du fekk lottorekka på " + antallForsok + "forsøk.";