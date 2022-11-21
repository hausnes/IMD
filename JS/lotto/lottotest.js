function lottotall(ovre) {
    return Math.floor(Math.random() * ovre);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  

let utgangspunkt = [];

function fyll() {
    for(let i = 1; i < 32; i++) {
        utgangspunkt.push(i);
    }
}

fyll();

console.log(utgangspunkt);

function fyllRekke() {
    let lottorekke = [];
    let utvalt;
    for(let i = 0; i < 7; i++) {
        utvalt = utgangspunkt[getRandomIntInclusive(1,utgangspunkt.length-1)];
        lottorekke.push(utvalt);
        utgangspunkt.splice(utvalt,1);
    }
    lottorekke.sort(function(a, b){return a-b});
    return lottorekke;
}

console.log(fyllRekke());

// const minLottorekke = [1,7,13,17,30,31,34];
// const lottorekke = [7,1,13,17,30,31,34];
// lottorekke.sort(function(a, b){return a-b});
// let lottoTreff = false;
// let antallForsok = 0;

// console.log("Lottorekke: " + JSON.stringify(lottorekke));
// console.log("Min gjetning: " + JSON.stringify(minLottorekke));
// if(JSON.stringify(lottorekke)===JSON.stringify(minLottorekke)) {
//     console.log("Lottotreff!");
// }

// while (!lottoTreff) {
//     antallForsok++;
//     for (let i = 0; i < 7; i++) {
//         lottorekke.push(lottotall);
//     }
//     lottorekke.sort();
//     if(JSON.stringify(lottorekke)==JSON.stringify(minLottorekke)) {
//         lottoTreff = true;
//     }
// }

// utskrift.innerText = "Du fekk lottorekka på " + antallForsok + "forsøk.";