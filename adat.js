

export const ADATLISTA = [
    {
        név:"Dézi",
        fajta:"keverék",
        év:"12"
    },
    {
        név:"lajos",
        fajta:"keverék",
        év:"12"
    },
    {
        név:"szuli",
        fajta:"terrier",
        év:"12"
    },
    {
        név:"jnoi",
        fajta:"west",
        év:"12"
    }
]

function listakeveres(lista) {
  let keverlistaall = [];
  let szamok;
  while (keverlistaall.length < lista.length) {
    szamok = Math.floor(Math.random() * lista.length);
    let index = 0;
    while (
      index < keverlistaall.length &&
      !(szamok == keverlistaall[index])
    ) {
      index++;
    }
    if (index >= keverlistaall.length) {
      keverlistaall.push(szamok);
    }
  }
}

$(function(){
    console.log(ADATLISTA)
})
function tablacsinal(tableData) {
    var tabla = document.createElement('table');
    
}
function rendezes1(lista) {
  lista.sort();
}

tablacsinal([[ADATLISTA]]);

export function szuresfajta(kulcs,szures){
    const SZURTLISTA=ADATLISTA.filter(function(){
        szures=0;
        return a[kulcs]===szuresifeltetel;

    });
    return SZURTLISTA
}
