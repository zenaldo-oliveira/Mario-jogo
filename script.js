const [mario, pipe, restart] = ['.mario', '.pipe', '.restart'].map((item) => {
  return document.querySelector(item);
});

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  //colocando o + na frente da string (window) ele converte para number
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');
  console.log('marioPosition');

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './assets/game-over.png';
    mario.style.width = '100px';
    mario.style.marginLeft = '23px';
  }
}, 10);

restart.addEventListener('click', () => {
  location.reload(true);
});

document.addEventListener('keydown', jump);
