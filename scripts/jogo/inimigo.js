class Inimigo extends Animacao {
  constructor(matriz, imagem, x, largura, altura, largSprite, altSprite){
    super(matriz, imagem, x, largura, altura, largSprite, altSprite);
    
    this.velocidade = 10;
  }
  
  move(){
    this.x = this.x - this.velocidade;
    
    if(this.x < -this.largura){
      this.x = width;
    }
  }
}