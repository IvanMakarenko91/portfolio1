// Typescreept ecriture automatique.
var app = document.getElementById('about');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(3500)
  .typeString('Mes Qualités : ')
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Sociable</strong>')
  .pauseFor(600)
  .deleteChars(8)
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Engagé</strong>')
  .pauseFor(600)
  .deleteChars(6)
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Soucieux</strong>')
  .pauseFor(600)
  .deleteChars(8)
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Curieux</strong>')
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
  .typeString('<strong style="color:#620C0C">Disponible</strong>')
  .pauseFor(600)
  .deleteChars(10)
  .pauseFor(600)
  .typeString('<strong style="color:#620C0C">Coopératif</strong>')
  .pauseFor(2000)
  .deleteChars(10)
  .pauseFor(600)
  .start();


// Evenement hover des evaluations pour plus de details.
const rule = document.getElementById("roll-rule");
const dice = document.getElementById("regle-de");
const boot = document.getElementById("boot-html");
const evalboot = document.getElementById("eval-boot");

const regle = function() {
  rule.innerHTML = "<u>Règles du jeu</u> : Lancé le dé à 6 faces. <p>Chaque joueur lance le dé autant de fois qu'il le souhaite. Le score du dé s'accumule au même chiffre tombé dessus. Si vous tombez sur le chiffre 1, son score est perdu et son tour également. Le 1er arrivé a 100 gagne.</p> "; 
}

const regles = function() {
  rule.innerHTML = "Évaluation d'entrainement Javascript. <br> Création d'un jeu de dé consistant à atteindre <br> les 100 points en premier.</div>"; 
}

const conception = function() {
  boot.innerHTML = "Évaluation incluant différents éléments utilisés,<br> dont la partie <u>Bootstrap</u> et sa maitrise,<br>afin de rendre le site responsive."; 
}

const conceptions = function() {
  boot.innerHTML = "Évaluation d'entrainement HTML, CSS. Création de 2 pages web responsive.</div>"; 
}

dice.addEventListener('mouseenter',regle)
dice.addEventListener('mouseleave',regles)
evalboot.addEventListener('mouseenter',conception)
evalboot.addEventListener('mouseleave',conceptions)

// Evenement click pour en savoir plus me concernant
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
