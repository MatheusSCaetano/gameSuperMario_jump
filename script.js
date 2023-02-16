const mario = document.querySelector('.mario'); //pegando a 'class = mario';
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    // A constante 'jump' executa a functiom 'mario -> jump' -> que é o mario executando o evento 'jump' que está abaixo;
setTimeout(() => {
    mario.classList.remove('jump'); //Remove para removver a classe para que possamos executá-la novamente;    
}, 500); 
//O 'setTimeout' recebe dois parâmetros, uma function e um tempo. Por conta da animação ter uma duração de tempo ele se faz necessário;
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition);
    
    
    if(pipePosition <= 60 &&pipePosition > 0  && marioPosition < 105   ){
        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src='./imagens/over.png';

        clearInterval(loop);
    }    

}, 10);

document.addEventListener('keydown', jump); //'keydown -> quando presionar uma tecla.'
//Evento 'jump' criado;