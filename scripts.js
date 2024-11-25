document.addEventListener('DOMContentLoaded', () => {
    
    // Criar corações flutuantes
    const heartsContainer = document.querySelector('.hearts-container');
    
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
      heart.style.animationDuration = `${Math.random() * 3 + 5}s`; // Duração aleatória entre 5s e 8s
      heartsContainer.appendChild(heart);
  
      // Remove o coração após a animação
      setTimeout(() => heart.remove(), 8000);
    }, 500); // Cria um coração a cada 500ms
  });
  