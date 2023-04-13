import { ADATLISTA } from "./kutyadat.js";

$(function(){
  // funkciobehivasok..:
  const tartalom = $('#tartalom');
  const urlap = $('#urlap');
  const kutyanev = $('#kutyanev');
  const kor = $('#kor');
  const fajta = $('#fajta');
  const bead = $('#bead');
  const reset = $('#reset');
  const filterezes = $('.filter-option');
  const fejlecek = $('#tablazat th');

  function tablakiir(){
    let lista = ADATLISTA;
    // kevesebb rendezes, adatszures..
    lista = szures(lista);
    lista = rendezes(lista);

    tartalom.html('');
    for(let index=0; index < lista.length; index++){
      const object = lista[index];
      let fel = '<button class="btn btn-outline-secondary" disabled>Fel</button>';
      if(index > 0){
        fel = `<button class="btn btn-outline-primary" data-muvelet="fel" data-id="${object.id}">Fel</button>`;
      }

      let le = '<button class="btn btn-outline-secondary" disabled>Le</button>';
      if(index < lista.length - 1){
        le = `<button class="btn btn-outline-primary" data-muvelet="le" data-id="${object.id}">Le</button>`;
      }
      tartalom.append(`
        <tr>
          <td>${object.nev}</td>
          <td>${object.fajta}</td>
          <td>${object.kor}</td>
          <td>
            <img src="${object.kép}">
          </td>
          <td class="muveletek">
            <button class="btn btn-outline-primary" data-muvelet="torles" data-id="${object.id}">Törlés</button>
            ${fel}
            ${le}
          </td>
        </tr>
      `)
    }
    if(lista.length === 0){
      tartalom.append('<tr><td class="text-center" colspan="5">Nincs adat</td>');
    }
    // gombok..
    tartalom.find('button').on('click', function(e){
    const muvelet = $(this).data('muvelet');
    const id = Number($(this).data('id'));
    const iREGI = ADATLISTA.findIndex(function(object){
      return object.id == id;
    })

    let iUJ;
    let csereKell = false;

    if(muvelet === 'torles'){
      ADATLISTA.splice(iREGI, 1);
    }
    else if(muvelet === 'fel'){
      iUJ = iREGI - 1;
      csereKell = true;
    }
    else if(muvelet === 'le'){
      iUJ = iREGI + 1;
      csereKell = true;
    }
    if(iUJ < 0 || iUJ > ADATLISTA.length){
      // tömb alul,túlindexelés..
      return;
    }
    if(csereKell){
      // elem cserélése
      const object = ADATLISTA[iREGI];
      ADATLISTA[iREGI] = ADATLISTA[iUJ];
      ADATLISTA[iUJ] = object;
    }
      tablakiir();
    });
  }

  function szures(lista){
    const nevErtek = kutyanev.val().trim().toLowerCase();
    const fajErtek = fajta.val().trim().toLowerCase();
    const korErtek = kor.val().trim().toLowerCase();
    const szuroGomb = filterezes.siblings('.btn-primary');
    let szuroFeltetel = '';
    if(szuroGomb.length > 0){
      szuroFeltetel = szuroGomb.data('filter');
    }
    // ha a szűrés üres, térjen vissza..
    if(nevErtek === '' && fajErtek === '' && korErtek === '' && szuroFeltetel === ''){
      return lista;
    }
    const listaUj = [];
    for(let index=0; index<lista.length; index++){
      const object = lista[index];
      const nev = object.nev.toLowerCase();
      const faj = object.fajta.toLowerCase();
      const kor = object.kor;

      let megtart = true;
      // input szűrés.
      if(nevErtek !== '' && nev.indexOf(nevErtek) === -1){
        megtart = false;
      }
      // lista.kor atalakitasa string-é
      if(korErtek !== '' && kor !== Number(korErtek)){
        megtart = false;
      }
      if(fajErtek !== '' && faj.indexOf(fajErtek) === -1){
        megtart = false;
      }
      if(szuroFeltetel !== '*'){
        // könnyebb számolás lesz, ha hónapban van megadva va kor.
        if(szuroFeltetel === 'stilus' && !(2 <= kor && kor <= 3)){
          megtart = false;
        }
        else if(szuroFeltetel === 'stilus2' && !(kor < 3 * 12)){  // 3 év
          megtart = false;
        }
        else if(szuroFeltetel === 'stilus3' && !(kor >= 3.5 * 12)) { // 3.5 év
          megtart = false;
        }
      }
      if(megtart){
        listaUj.push(object);
      }
    }
    return listaUj;
  }

  function rendezes(lista){
    const nyil = fejlecek.find('[data-irany]');
    const irany = nyil.attr('data-irany');
    if(!irany){
      // ha nincs rendezés visszatér..
      return lista;
    }
    // az listáról egy változtatott máasolat..
    const listaUj = lista.slice();
    const ertek = nyil.attr('data-ertek');
    if(ertek === 'kutyaneve'){
      if(irany === 'le'){
        listaUj.sort(function(a, b){if(a.nev < b.nev){return -1;}if(a.nev > b.nev){return 1;}return 0;});
      }
      else {
        listaUj.sort(function(a, b){if(a.nev < b.nev){return 1;}if(a.nev > b.nev){return -1;}return 0;});
      }
    }
    else if(ertek === 'faj'){
      if(irany === 'le'){
        listaUj.sort(function(a, b){if(a.fajta < b.fajta){return -1;}if(a.fajta > b.fajta){return 1;}return 0;});
      }
      else {
        listaUj.sort(function(a, b){if(a.fajta < b.fajta){return 1;}if(a.fajta > b.fajta){return -1;}return 0;});
      }
    }
    else if(ertek === 'kor'){
      if(irany === 'le'){
        listaUj.sort(function(a, b){if(a.kor < b.kor){return -1;}if(a.kor > b.kor){return 1;}return 0;});
      }
      else {
        listaUj.sort(function(a, b){if(a.kor < b.kor){return 1;}if(a.kor > b.kor){return -1;}return 0;});
      }
    }
    console.log(listaUj);
    return listaUj;
  }
  $('#kutyanev, #kor, #fajta').on('input keyup', function(){
    tablakiir();
  });
  filterezes.on('click', function(){
    const gomb = $(this);
    const bekapcsolva = gomb.hasClass('btn-primary');
    filterezes.removeClass('btn-primary').addClass('btn-outline-primary');
    if(!bekapcsolva){
      gomb.addClass('btn-primary').removeClass('btn-outline-primary');
    }

    tablakiir();
  });
  fejlecek.on('click', function(){
    const fejlec = $(this);
    const irany = fejlec.find('.bi');
    const iranyRegi = irany.attr('data-irany');
    fejlecek.find('.bi')
    .removeClass('bi-arrow-down-square-fill bi-arrow-up-square-fill')
    .removeAttr('data-irany');

    if(!iranyRegi){
      irany.addClass('bi-arrow-down-square-fill').attr('data-irany', 'le');
    }
    else if(iranyRegi === 'le'){
      irany.addClass('bi-arrow-up-square-fill').attr('data-irany', 'fel');
    }
    else {
      irany.removeAttr('data-irany');
    }

    tablakiir();
  })
  urlap.on('submit', function(e){
    e.preventDefault();
  });
  bead.on('click', function(){
    const ujId = ADATLISTA[ADATLISTA.length - 1].id + 1;

    ADATLISTA.push({
      id: ujId,
      nev: kutyanev.val(),
      fajta: fajta.val(),
      kor: Number(kor.val()),
      kép: `kutya/${fajta.val()}.png`
    });
    // táblázat ujrairása..
    tablakiir();
  });
  reset.on('click', function(){
    kutyanev.val('');
    kor.val('');
    fajta.val('');
    tablakiir();
  });
  // kezdeti táblázat betöltése....
  tablakiir();
});
