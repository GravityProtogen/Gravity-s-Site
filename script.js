// Manipulação do Scroll para definir a propriedade CSS '--scroll'
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);

// Adiciona a classe 'navbarDark' na navbar ao rolar além de 900px
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 900) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Toggle do Menu de Navegação em Dispositivos Móveis
const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
