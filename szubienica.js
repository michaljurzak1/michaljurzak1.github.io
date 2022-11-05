var hasla = new Array(10);
hasla[0] = "Pewnego razu w hollywood";
hasla[1] = "Skazani na Shawshank";
hasla[2] = "Dwunastu gniewnych ludzi";
hasla[3] = "Lot nad kukułczym gniazdem";
hasla[4] = "Władca Pierścieni";
hasla[5] = "Życie jest piękne";
hasla[6] = "Chłopcy z ferajny";
hasla[7] = "Incepcja";
hasla[8] = "Król lew";
hasla[9] = "Wyspa tajemnic";

var losowa = Math.floor(Math.random() * hasla.length);
var haslo = hasla[losowa];
//alert(Math.random());
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var kreski = "";
var litery = new Array();
var counter = 0;
var hasla = new Array(10);

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

for (i = 0; i < dlugosc; i++) {
  if (haslo.charAt(i) == " ") kreski = kreski + " ";
  else kreski = kreski + "_";
}

function wypisz_haslo() {
  document.getElementById("plansza").innerHTML = kreski;
}
function start() {
  var tresc_diva = "";

  for (i = 0; i < 35; i++) {
    var element = "lit" + i;
    tresc_diva =
      tresc_diva +
      '<div class="litera" onclick="sprawdz(' +
      i +
      ')" id="' +
      element +
      '">' +
      litery[i] +
      "</div>";
    if ((i + 1) % 7 == 0)
      tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;

  wypisz_haslo();
}

String.prototype.changeChar = function (place, char) {
  if (place > this.length - 1) return this.toString();
  else return this.substring(0, place) + char + this.substring(place + 1);
};

function sprawdz(nr) {
  var trafiona = false;

  for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == litery[nr]) {
      kreski = kreski.changeChar(i, litery[nr]);
      trafiona = true;
    }
  }
  var element = "lit" + nr;

  if (trafiona == true) {
    yes.play();
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00c000";
    document.getElementById(element).style.border = "3px solid #00c000";
    document.getElementById(element).style.cursor = "default";
    wypisz_haslo();
  } else {
    no.play();
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#c00000";
    document.getElementById(element).style.border = "3px solid #c00000";
    document.getElementById(element).style.cursor = "default";

    document.getElementById(element).setAttribute("onclick", ";");

    counter++;
    document.getElementById("szubienica").innerHTML =
      '<img src="img/s' + counter + '.jpg" alt=""/>';
  }
  //wygrana
  if (haslo == kreski)
    document.getElementById("alfabet").innerHTML =
      "Zajebiście! Wygrałeś. Hasło było: " +
      haslo +
      '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

  if (counter >= 9)
    document.getElementById("alfabet").innerHTML =
      "Kurwa! Zjebałeś. Hasło było: " +
      haslo +
      '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}

window.onload = start;
