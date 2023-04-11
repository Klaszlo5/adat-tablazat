import { ADATLISTA } from "./kutyadat.js";

$(function (adat) {
  let tb = $(".tartalom");
  tb.html(tablakiir(ADATLISTA));
  torles(ADATLISTA)

  var kattint = 0
  var NevreRendez = document.getElementById("nev");
  $(NevreRendez).click(() => {
      if (kattint == 0){
          rendezes(0)
          kattint = 1
      }else{
          rendezesvissza(0)
          kattint = 0
      }
  });
  var FajtaraRendez = document.getElementById("fajta");
  $(FajtaraRendez).click(() => {
      if (kattint == 0){
          rendezes(1)
          kattint = 1
      }else{
          rendezesvissza(1)
          kattint = 0
      }
})

var korraRendez = document.getElementById("kor");
$(korraRendez).click(() => {
    if (kattint == 0){
        rendezes(2)
        kattint = 1
    }else{
        rendezesvissza(2)
        kattint = 0
    }

});

$(document).ready(function() {
    $(".torol-btn").click(function() {
      var row = $(this).closest("tr");
      row.remove();
    });
  });

$(document).ready(function() {
    $("#nev, #kor, #fajta").keyup(function() {
      var nevErtek = $("#nev").val().toLowerCase();
      var fajErtek = $("#fajta").val().toLowerCase();
      var korErtek = $("#kor").val();
      $("tbody tr").each(function() {
        var nev = $(this).find("td:first").text().toLowerCase();
        var faj = $(this).find("td:nth-child(2)").text().toLowerCase();
        var kor = $(this).find("td:nth-child(3)").text();
        if (nev.indexOf(nevErtek) !== -1 && kor.indexOf(korErtek) !== -1 && faj.indexOf(fajErtek) !== -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
});

//funkciok- javitanikell
function torles(lista){
  for (let index = 0; index < lista.length; index++) {
    let TOROLELEM = $(`#t-${index}`)
    
    console.log(TOROLELEM)
    $(TOROLELEM).on("click", function(){
      let toroltElem = event.target.id
      toroltElem = toroltElem.slice(2)
      $(`#sor-${index}`).remove()
      console.log(toroltElem)
    });
  }
}

function rendezes(szam) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("MyTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[szam];
      y = rows[i + 1].getElementsByTagName("td")[szam];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function rendezesvissza(szam) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("MyTable");
  switching = true;

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[szam];
      y = rows[i + 1].getElementsByTagName("td")[szam];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function elozo(n)
{
    x=n.previousSibling;
    while (x.nodeType!=1)
      {
      x=x.previousSibling;
      }
    return x;
} 

function kovi(n)
{
    x=n.nextSibling;
    while ( x != null && x.nodeType!=1)
      {
      x=x.nextSibling;
      }
    return x;
} 
function sorfelgomb()
{
    var table,
        row = this.parentNode;
    
    while ( row != null ) {
        if ( row.nodeName == 'TR' ) {
            break;
        }
        row = row.parentNode;
    }
    table = row.parentNode;
    table.insertBefore ( row, get_previoussibling( row ) );
}

function sorlegomb()
{
    var table,
        row = this.parentNode;
    
    while ( row != null ) {
        if ( row.nodeName == 'TR' ) {
            break;
        }
        row = row.parentNode;
    }
    table = row.parentNode;
    table.insertBefore ( row, get_nextsibling ( get_nextsibling( row ) ) );
}

function tablakiir(lista) {
  let html = `<table id="tablazat" class="table table-striped">
  <thead><tr>
    <th>  Kutya neve    </th>
    <th title="th">Kutya fajtája</th>
    <th>Kutyus kora</th>
    <th>Kutyus kép</th>
    </tr>
  </thead>`;
  html += '<tbody id="elem">'
  for (let index = 0; index < lista.length; index++) {
    html += `<tr id='sor-${index}'>`
    const lisobj = lista[index];
    for (const kulcs in lisobj){
      const elem = lisobj[kulcs]
      if(kulcs == ADATLISTA.nev){
        html += `<th>${elem}</th>`
      } else {
        html += `<td>${elem}</td>`
      }
    }
    html += "<td>  <img src='"+ADATLISTA[index].kép+"' />  <button class = 'btn-torol' id='t-"+index+"'> Törlés </button><button class = 'btn-torol' id='t-"+index+"' onClick="+MoveUp.call(this)+"> Feljebb </button></td>";
    html += `</tr>`    
  }
  html += '</tbody>'
  html += '</table>'
  html += '</div>'
  let sorok = $('article')
  return sorok.append(html);
}


$('#bead').on("click", function(e){
  e.preventDefault();
  let kutyanev=document.getElementById("kutyanev").value;
  let kor=document.getElementById("kor").value;
  let fajta=document.getElementById("fajta").value;
  $("#tablazat").find('tbody')
  .append($('<tr><td>'+kutyanev+'</td><td>'+fajta+'</td><td>'+kor+'</td><td>'+'<img src="kutya/kutya4.png">'+'</td></tr>'))
});

$(function () {
  console.log(ADATLISTA)
})
function tablacsinal(tableData) {
  var tabla = document.createElement('table');
}

tablacsinal([[ADATLISTA]]);
