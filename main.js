import { ADATLISTA } from "./adat.js";

$(function () {
  
  let tb = $(".tartalom");
  tb.html(tablakiir(ADATLISTA));
});


function tablakiir(lista) {
  let html = `<table id="tablazat">
    <thead>
      <th>  sssssssssssssssssNév    </th>
      <th title="th">Szinei</th>
      <th>sssssssKutyusoksz</th>
    </thead>`;
  for (let i = 0; i < lista.length; i++) {
    html +=
      "<tr><td>" +
      lista[i].név +
      "</td><td>" +
      lista[i].fajta +
      '</td><td>' +
      lista[i].év +
      '</td></tr>';
  }
  html += `</table>`;
  return html
}

function rendezes1(nev) {
  nev.sort();
}

function tabl() {
  $("#tablazat").DataTable({
    order: [[0, "asc"]]
  });
}


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

$(function () {
  console.log(ADATLISTA)
})
function tablacsinal(tableData) {
  var tabla = document.createElement('table');

}

tablacsinal([[ADATLISTA]]);

export function szuresfajta(kulcs, szures) {
  const SZURTLISTA = ADATLISTA.filter(function () {
    szures = 0;
    return a[kulcs] === szuresifeltetel;

  });
  return SZURTLISTA
}
