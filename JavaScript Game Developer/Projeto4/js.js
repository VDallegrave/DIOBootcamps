const dino  = document.querySelector('.dino');
let isJumping = false;
let isGameOver = false;
const background = document.querySelector('.background');
let position = 0;


function handleKeyUp(event) {
    if(event.keyCode === 32) {
       if (!isJumping){
           jump();
       }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
      if (position >= 150) {
        clearInterval(upInterval);
  
        let downInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
          } else {
            position -= 20;
            dino.style.bottom = position + 'px';
          }
        }, 20);
      } else {
        position += 20;
        dino.style.bottom = position + 'px';
      }
    }, 20);
}

function creatCactus() {
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position > 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="Game Over">Fim de Jogo!</h1>';
        } else {
            cactusPosition -=10 ;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(creatCactus, randomTime);
}

creatCactus();
document.addEventListener('keyup', event);