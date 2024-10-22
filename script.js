document.addEventListener("DOMContentLoaded", function() {
    // INDICADOR DE SEÇÂO
    // Seleciona os indicadores
    const indicadores = document.querySelectorAll('.indicador');
    
    // Função para rolar até a seção
    indicadores.forEach(indicador => {
        indicador.addEventListener('click', () => {
            const section = document.querySelector(indicador.getAttribute('data-section'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Seção não encontrada para o indicador: ${indicador.getAttribute('data-section')}`);
            }
        });
    });

    // Observa as seções para marcar o indicador ativo
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const indicator = document.querySelector(`.indicador[data-section="#${entry.target.id}"], .indicador[data-section=".${entry.target.classList[0]}"]`);
            if (entry.isIntersecting) {
                if (indicator) indicator.classList.add('active');
            } else {
                if (indicator) indicator.classList.remove('active');
            }
        });
    }, { threshold: 0.5 });

    // Observa as seções para destacar o indicador correspondente
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ------------------------
    // ANIMAÇÃO DO PROTOFORMAL
    // Seleciona a imagem do ProtoFormal
    const protoFormalImg = document.querySelector('.protoFormal');

    // Cria um novo observador para a animação da imagem
    const protoFormalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe animate para rodar a animação
                protoFormalImg.classList.add('animate');
            } else {
                // Remove a classe animate quando não estiver visível
                protoFormalImg.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    // Observa a imagem do ProtoFormal para animação
    protoFormalObserver.observe(protoFormalImg);
});
