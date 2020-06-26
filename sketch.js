let imgfundo;
let imgpersonagem;
let imginimigo;

let cenario;
let somDeFundo;
let somPulo;
let personagem;
let inimigo;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrizPersonagem = [
  [0, 0],
  [376, 0],
  [752, 0],
  [1158, 0],
  [0, 520],
  [376, 520],
  [752, 520],
  [1158, 520],
  [0, 540],
  [376, 540]
];

function preload(){
  imgfundo = loadImage ('imagens/background/fundo.png');
  imgpersonagem = loadImage ('imagens/personagem/Run.png');
  imginimigo = loadImage ('imagens/inimigos/gotinha.png');
  somDeFundo = loadSound('sons/enigmatic.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario (imgfundo, 3);
  personagem = new Personagem (matrizPersonagem, imgpersonagem, 0, 100, 125, 376, 520);
  inimigo = new Inimigo (matrizInimigo, imginimigo, width - 52, 52, 52, 104, 104);
  frameRate(20);
  somDeFundo.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  if(personagem.colisao(inimigo)){
    console.log('colidiu');
    noLoop();
  }
}