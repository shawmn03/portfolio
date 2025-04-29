function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.backgroundColor = getRandomPastelColor();
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';

  document.getElementById('heart-container').appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

function getRandomPastelColor() {
  const pastelColors = ['#ffc0cb', '#ffb6c1', '#ffd1dc', '#ffe4e1', '#f8c8dc'];
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

setInterval(createHeart, 300);
