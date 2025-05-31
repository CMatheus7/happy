// Cria corações caindo
function criarCoracoes() {
    const heartsContainer = document.querySelector('.hearts-background');
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        heartsContainer.appendChild(heart);
    }
}

// Cria efeito de confete
function criarConfete() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    const container = document.body;
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        const animationDuration = Math.random() * 3 + 2;
        confetti.style.animation = `confetti-fall ${animationDuration}s ease-in forwards`;
        
        container.appendChild(confetti);
        
        // Remove o confete após a animação
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Adiciona estilos dinâmicos para o confete
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes confetti-fall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 1;
                top: 100vh;
            }
        }
    </style>
`);

// Configura o presente para abrir e mostrar a mensagem
function configurarPresente() {
    const presente = document.querySelector('.presente');
    const mensagem = document.querySelector('.mensagem');
    const audio = document.getElementById('audioParabens');
    
    presente.addEventListener('click', function() {
        // Adiciona classe para animar a abertura
        this.classList.add('abrir-presente');
        
        // Mostra a mensagem após um pequeno delay
        setTimeout(() => {
            mensagem.classList.add('mostrar');
            
            // Toca o áudio dos parabéns
            audio.play().catch(e => console.log("Autoplay bloqueado:", e));
            
            // Cria efeito de confete
            criarConfete();
            
        }, 500);
    });
}

// Inicializa tudo quando a página carregar
window.addEventListener('load', function() {
    criarCoracoes();
    configurarPresente();
});