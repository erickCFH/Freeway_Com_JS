// Lista Carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Função Mostra o Carro
function mostraCarro() {
    for (let i = 0; i < imgCarros.length; i++) {
        image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }

}

//Função de Movimento do carro
function movimentaCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

//Função volta a posição do carro inicial 
function voltaPosicaoInicialCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}

//Função que verifica se os carros passou na tela
function passouTodaTela(xCarros){
    return xCarros < -50;
}