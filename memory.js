var cards = [
  "karol.jpg",
  "karol.jpg",
  "karka.jpg",
  "karka.jpg",
  "gaba.jpg",
  "gaba.jpg",
  "ja.jpg",
  "ja.jpg",
  "ewi.jpg",
  "ewi.jpg",
  "daga.jpg",
  "daga.jpg",
  "anka.jpg",
  "anka.jpg",
  "anias.jpg",
  "anias.jpg",
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(cards);

//alert(cards[4]);
//console.log(cards);

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

var c12 = document.getElementById("c12");
var c13 = document.getElementById("c13");
var c14 = document.getElementById("c14");
var c15 = document.getElementById("c15");

c0.addEventListener("click", function () {
  revealCard(0);
});
c1.addEventListener("click", function () {
  revealCard(1);
});
c2.addEventListener("click", function () {
  revealCard(2);
});
c3.addEventListener("click", function () {
  revealCard(3);
});

c4.addEventListener("click", function () {
  revealCard(4);
});
c5.addEventListener("click", function () {
  revealCard(5);
});
c6.addEventListener("click", function () {
  revealCard(6);
});
c7.addEventListener("click", function () {
  revealCard(7);
});

c8.addEventListener("click", function () {
  revealCard(8);
});
c9.addEventListener("click", function () {
  revealCard(9);
});
c10.addEventListener("click", function () {
  revealCard(10);
});
c11.addEventListener("click", function () {
  revealCard(11);
});

c12.addEventListener("click", function () {
  revealCard(12);
});
c13.addEventListener("click", function () {
  revealCard(13);
});
c14.addEventListener("click", function () {
  revealCard(14);
});
c15.addEventListener("click", function () {
  revealCard(15);
});

var onevisible = false;
var turncounter = 0;
var visible_nr;
var lock = false;
var pairsleft = 8;

function revealCard(nr) {
  //alert(nr);
  if ($("#c" + nr).css("opacity") != 0 && lock == false) {
    lock = true;
    var obraz = "url(img/" + cards[nr] + ")";

    $("#c" + nr).addClass("cardA");
    $("#c" + nr).removeClass("card");
    $("#c" + nr).css("background-image", obraz);
    if (onevisible == false) {
      //first card
      onevisible = true;
      visible_nr = nr;
      lock = false;
    } else {
      //second card
      turncounter++;
      $(".score").html("Licznik rund: " + turncounter);
      onevisible = false;
      if (cards[nr] == cards[visible_nr]) {
        setTimeout(() => {
          hide2cards(nr, visible_nr);
        }, 500);
      } else {
        setTimeout(() => {
          restore2cards(nr, visible_nr);
        }, 1200);
      }
    }
  }
}

function hide2cards(n1, n2) {
  $("#c" + n1).css("opacity", 0);
  $("#c" + n2).css("opacity", 0);

  pairsleft--;

  if (pairsleft == 0) {
    $(".board").html("<h1>Wygrałeś/aś!<br> w " + turncounter + " turach</h1>");
  }

  lock = false;
}

function restore2cards(n1, n2) {
  $("#c" + n1).addClass("card");
  $("#c" + n1).removeClass("cardA");
  $("#c" + n1).css("background-image", "url(img/A.png)");

  $("#c" + n2).addClass("card");
  $("#c" + n2).removeClass("cardA");
  $("#c" + n2).css("background-image", "url(img/A.png)");

  lock = false;
}
