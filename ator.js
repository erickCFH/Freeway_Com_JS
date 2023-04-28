//Codigo da Galinha
let yGalinha = 366;
let xGalinha = 100;
let colisao = false;
let meusPontos = 0;

//Função Mostra a Galinha
function mostraGalinha(){
    image(imgAtor, xGalinha, yGalinha, 30, 30);
  }

  //Função movimenta Galinha
function movimentaGalinha(){
    if(keyIsDown(UP_ARROW)){
      yGalinha -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yGalinha += 3;
      }
      
    }
  }

  //Função que verifica se o ator esta colidindo com os carros
  function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imgCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xGalinha, yGalinha, 15)
      if (colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
        if(meusPontos > 0){
          meusPontos -= 1;
        }
        
      }
    }
  }

  function voltaAtorParaPosicaoInicial(){
    yGalinha = 366;
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    text(meusPontos, width / 5, 27);
    fill(color(255,240,0));
  }

  function marcaPonto(){
    if(yGalinha < 15){
      meusPontos += 1;
      somDoPonto.play();
      voltaAtorParaPosicaoInicial();
    }
  }

  function podeSeMover(){
    return yGalinha < 366;
  }