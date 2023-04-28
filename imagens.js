let imgEstrada;
let imgAtor;
let imgCarro;
let imgCarro2;
let imgCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

//Função carrega imagens
function preload(){
  imgEstrada = loadImage("img/estrada.png");
  imgAtor = loadImage("img/galinha.png");
  imgCarro = loadImage("img/carro-1.png");
  imgCarro2 = loadImage("img/carro-2.png");
  imgCarro3 = loadImage("img/carro-3.png");
  imgCarros = [imgCarro, imgCarro2, imgCarro3, imgCarro, imgCarro2, imgCarro3];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}