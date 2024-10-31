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


  // ------------------------
    // ANIMAÇÃO DO PosterRed
    // Seleciona a imagem do PosterRed
    const posterRed = document.querySelector('.posterRed');

    // Cria um novo observador para a animação da imagem
    const posterRedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe animate para rodar a animação
                posterRed.classList.add('animate');
            } else {
                // Remove a classe animate quando não estiver visível
                posterRed.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    // Observa a imagem do ProtoFormal para animação
    posterRedObserver.observe(posterRed);

    // Personagens

    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            
            if(panel.classList.contains("active")) {
                panel.classList.remove('active')
            }
            else{
                removeActiveClasses();
                panel.classList.add('active');
            }
        })
    })

    function removeActiveClasses(){
        panels.forEach(panel => {
            panel.classList.remove('active');
        })
    }



    // Function to fetch and update the number
    function updateNumber() {
        fetch('./dados.json') // Replace with your JSON file path
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Assuming your JSON has a structure like: { "number": 42 }
                const numberToDisplay = data.vezesAssistidas; // Adjust based on your JSON structure
                document.getElementById('vezesAssistidas').textContent = numberToDisplay;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Call the function to update the number
    updateNumber();


    //Pegar Api do FFXIV Collect 

    function atualizarCanyou(){
        fetch("https://ffxivcollect.com/api/characters/52094161") //URL da API
        .then(response => {
            // Try Catch dos Erros
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('nomeCanyou').textContent = data.name;
            document.getElementById('serverCanyou').textContent = data.server;
            document.getElementById('dataCanyou').textContent = data.data_center;
            document.getElementById('retratoCanyou').src = data.portrait;
        })
        .catch(error =>{
            console.error("Erro na operação de fetch:", error)
        });
    }
        atualizarCanyou()


});
