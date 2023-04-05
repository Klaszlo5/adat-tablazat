import { ADATLISTA } from "./kutyadat.js";
var fajl = 'kutyadat.js';

function kutyafilter(e) {
  const kutyusl = document.querySelectorAll(".list div");
  let filter = e.target.dataset.filter;
  if (filter === '*') {
    kutyusl.forEach(kutyusl => kutyusl.classList.remove('hidden'));
  }  else {
    kutyusl.forEach(kutyusl => {
      kutyusl.classList.contains(filter) ? 
      kutyusl.classList.remove('hidden') : 
      kutyusl.classList.add('hidden');
    });
  };
};

$(function (adat) {
  let tb = $(".tartalom");
  tb.html(tablakiir(ADATLISTA));
  tb.html(kutyafilter(ADATLISTA));


});

function tablakiir(lista) {
  let html = `<table id="tablazat" class="table table-striped">
    <thead><tr>
      <th>  Név    </th>
      <th title="th">Szinei</th>
      <th>Kutyusoksz</th>
      <th>Kutyakép</th>
      </tr>
    </thead>`;
  for (let i = 0; i < lista.length; i++) {
    html +=
      "<tr><td>" +
      lista[i].név +
      "</td><td>" +
      lista[i].fajta +
      '</td><td>' +
      lista[i].év +
      '</td><td>' +
      "<img src='"+lista[i].kép+"' />"+
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
