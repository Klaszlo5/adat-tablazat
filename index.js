import { ADATLISTA } from "./kutyadat.js";

$(function () {
  let tb = $(".tartalom");
  tb.html(tablakiir(ADATLISTA));
  tb.html(kivalaszt(ADATLISTA));
  tb.html(renderTheCards[[ADATLISTA]])
});


function tablakiir(lista) {
  let html = `<div class="card" style="width: 18rem;">`;
  for (let i = 0; i < lista.length; i++) {
    html +=
      /*'<a href='+lista[i].kép+' target="_blank">Nagynézet*/'<img src='+lista[i].kép+'></img>' +
      "<div class=`card-body`>" +
      lista[i].nev +
      "<h5 class=`card-title`>" + lista[i].id + ". számú kutyusunk</h5>" +
      lista[i].szoveg +
      ' <p class="card-text">Kutyusunk: ' +
      lista[i].kor + '  hónapos </p>' +
      '<input type="button" class="button" id="kartya" value="Kosárba!">';
  }
  html += `</div>`;
  return html
}

function kutyus() {
  $("#kutyusvalaszt").DataTable({
    
  
  });
}

function tabl() {
  $("#tablazat").DataTable({
    order: [[0, "asc"]]
  });
}

$(function () {
  console.log(ADATLISTA)
  
})

function kartyacsinal(tableData) {
  var tabla = document.createElement('table');
}

kartyacsinal([[ADATLISTA]]);






/*
export function szuresfajta(kulcs, szures) {
  const SZURTLISTA = ADATLISTA.filter(function () {
    szures = 0;
    return a[kulcs] === szuresifeltetel;

  });
  return SZURTLISTA
}

*/
