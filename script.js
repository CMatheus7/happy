document.addEventListener('DOMContentLoaded', function() {
    // Cria corações responsivos
    function criarCoracoes() {
        const heartsContainer = document.querySelector('.hearts-background');
        const heartCount = window.innerWidth < 768 ? 10 : 15;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.classList.add('heart');
            
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 3 + 1) + 'rem';
            heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            
            heartsContainer.appendChild(heart);
        }
    }

    // Cria confetes
    function criarConfete() {
        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
        const container = document.body;
        const confettiCount = window.innerWidth < 768 ? 50 : 100;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            
            const animationDuration = Math.random() * 3 + 2;
            confetti.style.animation = `confetti-fall ${animationDuration}s ease-in forwards`;
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, animationDuration * 1000);
        }
    }

    // Configura o presente
    function configurarPresente() {
        const presente = document.querySelector('.presente');
        const mensagem = document.querySelector('.mensagem');
        const audio = document.getElementById('audioParabens');
        
        // Toca áudio no iOS (que requer interação)
        function tocarAudio() {
            audio.play().catch(e => {
                // Fallback para dispositivos que bloqueiam autoplay
                document.body.addEventListener('click', function handler() {
                    audio.play();
                    document.body.removeEventListener('click', handler);
                });
            });
        }
        
        presente.addEventListener('click', function() {
            this.classList.add('abrir-presente');
            
            setTimeout(() => {
                mensagem.classList.add('mostrar');
                tocarAudio();
                criarConfete();
            }, 500);
        });
        
        // Permite tocar o áudio em dispositivos móveis
        document.addEventListener('touchstart', function() {}, { once: true });
    }

    // Inicializa
    criarCoracoes();
    configurarPresente();
    
    // Redimensionamento da tela
    window.addEventListener('resize', function() {
        document.querySelector('.hearts-background').innerHTML = '';
        criarCoracoes();
    });
});