let largura = 0;
let altura = 0;
let life = 1;
let time = 10;
let timeMosquito = 1500;

let createTime = null;
let nivel = window.location.search;
nivel = nivel.replace('?', '');
if(nivel === 'facil'){
//1500
createTime = 1500;
}else if(nivel === 'normal'){
//1100
createTime = 1100;
}else {
createTime = 800;
}
console.log(nivel+ ' ' + createTime);

function atualizaTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);

}
atualizaTela()

let cronometro = setInterval(function () {
    time -= 1
    if (time < 0) {
    clearInterval(cronometro);
    clearInterval(createMosca);
    window.location.href = './vitoria.html';
    console.log(time);
    } else {
    document.getElementById('cronometro').innerHTML = time
    }
    }, 1000)
    

function positionRandom(){

    //remoção do elemento
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if (life > 3){
            window.location.href = './endGame.html'
        }else{
            document.getElementById('v' + life).src = './img/coracao_vazio.png';
            life++
        }
    }
    //--------------------------------------------------

    let posicao_x = Math.floor(Math.random() * largura) - 220;
    let posicao_y = Math.floor(Math.random() * altura) - 220;

    posicao_x = posicao_x < 10 ? 10 : posicao_x;
    posicao_y = posicao_y < 10 ? 10 : posicao_y;

    console.log(posicao_x, posicao_y);

    // criação do elemento mosquito no html
    let mosquito = document.createElement('img');
    mosquito.src = "./img/mosquito.gif"
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicao_x + 'px';
    mosquito.style.top = posicao_y + 'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito);
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
}

function tamanhoAleatorio() {
    let tamanho = Math.floor(Math.random() *3);
    console.log(tamanho);
    switch (tamanho) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        
    }
}

function ladoAleatorio() {
    let lado = Math.floor(Math.random() *3);
    console.log(lado);
    switch (lado) {
        case 0:
            return 'lado1'
        case 1:
            return 'lado2'
        
    }
}