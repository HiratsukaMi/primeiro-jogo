let imgfundo;
let imgpersonagem;
let cenario;
let somDeFundo;

function preload(){
  imgfundo = loadImage ('imagens/background/fundo.png');
  imgpersonagem = loadImage ('imagens/personagem/Run.png');
  somDeFundo = loadSound('sons/enigmatic.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario (imgfundo, 3);
  somDeFundo.loop();
  personagem = new Personagem (imgpersonagem);
  frameRate(20);
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
}