var app = document.getElementById('about');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
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