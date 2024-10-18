
document.addEventListener("DOMContentLoaded", function() {
    

    // Seleciona a img
    const protoFormalImg = document.querySelector('.protoFormal');

    // Cria observador
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Se está em view, adiciona a class animate para rodar a animação
            protoFormalImg.classList.add('animate');
        } else {
            // Se não, remove a class animate
            protoFormalImg.classList.remove('animate');
        }
    });
});

// Observe the protoFormal image
observer.observe(protoFormalImg);
});
// Toggle do Menu de Navegação em Dispositivos Móveis
const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

