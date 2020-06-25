class Personagem {
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = [
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
    this.frameAtual = 0;
  }
  
  exibe(){
    image(this.imagem, 0, height -135, 100, 125, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 376, 520);
      
    this.anima();
  }
  
  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
}