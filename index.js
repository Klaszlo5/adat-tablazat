import { ADATLISTA } from "./kutya.js";

/*kartyak*/
$(document).ready(function() {
  $("#kutyusok").on("slide.bs.carousel", function(e) {
    var $f = $(f.relatedTarget);
    var szkm = $f.index();
    var elemegyhosszban = 3;
    var osszeselem = $(".doboz").length;

    if (szkm >= osszeselem - (elemegyhosszban - 1)) {
      var sz = elemegyhosszban - (osszeselem - szkm);
      for (var i = 0; i < sz; i++) {
        if (e.direction == "left") {
          $(".doboz")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".doboz")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

/*
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
*/