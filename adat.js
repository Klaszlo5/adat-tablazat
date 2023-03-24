

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

$(function(){
    console.log(ADATLISTA)
})

function tablacsinal(tableData) {
    var tabla = document.createElement('table');
    
}

tablacsinal([[ADATLISTA]]);

export function szuresfajta(kulcs,szures){
    const SZURTLISTA=ADATLISTA.filter(function(){
        szures=0;
        return a[kulcs]===szuresifeltetel;

    });
    return SZURTLISTA
}