// Corações flutuando
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 200 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 400);

// Botões
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const message = document.querySelector('.message');

yesBtn.addEventListener('click', () => {
  message.style.display = 'block';
  noBtn.style.opacity = 0;
  yesBtn.style.position = 'center';
});

// Botão "Não" que desaparece e reaparece em outra posição
noBtn.addEventListener('click', () => {
  noBtn.style.transition = "opacity 0.5s ease";
  noBtn.style.opacity = 1;

  setTimeout(() => {
    const x = Math.random() * (window.innerWidth - 2000);
    const y = Math.random() * (window.innerHeight - 2000);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.opacity = 1;
  }, 200);
});
