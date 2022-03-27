var app = document.getElementById('about');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(3500)
  .typeString('Mes Qualités : ')
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Exigeant</strong>')
  .pauseFor(600)
  .deleteChars(8)
  .pauseFor(600)
  .typeString('<strong style="color:#B31010">Patient</strong>')
  .pauseFor(600)
  .deleteChars(7)
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Soucieux</strong>')
  .pauseFor(600)
  .deleteChars(8)
  .pauseFor(600)
  .typeString('<strong style="color:#B31010">Curieux</strong>')
  .pauseFor(600)
  .deleteChars(7)
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Motivé</strong>')
  .pauseFor(2000)
  .deleteChars(6)
  .pauseFor(1000)
  .deleteChars(13)
  .pauseFor(300)
  .typeString('Atouts : ')
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Mobile</strong>')
  .pauseFor(600)
  .deleteChars(6)
  .pauseFor(600)
  .typeString('<strong style="color:#B31010">Disponible</strong>')
  .pauseFor(600)
  .deleteChars(10)
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Positif</strong>')
  .pauseFor(2000)
  .deleteChars(8)
  .pauseFor(600)
  .start();



const rule = document.getElementById("roll-rule");
const dice = document.getElementById("regle-de");
const boot = document.getElementById("boot-html");
const evalboot = document.getElementById("eval-boot");

const regle = function() {
  rule.innerHTML = "<u>Règles du jeu</u> : Lancé le dé à 6 faces. <br> <p>Chaque joueur lance le dé autant de fois qu'il le souhaite.<br> Le score du dé s'accumule au même chiffre tombé dessus.<br> Si vous tombez sur le chiffre 1, on passe le dé à l'autre joueur.<br> Le 1er arrivé a 100 gagne.</p> "; 
}

const regles = function() {
  rule.innerHTML = "Evaluation d'entrainement Javascript. <br> Creation d'un jeu de dé consistant a atteindre <br> les 100 points en premier.</div>"; 
}

const conception = function() {
  boot.innerHTML = "Evaluation incluant differents elements utilisés,<br> dont la partie <u>Bootstrap</u> et sa maitrise,<br>afin de rendre le site responsive."; 
}

const conceptions = function() {
  boot.innerHTML = "Evaluation d'entrainement HTML, CSS. Creation de 2 pages web responsive.</div>"; 
}

dice.addEventListener('mouseenter',regle)
dice.addEventListener('mouseleave',regles)
evalboot.addEventListener('mouseenter',conception)
evalboot.addEventListener('mouseleave',conceptions)

var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
  if (content.className == "open"){
    content.className = "";
    button.innerHTML = "En savoir plus me concernant";
  }
  else {
    content.className = "open";
    button.innerHTML = "En savoir plus me concernant";
  }
}
