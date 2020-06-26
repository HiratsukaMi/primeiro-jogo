class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, largSprite, altSprite){
    super(matriz, imagem, x, largura, altura, largSprite, altSprite);
    
    this.yInicio = height - this.altura;
    this.y = this.yInicio;
    
    this.velocidadePulo = 0;
    this.gravidade = 3;
  }
  
  pula(){
    this.velocidadePulo = - 30;
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y > this.yInicio){
      this.y = this.yInicio;
    }
  }
  
  colisao(inimigo){
    const precisao = .7;
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
    
    return colisao;
  }
}