//Tamanho Senario 
function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

//Função de Desenho
function draw() {
  background(imgEstrada);
  mostraGalinha();
  mostraCarro();
  movimentaCarro();
  movimentaGalinha();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




